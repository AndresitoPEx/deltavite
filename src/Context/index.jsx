import { createContext, useState } from "react";

export const CarritoDeCompras = createContext();

export const CarritoProvider = ({ children }) => {

    const [contar, setContar] = useState(0);






    return (
        <CarritoDeCompras.Provider
            value={{
                contar,
                setContar,
            
            }}>

            {children}
        </CarritoDeCompras.Provider>
    )
}