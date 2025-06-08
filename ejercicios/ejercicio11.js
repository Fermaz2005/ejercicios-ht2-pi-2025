"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarDB = cargarDB;
exports.guardarCambiosDB = guardarCambiosDB;
exports.hacerBackupDB = hacerBackupDB;
exports.registrarLog = registrarLog;
exports.listar = listar;
exports.insertar = insertar;
exports.eliminar = eliminar;
exports.crearBackUp = crearBackUp;
// Archivo: db.ts
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const DB_PATH = path_1.default.join(__dirname, 'db.json');
const BACKUP_DIR = path_1.default.join(__dirname, 'backups');
function cargarDB() {
    if (!fs_1.default.existsSync(DB_PATH)) {
        fs_1.default.writeFileSync(DB_PATH, JSON.stringify({ clientes: [] }, null, 2));
    }
    return JSON.parse(fs_1.default.readFileSync(DB_PATH, 'utf-8'));
}
function guardarCambiosDB(data) {
    fs_1.default.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
function hacerBackupDB() {
    if (!fs_1.default.existsSync(BACKUP_DIR)) {
        fs_1.default.mkdirSync(BACKUP_DIR);
    }
    const fecha = new Date();
    const nombre = `db_${fecha.toISOString().replace(/[:.]/g, '-')}.json`;
    const ruta = path_1.default.join(BACKUP_DIR, nombre);
    fs_1.default.copyFileSync(DB_PATH, ruta);
}
const LOG_PATH = path_1.default.join(__dirname, 'log.txt');
function registrarLog(mensaje) {
    const timestamp = new Date().toISOString();
    fs_1.default.appendFileSync(LOG_PATH, `[${timestamp}] ${mensaje}\n`);
}
// Archivo: operaciones.ts
const db_1 = require("./db");
const logger_1 = require("./logger");
function listar(nombreTabla) {
    const db = (0, db_1.cargarDB)();
    return db[nombreTabla] || [];
}
function insertar(nombreTabla, campoId, data) {
    const db = (0, db_1.cargarDB)();
    if (!db[nombreTabla])
        db[nombreTabla] = [];
    const nuevoId = Date.now();
    const nuevoRegistro = { [campoId]: nuevoId, ...data };
    db[nombreTabla].push(nuevoRegistro);
    (0, db_1.guardarCambiosDB)(db);
    (0, logger_1.registrarLog)(`Insertado en ${nombreTabla}: ${JSON.stringify(nuevoRegistro)}`);
}
function eliminar(nombreTabla, campoId, valor) {
    const db = (0, db_1.cargarDB)();
    if (!db[nombreTabla])
        return;
    db[nombreTabla] = db[nombreTabla].filter((item) => item[campoId] !== valor);
    (0, db_1.guardarCambiosDB)(db);
    (0, logger_1.registrarLog)(`Eliminado de ${nombreTabla} con ${campoId}=${valor}`);
}
function crearBackUp() {
    (0, db_1.hacerBackupDB)();
    (0, logger_1.registrarLog)('Backup creado.');
}
// Archivo: index.ts
const operaciones_1 = require("./operaciones");
(0, operaciones_1.insertar)('clientes', 'id', { nombre: 'Jonatan', saldo: 500 });
(0, operaciones_1.insertar)('clientes', 'id', { nombre: 'Darlin', saldo: 700 });
console.log('Lista de clientes:');
console.log((0, operaciones_1.listar)('clientes'));
const clientes = (0, operaciones_1.listar)('clientes');
if (clientes.length > 0) {
    (0, operaciones_1.eliminar)('clientes', 'id', clientes[0].id);
}
(0, operaciones_1.crearBackUp)();
