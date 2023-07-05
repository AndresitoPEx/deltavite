import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './Context'
//Area Frontend
import Home from './pages/Home'
import Tienda from './pages/TIenda'
import Contacto from './pages/Contacto'
import CuentaCliente from './pages/MiCuenta'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import UltimoPedido from './pages/UltimoPedido'
import Login from './pages/Login'


//Area Backend
import RegistrarProductos from './Admin/RegistrarProductos'
import VerProductos from './Admin/VerProductos'
import AdminHome from './Admin/AdminHome'
import VerUsuarios from './Admin/VerUsuarios'
import VerVentas from './Admin/VerVentas'
import EditarProductoByID from './Admin/EditarProducto'


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
    { path: '/login', element: <Login /> },
    { path: '/SingOut', element: <Login /> },
    { path: '*', element: <NotFound /> },
    //Area Backend
    { path: '/admin-home/*', element: <AdminHome /> },
    { path: '/lista-productos', element: <VerProductos /> },
    { path: '/registrar-productos', element: <RegistrarProductos /> },
    { path: '/editar-producto/:id', element: <EditarProductoByID /> },
    { path: '/lista-usuarios', element: <VerUsuarios /> },
    { path: '/lista-ventas', element: <VerVentas /> },


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
