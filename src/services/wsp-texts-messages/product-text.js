export const wspMessageProduct = (product) => {
  const message = `Hola, 
  me gustaría consultar por el producto: ${product.nombre}, de precio:${product.precio} pesos.`
  return message
}