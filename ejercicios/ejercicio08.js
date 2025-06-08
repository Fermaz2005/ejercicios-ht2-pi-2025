// Paso 1: Declarar arreglo de productos
const productos = [
  { nombre: 'Zapatos', precio: 100 },
  { nombre: 'Camisa', precio: 80 },
  { nombre: 'Pantalón', precio: 120 },
  { nombre: 'Corbata', precio: 50 }
]

// Paso 2: Agregar IVA con map (12%)
const productosConIVA = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precioConIVA: parseFloat((producto.precio * 1.12).toFixed(2)) // redondear a 2 decimales
  }
})

console.log('Productos con IVA:')
console.log(productosConIVA)

// Paso 3: Filtrar productos con precioConIVA >= 100
const productosFiltrados = productosConIVA.filter(producto => producto.precioConIVA >= 100)

console.log('Productos filtrados (>= Q100):')
console.log(productosFiltrados)

// Paso 4: Ordenar por precioConIVA (de menor a mayor)
const productosOrdenados = [...productosConIVA].sort((a, b) => a.precioConIVA - b.precioConIVA)

console.log('Productos ordenados por precio con IVA:')
console.log(productosOrdenados)