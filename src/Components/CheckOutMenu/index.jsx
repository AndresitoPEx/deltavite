import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { CarritoDeCompras } from '../../Context';

import OrderCard from '../OrderCard';
import { PrecioTotal } from '../../utils';

import './checkoutMenu.css';

const CheckOutMenu = () => {
    const context = useContext(CarritoDeCompras);

    const handleDelete = (codigo) => {
        const newProducts = context.productosCarrito.filter(producto => producto.codigo !== codigo)
        context.setProductosCarrito(newProducts)

    }

    return (
        <aside
            className={`${context.isCheckOutMenuOpen ? 'flex' : 'hidden'} checkout-menu flex-col fixed right-0 w-80 h-screen bg-white z-50 transition-all duration-300 ease-in-out  `}
        >
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
            <div className='px-6 overflow-y-scroll'>
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
            <div className='flex justify-between items-center p-5'>
                <span className='font-light'>Total: </span>
                <span className='font-medium text-2xl'>S/.{PrecioTotal(context.productosCarrito)}</span>
            </div>
        </aside>
    )
}

export default CheckOutMenu;    