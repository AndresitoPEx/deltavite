export const PrecioTotal = (productos) => {
    let total = 0; // Variable para almacenar el total inicializado en 0

    productos.forEach((producto) => {
        const precio = parseFloat(producto.precio); // Convertir el precio a número decimal

        if (!isNaN(precio)) { // Verificar si el precio es un número válido (no es NaN)
            total += precio; // Sumar el precio al total
        }
    });

    return total.toFixed(2); // Devolver el total formateado con dos decimales
};
