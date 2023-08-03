import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import { PrecioTotal } from '../../utils';
import Layout from '../../Components/Layout';
import Container from '@mui/material/Container';
import { Badge, Divider, Paper } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import MisPedidos from '../Pedidos';
import LoadingPage from '../../Components/Loading';


//Area de Pago
import BotonesPasarelas from '../../Components/ProcesoDePago/BotonPasarela';
import RegistrarCliente from '../../Components/RegistrarCliente';

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

    // Calcular el precio total por producto (ya que la cantidad está en cada producto)
    const calcularPrecioTotalPorProducto = (producto) => {
        return (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
    };

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
                            <div className="flex flex-col md:w-7/12 px-5">
                                <div className="flex flex-col">
                                    <Divider>
                                        <h1 className="text-md text-center mb-2 font-semibold text-gray-600">
                                            Paga rapidamente con:
                                        </h1>
                                    </Divider>
                                    <Paper variant="outlined" square className="my-5 p-5">
                                        <div>
                                            <BotonesPasarelas />
                                        </div>
                                    </Paper>
                                    <span className="text-md text-center mb-5 font-semibold text-gray-600 mt-5">
                                        <Divider>
                                            <h1 className="text-md text-center justify-center mb-2 font-semibold text-gray-600">
                                                O
                                            </h1>
                                        </Divider>
                                    </span>
                                    <div>

                                        {/* <RegistrarCliente /> */}
                                    </div>

                                </div>
                            </div>

                            <div>
                                <MisPedidos />
                            </div>
                        </div>

                    </div>

                )}
                <Link to="/pagar-productos">
                    <button className="flex text-lg bg-[#f5821f] p-8 w-auto h-8 items-center justify-center rounded-md text-black font-semibold hover:bg-[#e26611] transition duration-300 ease-in-out cursor-pointer mt-5">
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
                </Link>
            </Container>

        </Layout>
    );
};

export default UltimoPedido;
