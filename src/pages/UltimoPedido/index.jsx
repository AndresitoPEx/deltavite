import { useContext, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import OrderCard from '../../Components/OrderCard';
import { PrecioTotal } from '../../utils';
import Layout from '../../Components/Layout';
import Container from '@mui/material/Container';

const UltimoPedido = () => {
    const context = useContext(CarritoDeCompras);
    const index = context.order.length - 1;

    const eliminarProducto = (codigo) => {
        const newProducts = context.order[index].productos.filter(
            (producto) => producto.codigo !== codigo
        );
        const newOrder = {
            ...context.order[index],
            productos: newProducts,
        };
        const newOrderList = [
            ...context.order.slice(0, index),
            newOrder,
            ...context.order.slice(index + 1),
        ];
        context.setOrder(newOrderList);
    };
    useEffect(() => {
        context.setTotal(parseFloat(PrecioTotal(context.order?.[index]?.productos)));
    }, [context.order?.[index]?.productos]);

    return (
        <Layout>
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
                        <h1 className="text-3xl font-semibold text-center mb-10 mt-5 text-[#f5821f]">
                            Lista de Pedidos:
                        </h1>

                        <div className="flex flex-col md:flex-row w-full md:px-40 py-10 h-screen">
                            <div className="flex flex-col md:w-3/5 px-5">
                                {context.order?.[index]?.productos?.map((producto) => {
                                    return (
                                        <OrderCard
                                            key={producto.codigo}
                                            codigo={producto.codigo}
                                            nombre={producto.nombre}
                                            imagen={producto.imagen}
                                            precio={producto.precio}
                                            handleDelete={() => eliminarProducto(producto.codigo)}
                                        />
                                    );
                                })}
                            </div>
                            <div className="flex flex-col md:border-l-2 md:pl-5">
                                <div className="mb-20">
                                    <h3 className="text-lg font-semibold">
                                        Precio Total:{' '}
                                        <span className="font-bold text-2xl">
                                            S/. {PrecioTotal(context.order?.[index]?.productos)}
                                        </span>
                                    </h3>
                                </div>
                                <Link to="/checkout">
                                    <button className="flex bg-[#f5821f] p-5 w-auto h-8 items-center justify-center rounded-md text-white font-semibold hover:bg-[#e26611]">
                                        Continuar Pedido
                                        <ChevronRightIcon className="h-6 w-6 cursor-pointer ml-2" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </Layout>
    );
};

export default UltimoPedido;
