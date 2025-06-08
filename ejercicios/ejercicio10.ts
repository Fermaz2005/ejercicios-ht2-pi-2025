// Paso 1: Enums
enum Prioridad {
  ALTA = 'Alta',
  MEDIA = 'Media',
  BAJA = 'Baja'
}

enum EstadoTarea {
  PENDIENTE = 'Pendiente',
  EN_PROGRESO = 'En progreso',
  FINALIZADA = 'Finalizada'
}

// Paso 2: Interfaz
interface Tarea {
  id: number
  titulo: string
  completada: boolean
  prioridad: Prioridad
  estado: EstadoTarea
}

// Paso 3: Clase GestorTareas
class GestorTareas {
  private tareas: Tarea[] = []

  agregarTarea(titulo: string, prioridad: Prioridad) {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo,
      completada: false,
      prioridad,
      estado: EstadoTarea.PENDIENTE
    }
    this.tareas.push(nuevaTarea)
  }

  listarTareas() {
    for (const tarea of this.tareas) {
      console.log(`[${tarea.prioridad}] ${tarea.titulo} - Estado: ${tarea.estado}`)
    }
  }
}

// Paso 4: Uso del gestor
const gestor = new GestorTareas()
gestor.agregarTarea('Estudiar para el parcial', Prioridad.ALTA)
gestor.agregarTarea('Revisar correo', Prioridad.MEDIA)
gestor.agregarTarea('Comprar snacks', Prioridad.BAJA)

console.log('--- Tareas (versión texto) ---')
gestor.listarTareas()