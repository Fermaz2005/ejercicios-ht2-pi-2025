import readline from 'readline-sync'

// 👉 Paso 1: Solicitar entrada de datos
const nombre = readline.question("Ingresa tu nombre: ")
const edadTexto = readline.question("Ingresa tu edad: ")
const activoTexto = readline.question("¿Estas activo? (true/false)")

// 👉 Paso 2: Declarar y convertir datos
const edad = parseInt(edadTexto)
const activo = activoTexto === 'true'

// 👉 Paso 3: Imprimir mensaje personalizado
console.log(`Hola, me llamo ${nombre}, tengo ${edad} años y estoy activo: ${activo}`)

// 👉 Paso 4: Imprimir tipos de datos usando typeof
console.log(`Tipo de nombre: ${typeof nombre}`)
console.log(`Tipo de edad: ${typeof edad}`)
console.log(`Tipo de activo: ${typeof activo}`)

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
let valorNulo = null
let valorNoAsignado;
console.log(`Tipo de valorNulo: ${typeof valorNulo}`)
console.log(`Tipo de valorNoAsignado: ${typeof valorNoAsignado}`)