import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './Context'

import Home from './pages/Home'
import Tienda from './pages/TIenda'
import Contacto from './pages/Contacto'
import CuentaCliente from './pages/MiCuenta'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import MisPedidos from './pages/Pedidos'
import UltimoPedido from './pages/UltimoPedido'
import Login from './pages/Login'
import Navbar from './Components/NavBar'
import DetalleProducto from './Components/DetalleProducto'
import CheckOutMenu from './Components/CheckOutMenu'

import './App.css'


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/tienda', element: <Tienda /> },
    { path: '/producto/:codigo', element: <DetalleProducto />},
    { path: '/contacto', element: <Contacto /> },
    { path: '/mi-cuenta', element: <CuentaCliente /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/mis-pedidos', element: <MisPedidos /> },
    { path: '/ultimo-pedido', element: <UltimoPedido /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> },

  ])

  return routes

}

const App = () => {

  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutMenu />  
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
