import { createContext, useState } from "react";

export const CarritoDeCompras = createContext();

export const CarritoProvider = ({ children }) => {

    const [contar, setContar] = useState(0);

    const [productosCarrito, setProductosCarrito] = useState([])

    const [isCheckOutMenuOpen, setCheckOutMenu] = useState(false)
    const openCheckOutMenu = () => setCheckOutMenu(true)
    const closeCheckOutMenu = () => setCheckOutMenu(false)

    const [order, setOrder] = useState([])




    return (
        <CarritoDeCompras.Provider
            value={{
                contar,
                setContar,

                productosCarrito,
                setProductosCarrito,

                isCheckOutMenuOpen,
                openCheckOutMenu,
                closeCheckOutMenu,

                order,
                setOrder

            
            }}>

            {children}
        </CarritoDeCompras.Provider>
    )
}