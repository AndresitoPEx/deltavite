import { useContext } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import { PrecioTotal } from '../../utils';
import Layout from '../../Components/Layout';
import Container from '@mui/material/Container';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

//Area de Pago
import BotonesPasarelas from '../../Components/ProcesoDePago/BotonPasarela';

const UltimoPedido = () => {
    const context = useContext(CarritoDeCompras);
    const index = context.order.length - 1;

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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <p className="text-3xl font-semibold text-[#f5821f] mb-4">No hay pedidos aún.</p>
                        <p className="text-xl text-gray-600">¡Empieza agregando productos a tu carrito!</p>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col md:flex-row w-full md:px-40 py-10 h-screen">
                            <div className="flex flex-col md:w-7/12 px-5">
                                <div className="flex justify-between items-center mb-5">
                                    <div>
                                        <h1 className="text-3xl font-semibold text-gray-600">
                                            Pagar con:
                                        </h1>

                                        <BotonesPasarelas />
                                    </div>
                                    

                                </div>
                            </div>
                            <div className="flex flex-col md:border-l-2 md:pl-5">

                                <div className="bg-white mb-20 md:mb-0 md:sticky md:top-20 md:py-5 md:px-5 md:shadow-md md:rounded-md w-full h-4/5">
                                    <div className="border-b-2">
                                        {context.order?.[index]?.productos?.map((producto) => (
                                            <div key={producto.codigo} className="mb-5 relative">
                                                <div className="flex items-center gap-5 ">
                                                    <figure className="w-24 h-w-24  rounded-md object-cover bg-gray-200 shadow-md flex-shrink-0 relative">
                                                        <Badge
                                                            badgeContent={producto.cantidad}
                                                            color="primary"
                                                            className="absolute top-0 right-0"
                                                        >
                                                            <img src={producto.imagen} alt="" className="w-full h-full object-cover" />

                                                        </Badge>


                                                    </figure>

                                                    <div className="flex justify-between items-center w-full border-b-2 pb-5 md:pb-0 md:border-b-0 md:pr-2 md:py-2 md:gap-5 md:flex-row
                                                    ">
                                                        <p className="text-md font-normal">
                                                            {producto.nombre}
                                                            {
                                                                producto?.codigo ? (
                                                                    <span className="text-gray-500 block text-xs">
                                                                        {producto.codigo}
                                                                    </span>
                                                                ) : (
                                                                    <span className="text-gray-500 block text-xs">
                                                                        Sin codigo
                                                                    </span>

                                                                )
                                                            }
                                                        </p>

                                                        <p className="text-md font-semibold text-gray-600 w-full 
                                                        md:w-auto md:text-right md:ml-auto md:mr-0 md:font-normal md:text-md md:py-0 md:px-0 md:mt-0 md:mb-0 md:gap-5 md:flex-row md:items-center md:justify-between md:space-x-5
                                                        ">
                                                            S/.{calcularPrecioTotalPorProducto(producto)}
                                                        </p>


                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <br />
                                    <h3 className="flex justify-between items-center w-full border-b-2 pb-5 md:pb-0 md:border-b-0 md:px-5 md:py">
                                        <span className="font-normal text-xl text-gray-600 md:text-2xl">
                                            Total:
                                        </span>
                                        <span className="font-bold text-2xl">
                                            S/. {precioTotal}


                                        </span>
                                    </h3>
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
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </Layout>
    );
};

export default UltimoPedido;
