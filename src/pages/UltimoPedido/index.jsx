import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import { PrecioTotal } from '../../utils';
import Layout from '../../Components/Layout';
import Container from '@mui/material/Container';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import MisPedidos from '../Pedidos';
import LoadingPage from '../../Components/Loading';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';


import CompletarPago from '../../Components/CompletarPago';

const UltimoPedido = () => {

    const navigate = useNavigate();
    const context = useContext(CarritoDeCompras);
    const index = context.order.length - 1;

    // Estado para controlar la carga
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    if (dataLoading) {
        return <LoadingPage />;
    }

    // Calcular el precio total de todos los productos
    const precioTotal = PrecioTotal(context.order?.[index]?.productos);


    return (
        <Layout>

            <Container maxWidth="xl" >
                <button
                    onClick={() => { navigate(-1) }}
                    className='flex items-center text-gray-700 mt-20 ml-20 rounded-md hover:text-[#f5821f] transition duration-500 ease-in-out opacity-50'
                >
                    <ChevronLeftIcon className="mr-2 h-7 w-7" />
                    <p className="text-xl font-semibold">volver</p>
                </button>



                {context.order.length === 0 || context.order[index]?.productos?.length === 0 ? (
                    <div className="flex flex-col w-full px-4 md:px-40 py-10 h-screen items-center justify-center">
                        <MoodBadIcon
                            className="h-20 w-20 text-black mb-4"
                            style={{ fontSize: 200 }}
                        />
                        <p className="text-3xl font-semibold text-[#f5821f] mb-4">No hay pedidos aún.</p>
                        <p className="text-xl text-gray-600">¡Empieza agregando productos a tu carrito!</p>
                    </div>
                ) : (
                    <div className=" ">
                        <div className="flex flex-col md:flex-row w-full xl:px-20 lg:px-10 md:px-0 mb-20">

                            <CompletarPago precioTotal={precioTotal} carrito={context.order[index]?.productos} />



                            <MisPedidos />

                        </div>

                    </div>

                )}

            </Container>

        </Layout>
    );
};

export default UltimoPedido;
