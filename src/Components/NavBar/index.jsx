import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoDeCompras } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const Navbar = () => {

    const { contar } = useContext(CarritoDeCompras)

    const activeStyle = "text-[#f5821f] border-b-2 border-[#f5821f] pb-1 transition duration-500 ease-in-out font-semibold "

    return (
        <nav className="bg-black text-white flex justify-between items-center w-full fixed top-0 py-5 px-8 text-xl font-thin z-10">
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
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/login">
                        Login
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-base font-medium text-black/50">
                    andresrt952@gmail.com

                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/mis-pedidos">
                        Mis Pedidos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/mi-cuenta">
                        Mi Cuenta
                    </NavLink>
                </li>
                <li className="flex items-center justify-center">
                    <ShoppingBagIcon className="h-6 w-6" />
                    <span
                        className="text-white rounded-full w-6 h-6 p-1 text-sm font-semibold">
                        {contar}
                    </span>

                </li>

            </ul>
        </nav>
    )
}

export default Navbar