

export const PrecioTotal = (productos) => {
    let total = 0
    productos.forEach((producto) => {
        total += producto.precio
    })
    return total
}