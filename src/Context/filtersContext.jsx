import { createContext } from "react";

export const FiltrarContext = createContext();

export const FiltrarProvider = ({ children }) => {

    const [filtro, setFiltro] = useState(
        {
            categoria: 'all',
            precioMinimo: 0,
        }
    )

    return (
        <FiltrarContext.Provider
            value={{
                filtro,
                setFiltro
            }}>

            {children}
        </FiltrarContext.Provider>
    )
}

