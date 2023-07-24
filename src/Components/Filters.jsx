import { useId } from "react"
import useFilters from "../hooks/useFilters"

export function Filters() {

    const { filters, setFilters } = useFilters()

    const precioFiltradoPorId = useId()
    const categoriaFiltradaPorId = useId()

    const handleChangePrecioMinimo = (e) => {

        setFilters(prevState => ({
            ...prevState,
            precioMinimo: e.target.value
        }))
    }

    const handleChangeCategoria = (e) => {
        setFilters(prevState => ({
            ...prevState,
            categoria: e.target.value
        }))
    }

    return (
        <section className="flex flex-col justify-center items-center gap-3 ">
            <div className="flex flex-col justify-center items-center gap-3 ">
                <label htmlFor={precioFiltradoPorId} className="block text-sm font-medium text-gray-700">
                    Precio mínimo
                </label>
                <div className="mt-1">
                    <input
                        type="range"
                        name="precio"
                        id={precioFiltradoPorId}
                        min="0"
                        max="1000"
                        value={filters.precioMinimo}
                        onChange={handleChangePrecioMinimo}
                    />
                    <span>S/.{filters.precioMinimo}</span>
                </div>
            </div>
            <div>
                <label htmlFor={categoriaFiltradaPorId} className="block text-sm font-medium text-gray-700">
                    Categoría
                </label>
                <select id={categoriaFiltradaPorId} name="categoria" onChange={handleChangeCategoria} value={filters.categoria}>
                    <option value="all">Todas</option>
                    <option value="1">Chalecos</option>
                    <option value="2">Mochilas</option>
                </select>
            </div>

        </section>
    )
}
