import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CarritoDeCompras } from '../../Context';
import { Link } from 'react-router-dom';

import OrderCard from '../OrderCard';
import { PrecioTotal } from '../../utils';

import './checkoutmenu.css';

const CheckOutMenu = () => {
    const context = useContext(CarritoDeCompras);

    const handleDelete = (codigo) => {
        const newProducts = context.productosCarrito.filter(producto => producto.codigo !== codigo)
        context.setProductosCarrito(newProducts)

    }

    const handleCheckOut = () => {
        const newOrder = {
            productos: context.productosCarrito,
            totalPrice: PrecioTotal(context.productosCarrito),
            totalProductos: context.productosCarrito.length,
            fecha: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString(),
            estado: 'pendiente',
            id: Math.random().toString(36).substr(2, 9),

        }
        context.setOrder([...context.order, newOrder])
        context.setProductosCarrito([])
        context.closeCheckOutMenu()
    }

    return (
        <aside className={`${context.isCheckOutMenuOpen ? 'flex' : 'hidden'} checkout-menu`}>
            <div className='flex justify-between m-5 items-center '>
                <h2 className='font-medium text-xl'>Mi Orden</h2>
                <button className=''>
                    <XMarkIcon
                        className='h-6 w-6 text-black'
                        onClick={() => context.closeCheckOutMenu()}
                    >
                    </XMarkIcon>
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.productosCarrito.map(producto => {
                        return (
                            <OrderCard
                                key={producto.codigo}
                                codigo={producto.codigo}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                precio={producto.precio}
                                handleDelete={handleDelete}
                            />
                        )
                    }
                    )

                }
            </div>
            <div className='px-6 mb-24'>
                <div className='flex justify-between items-center p-5 mb-3'>
                    <span className='font-light'>Total: </span>
                    <span className='font-medium text-2xl'>S/.{PrecioTotal(context.productosCarrito)}</span>
                </div>
                <Link to="/mi-pedido">
                    <button
                        className='bg-black text-white w-full h-12 font-medium text-xl hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-md '
                        onClick={() => handleCheckOut()}
                    >
                        Continuar
                    </button>
                </Link>
            </div>

        </aside>
    )
}

export default CheckOutMenu;    