// Archivo: db.ts
import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(__dirname, 'db.json')
const BACKUP_DIR = path.join(__dirname, 'backups')

export function cargarDB(): any {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ clientes: [] }, null, 2))
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'))
}

export function guardarCambiosDB(data: any): void {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

export function hacerBackupDB(): void {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR)
  }
  const fecha = new Date()
  const nombre = `db_${fecha.toISOString().replace(/[:.]/g, '-')}.json`
  const ruta = path.join(BACKUP_DIR, nombre)
  fs.copyFileSync(DB_PATH, ruta)
}


// Archivo: logger.ts
import fs from 'fs'
import path from 'path'

const LOG_PATH = path.join(__dirname, 'log.txt')

export function registrarLog(mensaje: string): void {
  const timestamp = new Date().toISOString()
  fs.appendFileSync(LOG_PATH, `[${timestamp}] ${mensaje}\n`)
}


// Archivo: operaciones.ts
import { cargarDB, guardarCambiosDB, hacerBackupDB } from './db'
import { registrarLog } from './logger'

export function listar(nombreTabla: string): any[] {
  const db = cargarDB()
  return db[nombreTabla] || []
}

export function insertar(nombreTabla: string, campoId: string, data: any): void {
  const db = cargarDB()
  if (!db[nombreTabla]) db[nombreTabla] = []

  const nuevoId = Date.now()
  const nuevoRegistro = { [campoId]: nuevoId, ...data }
  db[nombreTabla].push(nuevoRegistro)
  guardarCambiosDB(db)
  registrarLog(`Insertado en ${nombreTabla}: ${JSON.stringify(nuevoRegistro)}`)
}

export function eliminar(nombreTabla: string, campoId: string, valor: number): void {
  const db = cargarDB()
  if (!db[nombreTabla]) return
  db[nombreTabla] = db[nombreTabla].filter((item: any) => item[campoId] !== valor)
  guardarCambiosDB(db)
  registrarLog(`Eliminado de ${nombreTabla} con ${campoId}=${valor}`)
}

export function crearBackUp(): void {
  hacerBackupDB()
  registrarLog('Backup creado.')
}


// Archivo: index.ts
import { insertar, listar, eliminar, crearBackUp } from './operaciones'

insertar('clientes', 'id', { nombre: 'Jonatan', saldo: 500 })
insertar('clientes', 'id', { nombre: 'Darlin', saldo: 700 })

console.log('Lista de clientes:')
console.log(listar('clientes'))

const clientes = listar('clientes')
if (clientes.length > 0) {
  eliminar('clientes', 'id', clientes[0].id)
}

crearBackUp()