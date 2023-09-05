import { createContext, useState, useEffect } from "react";

// Crear contexto
export const CarritoDeCompras = createContext();

// Crear provider
export const CarritoProvider = ({ children }) => {

    // 1. Inicializar el estado con localStorage (si hay datos)
    const initialCart = localStorage.getItem('productosCarrito') ? JSON.parse(localStorage.getItem('productosCarrito')) : [];
    const [productosCarrito, setProductosCarrito] = useState(initialCart);

    const handleUpdateCantidad = (codigo, newCantidad) => {
        const updatedProducts = productosCarrito.map((producto) => (producto.codigo === codigo ? { ...producto, cantidad: newCantidad } : producto));
        setProductosCarrito(updatedProducts);
    };

    const agregarProductoACarrito = (producto) => {
        const productoExistente = productosCarrito.find((p) => p.codigo === producto.codigo);
        if (productoExistente) {
            handleUpdateCantidad(producto.codigo, productoExistente.cantidad + 1);
        } else {
            setProductosCarrito([...productosCarrito, { ...producto, cantidad: 1 }]);
        }
        openCheckOutMenu();
    };

    const [isCheckOutMenuOpen, setCheckOutMenu] = useState(false);
    const openCheckOutMenu = () => setCheckOutMenu(true);
    const closeCheckOutMenu = () => setCheckOutMenu(false);

    const initialOrder = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
    const [order, setOrder] = useState(initialOrder);
    const [total, setTotal] = useState(0);

    // Cada vez que cambie productosCarrito actualizamos localStorage
    useEffect(() => {
        if (productosCarrito.length > 0) {
            localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
        } else {
            localStorage.removeItem('productosCarrito');
        }
    }, [productosCarrito]);
    // Cada vez que cambie order actualizamos localStorage
    useEffect(() => {
        if (order.length > 0) {
            localStorage.setItem('order', JSON.stringify(order));
        } else {
            localStorage.removeItem('order');
        }
    }, [order]);




    console.log("Valor de total desde el contexto:", total);
    console.log("Productos en el carrito desde el contexto:", productosCarrito);

    return (
        <CarritoDeCompras.Provider
            value={{
                productosCarrito,
                setProductosCarrito,
                isCheckOutMenuOpen,
                openCheckOutMenu,
                closeCheckOutMenu,
                order,
                setOrder,
                total, // Agregar la variable total al contexto
                setTotal, // Agregar la función setTotal al contexto
                agregarProductoACarrito,
            }}>
            {children}
        </CarritoDeCompras.Provider>
    )
}

export default CarritoProvider;
