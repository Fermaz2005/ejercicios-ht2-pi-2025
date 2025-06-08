"use strict";
// Paso 1: Enums
var Prioridad;
(function (Prioridad) {
    Prioridad["ALTA"] = "Alta";
    Prioridad["MEDIA"] = "Media";
    Prioridad["BAJA"] = "Baja";
})(Prioridad || (Prioridad = {}));
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["PENDIENTE"] = "Pendiente";
    EstadoTarea["EN_PROGRESO"] = "En progreso";
    EstadoTarea["FINALIZADA"] = "Finalizada";
})(EstadoTarea || (EstadoTarea = {}));
// Paso 3: Clase GestorTareas
class GestorTareas {
    constructor() {
        this.tareas = [];
    }
    agregarTarea(titulo, prioridad) {
        const nuevaTarea = {
            id: Date.now(),
            titulo,
            completada: false,
            prioridad,
            estado: EstadoTarea.PENDIENTE
        };
        this.tareas.push(nuevaTarea);
    }
    listarTareas() {
        for (const tarea of this.tareas) {
            console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`);
        }
    }
}
// Paso 4: Uso del gestor
const gestor = new GestorTareas();
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA);
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA);
gestor.agregarTarea('Comprar snacks', Prioridad.BAJA);
console.log('--- Tareas (versión texto) ---');
gestor.listarTareas();
