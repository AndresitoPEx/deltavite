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
        <Layout className=" bg-gray-100 min-h-screen flex flex-col items-center justify-center w-full h-full ">
            <Container maxWidth="xl">
                {context.order.length === 0 || context.order[index]?.productos?.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <MoodBadIcon
                            className="h-20 w-20 text-black mb-4"
                            style={{ fontSize: 200 }}
                        />
                        <p className="text-3xl font-semibold text-[#f5821f] mb-4">No hay pedidos aún.</p>
                        <p className="text-xl text-gray-600">¡Empieza agregando productos a tu carrito!</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col md:flex-row w-full md:px-40 py-10 h-screen">
                            <div className="flex flex-col md:w-8/12">
                                <div className="flex flex-col items-center justify-center w-full bg-[#f5821f] rounded-lg">
                                    <CompletarPago precioTotal={precioTotal} carrito={context.order[index]?.productos}/>
                                </div>
                            </div>

                            <div>
                                <MisPedidos />
                            </div>
                        </div>

                    </div>

                )}
                {/* <Link to="/pagar-productos">
                    <button
                        className="flex text-lg bg-[#f5821f] p-8 w-auto h-8 items-center justify-center rounded-md text-black font-semibold hover:bg-[#e26611] transition duration-300 ease-in-out cursor-pointer mt-5"
                        onClick={handlePayment}
                    >

                        Completar Pedido

                        {
                            <Badge badgeContent={
                                context.order?.[index]?.productos?.reduce((total, producto) => total + producto.cantidad, 0)
                            }
                                color="error">
                                <ShoppingCart className="h-6 w-6 cursor-pointer ml-2" />
                            </Badge>
                        }
                    </button>
                </Link> */}
            </Container>

        </Layout>
    );
};

export default UltimoPedido;
