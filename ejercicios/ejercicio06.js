// Paso 1: Declarar arreglos
const estudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José']
const notas = [70, 85, 55, 90, 60]

// Paso 2: Saludos personalizados
for (let i = 0; i < estudiantes.length; i++) {
  const nombre = estudiantes[i]
  // Si termina en "a" se asume que es femenino
  if (nombre.endsWith('a')) {
    console.log(`Bienvenida, ${nombre}`)
  } else {
    console.log(`Bienvenido, ${nombre}`)
  }
}

// Paso 3: Calcular promedio
let suma = 0
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]
}
const promedio = suma / notas.length

// Paso 4: Imprimir resultado
console.log(`El promedio del grupo es: ${promedio}`)