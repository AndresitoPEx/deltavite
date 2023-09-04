import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './Context/carritoContext'
import { AuthProvider } from './Context/authContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Context/authContext'
//Area Frontend
import Home from './pages/Home'
import Tienda from './pages/TIenda'
import Contacto from './pages/Contacto'
import CuentaCliente from './pages/MiCuenta'
import Nosotros from './pages/Nosotros'
import NotFound from './pages/NotFound'
import UltimoPedido from './pages/UltimoPedido'
import ConfirmacionDePago from './pages/Confirmacion'
import Login from './pages/Login'
//Area Backend
import AdminHome from './Admin/AdminHome'
import VerProductos from './Admin/VerProductos'
import RegistrarProductos from './Admin/RegistrarProductos'
import EditarProducto from './Admin/EditarProducto'
import VerUsuarios from './Admin/VerUsuarios'
import RegistrarUsuario from './Admin/RegistrarUsuario'
import VerClientes from './Admin/VerClientes'
import MayoristasPage from './pages/MayoristasForm'
import RegistrarCategoria from './Admin/RegistrarCategoria'

//Components
import DetalleProducto from './Components/DetalleProducto'
import CheckOutMenu from './Components/CheckOutMenu'



import './App.css'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      {children}
    </>
  );
};

const AdminRoutes = () => {
  return useRoutes([
    { index: true, element: <AdminHome /> },
    { path: 'lista-productos', element: <VerProductos /> },
    { path: 'registrar-producto', element: <RegistrarProductos /> },
    { path: 'editar-producto/:codigo', element: <EditarProducto /> },
    { path: 'lista-usuarios', element: <VerUsuarios /> },
    { path: 'registrar-usuario', element: <RegistrarUsuario /> },
    { path: 'lista-clientes', element: <VerClientes /> },
    { path: 'registrar-categoria', element: <RegistrarCategoria /> },
  ]);
};


const AppRoutes = () => {


  let routes = useRoutes([
    //Area Frontend
    { path: '/login', element: <Login /> },
    { path: '/home', element: <Home /> },
    { path: '/', element: <Tienda /> },
    { path: '/tienda', element: <Tienda /> },
    { path: '/producto/:codigo', element: <DetalleProducto /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/mi-cuenta', element: <CuentaCliente /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/mi-pedido', element: <UltimoPedido /> },
    { path: '/confirmacion', element: <ConfirmacionDePago /> },
    { path: 'mayoristas-form', element: <MayoristasPage /> },
    //Area Backend
    {
      path: '/admin/*',
      element: <ProtectedRoute>
        <AdminRoutes />
      </ProtectedRoute>,
    },

    { path: '*', element: <NotFound /> },

  ])

  return routes

}

const App = () => {

  return (
    <CarritoProvider>
      <BrowserRouter>
        <AuthProvider>

          <AppRoutes />
          <CheckOutMenu />

        </AuthProvider>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
