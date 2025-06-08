import readline from 'readline-sync'

//Paso 1: Solicitar fecha de nacimiento
const fechaNacimientoTexto = readline.question('Ingresa tu fecha de nacimiento (YYYY-MM-DD): ')
const fechaNacimiento = new Date(fechaNacimientoTexto)
const anioNacimiento = fechaNacimiento.getFullYear()

const hoy = new Date()
const anioActual = hoy.getFullYear()
const edad = anioActual - anioNacimiento

//Paso 2: Evaluar grupo etario
if (edad < 12) {
  console.log('Eres un niño')
} else if (edad >= 12 && edad <= 17) {
  console.log('Eres un adolescente')
} else if (edad >= 18 && edad <= 64) {
  console.log('Eres un adulto')
} else {
  console.log('Eres un adulto mayor')
}

//Paso 3: Solicitar nota del examen
const notaTexto = readline.question('Ingresa tu nota del examen (0 a 100): ')
const nota = parseInt(notaTexto)

//Paso 4: Evaluar calificación con else if
if (nota >= 90) {
  console.log('Tu calificación es: A')
} else if (nota >= 80) {
  console.log('Tu calificación es: B')
} else if (nota >= 70) {
  console.log('Tu calificación es: C')
} else if (nota >= 60) {
  console.log('Tu calificación es: D')
} else {
  console.log('Tu calificación es: F')
}