import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CarritoDeCompras } from "../../Context/carritoContext"
import LoginButton from "../LoginButton"
import Profile from "../Profile"
import LogOut from "../LogOut"
import { useAuth0 } from "@auth0/auth0-react"
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"


const Navbar = () => {
    const context = useContext(CarritoDeCompras)

    // Calcular la cantidad total de productos en el carrito
    const cantidadTotalProductos = context.productosCarrito.reduce(
        (total, producto) => total + producto.cantidad, 0
    );

    console.log("Cantidad total de productos en el carrito desde el contexto Navbar:", cantidadTotalProductos);
    //console.log("Productos en el carrito desde el contexto Navbar:", context.productosCarrito.length);

    const { isAuthenticated } = useAuth0()


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
                <li>
                    <Profile />
                </li>

                <li>
                    {isAuthenticated ? <LogOut /> : <LoginButton />}
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                        to="/mi-pedido">
                        Mi Pedido
                    </NavLink>
                </li>

                <li className="flex items-center justify-center">
                    <button className="flex items-center justify-center"
                        onClick={() => context.openCheckOutMenu()}
                    >
                        <ShoppingCart className="h-6 w-6" />
                        <Badge badgeContent={cantidadTotalProductos} color="error"/>
                        
                    </button>

                </li>


            </ul>
        </nav>
    )
}

export default Navbar