export const PrecioTotal = (productos) => {

  if (!productos || productos.length === 0) {
    return 0;
  }
  let total = 0;

  productos.forEach((producto) => {
    const precio = parseFloat(producto.precio);
    const cantidad = producto.cantidad || 1; // Si la cantidad no está definida, asumimos 1 unidad

    if (!isNaN(precio)) {
      total += precio * cantidad;
    }
  });

  console.log("❌PRODUCTOS EN TOTAL DESDE UTILS:", productos);
  console.log("❌PRECIO TOTAL CALCULADO DESDE UTILS:", total);

  return total.toFixed(2);
};
