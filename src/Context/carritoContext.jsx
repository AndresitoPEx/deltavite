import { createContext, useState } from "react";

//crear contexto
export const CarritoDeCompras = createContext();

//crear provider
export const CarritoProvider = ({ children }) => {



    const [productosCarrito, setProductosCarrito] = useState([])

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

    const [isCheckOutMenuOpen, setCheckOutMenu] = useState(false)
    const openCheckOutMenu = () => setCheckOutMenu(true)
    const closeCheckOutMenu = () => setCheckOutMenu(false)

    const [order, setOrder] = useState([])

    const [total, setTotal] = useState(0);


    console.log("Valor de total desde el contexto:", total);
    console.log("Productos en el carrito desde el contexto:", productosCarrito.length);


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
