import { useContext } from "react"
import { FiltrarContext } from "../Context/filtersContext"

export function useFilters() {

    const {filters, setFilters} = useContext(FiltrarContext)

    const filtrarProductos = (productos) => {
        return productos.filter((producto) => {
            return(
                producto.precio >= filters.precioMinimo &&
                (
                    filters.categoria === 'all' ||
                    producto.categoria === filters.categoria
                )
            )
        })
    }

    return {filters, setFilters, filtrarProductos}
}
