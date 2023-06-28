import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoDeCompras } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
    const context = useContext(CarritoDeCompras)

    const { contar } = useContext(CarritoDeCompras)

    const activeStyle = "text-[#f5821f] border-b-2 border-[#f5821f] pb-1 transition duration-500 ease-in-out font-semibold "




    return (
        <nav className="bg-black text-white flex justify-between items-center w-full py-5 px-40 text-xl font-thin z-10 border-b-2">
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/tienda">
                        Tienda
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/contacto">
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/nosotros">
                        Nosotros
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-base font-medium text-gray-500">
                    andresrt952@gmail.com
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/mi-pedido">
                        Mi Pedido
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/login">
                        Sing in
                    </NavLink>
                </li>
    
                <li className="flex items-center justify-center">
                    <button className="flex items-center justify-center"
                        onClick={() => context.openCheckOutMenu()}
                    >
                        <ShoppingBagIcon className="h-6 w-6" />
                        <span
                            className="text-white rounded-full w-6 h-6 p-1 text-sm font-semibold">
                            {contar}
                        </span>
                    </button>

                </li>

            </ul>
        </nav>
    )
}

export default Navbar