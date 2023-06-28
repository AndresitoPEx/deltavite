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

import DetalleProducto from './Components/DetalleProducto'
import CheckOutMenu from './Components/CheckOutMenu'
import HeaderDelta from './Components/HeaderDelta'
import Footer from './Components/Footer'

import './App.css'


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/tienda', element: <Tienda /> },
    { path: '/producto/:codigo', element: <DetalleProducto /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/mi-cuenta', element: <CuentaCliente /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/mi-pedido', element: <UltimoPedido /> },
    // { path: '/ultimo-pedido', element: <UltimoPedido /> },

    { path: '/login', element: <Login /> },
    { path: '/SingOut', element: <Login /> },
    { path: '*', element: <NotFound /> },

  ])

  return routes

}

const App = () => {

  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppRoutes />
        <HeaderDelta />
        <Footer />
        <CheckOutMenu />
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
