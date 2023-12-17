export const wspMessageCart = (cart) => {
  let message = `Hola, este es mi carro de compras:\n`
  cart.items.forEach((product) => {
    message += `producto: ${product.nombre} - precio: ${product.precio} - cantidad: ${product.cantidad}\n`
  })
  message += `\nTotal: ${cart.total}`
  return message
}