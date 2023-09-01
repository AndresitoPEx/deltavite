import { NavLink } from "react-router-dom"
import { useState, useContext } from "react"
import { CarritoDeCompras } from "../../Context/carritoContext"
import LoginButton from "../LoginButton"
import Profile from "../Profile"

import { useAuth0 } from "@auth0/auth0-react"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'

const Navbar = () => {
    const context = useContext(CarritoDeCompras)
    const [menuOpen, setMenuOpen] = useState(false)
    const { isAuthenticated } = useAuth0()
    const activeStyle = "text-[#f5821f] sm:border-b-2 sm:border-[#f5821f] pb-1 transition duration-500 ease-in-out font-semibold";

    // Calcular la cantidad total de productos en el carrito
    const cantidadTotalProductos = context.productosCarrito.reduce(
        (total, producto) => total + producto.cantidad, 0
    );

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <nav className="bg-black text-white tracking-wide flex md:flex-row lg:flex-row xl:flex-row justify-between items-center w-full py-2 md:py-4 lg:py-3 px-2 md:px-20 lg:px-40 xl:px-40 text-sm md:text-md lg:text-lg xl:text-xl font-thin z-10">
            <div className="flex justify-between sm:w-auto">
                <MenuIcon className="h-6 w-6 hidden-md-up cursor-pointer transition duration-500 mx-10 ease-in-out hover:text-[#f5821f] " onClick={toggleMenu} />
                <ul className={`flex items-left gap-2 ${menuOpen ? 'flex-col block w-full' : 'hidden'} sm:flex-row sm:w-auto sm:gap-5 transition duration-500 ease-in-out sm:flex sm:items-center sm:justify-center`}>

                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            to="/home">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            to="/">
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
                            to="/mayoristas-form">
                            Mayoristas
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="mx-5 ">
                <ul className="flex items-center gap-2 sm:gap-5 transition duration-500 ease-in-out sm:flex sm:items-center sm:justify-center sm:w-auto">
                    <li className="flex items-center justify-center">
                        <Profile />
                    </li>

                    <li>
                        {isAuthenticated ? '' : <LoginButton />}
                    </li>

                    <li className="flex items-center justify-center">
                        <button className="flex items-center justify-center"
                            onClick={() => context.openCheckOutMenu()}
                        >
                            <Badge
                                badgeContent={cantidadTotalProductos}
                                color="error"
                                className="cursor-pointer transition duration-500 ease-in-out hover:text-[#f5821f]"
                            >
                                <ShoppingCart className="h-6 w-6 cursor-pointer" />
                            </Badge>

                        </button>

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar