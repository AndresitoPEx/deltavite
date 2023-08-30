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

import CompletarPago from '../../Components/CompletarPago';

const UltimoPedido = () => {
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
    



    // const handlePayment = async () => {
    //     try {
    //         const paymentConf = {
    //             amount: parseFloat(precioTotal), // Convertir el precio total a céntimos
    //             currency: 'PEN'
    //         };

    //         const res = await fetch('http://localhost:2000/createPayment', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ paymentConf })
    //         });

    //         const data = await res.json();

    //         if (data.status === 'ERROR') {
    //             console.error("Error al procesar el pago:", data.answer.errorMessage);
    //             // Mostrar un mensaje de error al usuario
    //         } else {
    //             // El pago se procesó con éxito. Redirige o muestra un mensaje de confirmación.
    //         }
    //     } catch (error) {
    //         console.error("Error en el proceso de pago:", error);
    //         // Mostrar un mensaje de error al usuario   

    //     }
    // };


    // // Calcular el precio total por producto (ya que la cantidad está en cada producto)
    // const calcularPrecioTotalPorProducto = (producto) => {
    //     return (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
    // };

    // Calcular el precio total de todos los productos
    const precioTotal = PrecioTotal(context.order?.[index]?.productos);


    return (
        <Layout>
            <Container maxWidth="xl" className='bg-gray-200'>
                {context.order.length === 0 || context.order[index]?.productos?.length === 0 ? (
                    <div className="flex flex-col md:flex-row w-full px-4 md:px-40 py-10 h-screen overflow-y-auto">
                        <MoodBadIcon
                            className="h-20 w-20 text-black mb-4"
                            style={{ fontSize: 200 }}
                        />
                        <p className="text-3xl font-semibold text-[#f5821f] mb-4">No hay pedidos aún.</p>
                        <p className="text-xl text-gray-600">¡Empieza agregando productos a tu carrito!</p>
                    </div>
                ) : (
                    <div className=" ">
                        <div className="flex flex-col md:flex-row w-full xl:px-20 lg:px-10 md:px-0 py-10 ">
                            
                                    <CompletarPago precioTotal={precioTotal} carrito={context.order[index]?.productos}/>
                    

                            
                                <MisPedidos />
                            
                        </div>

                    </div>

                )}
                
            </Container>

        </Layout>
    );
};

export default UltimoPedido;
