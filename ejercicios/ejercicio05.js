import readline from 'readline-sync'

const segundosTexto = readline.question('¿Cuántos segundos quieres temporizar? ')
let segundos = parseInt(segundosTexto)

while (segundos > 0) {
  console.log(`Faltan ${segundos} segundos`)
  segundos--
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000)
}

console.log('El tiempo finalizó')

let opcion

do {
  console.log('\n--- Menú ---')
  console.log('1. Saludar')
  console.log('2. Mostrar hora actual')
  console.log('3. Salir')

  const opcionTexto = readline.question('Elige una opción: ')
  opcion = parseInt(opcionTexto)

  switch (opcion) {
    case 1:
      console.log('¡Hola, usuario!')
      break
    case 2:
      const hora = new Date().toLocaleTimeString()
      console.log(`La hora actual es: ${hora}`)
      break
    case 3:
      console.log('Saliendo del programa...')
      break
    default:
      console.log('Opción inválida, intenta de nuevo.')
  }
} while (opcion !== 3)
