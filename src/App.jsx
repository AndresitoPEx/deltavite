import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './Context/carritoContext'

//Area Frontend
import Home from './pages/Home'
import Tienda from './pages/TIenda'
import Contacto from './pages/Contacto'
import CuentaCliente from './pages/MiCuenta'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import UltimoPedido from './pages/UltimoPedido'



//Area Backend
import AdminHome from './Admin/AdminHome'
import VerProductos from './Admin/VerProductos'
import RegistrarProductos from './Admin/RegistrarProductos'
import EditarProducto from './Admin/EditarProducto'
import VerUsuarios from './Admin/VerUsuarios'
import RegistrarUsuario from './Admin/RegistrarUsuario'
import VerClientes from './Admin/VerClientes'
import RegistrarCliente from './Components/RegistrarCliente'
import VerVentas from './Admin/VerVentas'
import RegistrarCategoria from './Admin/RegistrarCategoria'

//Components
import DetalleProducto from './Components/DetalleProducto'
import CheckOutMenu from './Components/CheckOutMenu'



import './App.css'


const AppRoutes = () => {

  let routes = useRoutes([
    //Area Frontend
    { path: '/', element: <Home /> },
    { path: '/tienda', element: <Tienda /> },
    { path: '/producto/:codigo', element: <DetalleProducto /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/mi-cuenta', element: <CuentaCliente /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/mi-pedido', element: <UltimoPedido /> },
    { path: '*', element: <NotFound /> },
    //Area Backend
    { path: '/admin-home/*', element: <AdminHome /> },
    { path: '/lista-productos', element: <VerProductos /> },
    { path: '/registrar-productos', element: <RegistrarProductos /> },
    { path: '/editar-producto/:codigo', element: <EditarProducto /> },
    { path: '/lista-usuarios', element: <VerUsuarios /> },
    { path: '/registrar-usuario', element: <RegistrarUsuario /> },
    { path: '/lista-ventas', element: <VerVentas /> },
    { path: '/lista-clientes', element: <VerClientes /> },
    { path: '/registrar-cliente', element: <RegistrarCliente /> },
    { path: '/registrar-categoria', element: <RegistrarCategoria /> },


  ])

  return routes

}

const App = () => {

  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppRoutes />

        <CheckOutMenu />
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
