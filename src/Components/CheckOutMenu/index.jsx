import { useContext, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import { PrecioTotal } from '../../utils';
import OrderCard from '../OrderCard';
import './checkoutmenu.css';

const CheckOutMenu = () => {
    const context = useContext(CarritoDeCompras);


    useEffect(() => {
        console.log('Valor actual de total en el contexto desde CheckOutMenu:', context.total);
        console.log('-----------------------');
    }, [context.total]);

    // Calcular el precio total inicial cuando se carga el componente
    useEffect(() => {
        const totalInicial = parseFloat(PrecioTotal(context.productosCarrito));
        context.setTotal(totalInicial);
    }, [context.productosCarrito]);



    const handleUpdateTotal = (precio) => {
        context.setTotal((prevTotal) => prevTotal + parseFloat(precio));
        console.log('Valor actual de total en el contexto desde handleUpdateTotal:', context.total);
    };

    const handleDelete = (codigo, precio) => {
        const newProducts = context.productosCarrito.filter((producto) => producto.codigo !== codigo);
        context.setProductosCarrito(newProducts);
        handleUpdateTotal(-precio);
        console.log('Valor actual de total en el contexto eliminando un producto desde handleDelete en CheckOutMenu:', context.total);
    };


    const handleCheckOut = () => {
        const newOrder = {
            productos: context.productosCarrito,
            totalPrice: PrecioTotal(context.productosCarrito),
            totalProductos: context.productosCarrito.length,
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
            estado: 'pendiente',
            id: Math.random().toString(36).substr(2, 9),
            cantidad: {
                nombreProducto : context.productosCarrito.map((producto) => producto.nombre),
                cantidadProducto : context.productosCarrito.map((producto) => producto.cantidad)
            }
        };
        context.setOrder([...context.order, newOrder]);
        context.setProductosCarrito([]);
        context.setTotal(0);
        context.closeCheckOutMenu();
        console.log('datos de la orden: ', newOrder);
        console.log("Precio total después de la orden:", context.total);
    };

    return (
        <aside className={`${context.isCheckOutMenuOpen ? 'flex' : 'hidden'} checkout-menu bg-gray-300`}>
            <div className="flex justify-between m-5 items-center border-b-2 border-gray-300 pb-2 px-3 mb-3 sticky top-0">
                <h2 className="font-medium text-xl">Mi Carrito: </h2>
                <button className="">
                    <XMarkIcon className="h-6 w-6 text-black hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer " onClick={() => context.closeCheckOutMenu()}></XMarkIcon>
                </button>
            </div>
            <div className="px-3 flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
                {context.productosCarrito.map((producto) => {
                    return (
                        <OrderCard
                            key={producto.codigo}
                            codigo={producto.codigo}
                            nombre={producto.nombre}
                            imagen={producto.imagen}
                            precio={parseFloat(producto.precio).toFixed(2)} // Este es el total de cada producto en el carrito
                            cantidad={producto.cantidad}
                            handleDelete={handleDelete}
                            handleUpdateTotal={handleUpdateTotal}
                            handleUpdateCantidad={(newCantidad) => handleUpdateCantidad(producto.codigo, newCantidad)} // Agregamos la función de actualización de cantidad
                        />
                    );
                })}
            </div>
            <div className="px-6 mb-24 flex flex-col justify-between border-t-2">
                <div className="flex justify-between items-center p-5 mb-3">

                    <span className="font-light text-xl">Sub Total: </span>
                    <span className="font-medium text-2xl">S/. {parseFloat(context.total).toFixed(2)}</span>{/* Aqui se muestra el precio total de los productos seleccionados, tambien debe aumentar o disminuir segun el cliente presione en "-" o "+" */}
                </div>
                <Link to="/mi-pedido">
                    <button
                        className="bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer w-full"
                        onClick={handleCheckOut}
                    >
                        Continuar Pedido
                    </button>
                </Link>
            </div>
        </aside>
    );
};

export default CheckOutMenu;
