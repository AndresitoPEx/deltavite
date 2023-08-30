import { useContext } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import { PrecioTotal } from '../../utils';
import { Badge, Paper } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';



const MisPedidos = () => {

    const context = useContext(CarritoDeCompras);
    const index = context.order.length - 1;

    // Calcular el precio total por producto (ya que la cantidad está en cada producto)
    const calcularPrecioTotalPorProducto = (producto) => {
        return (parseFloat(producto.precio) * producto.cantidad).toFixed(2);
    };

    // Calcular el precio total de todos los productos
    const precioTotal = PrecioTotal(context.order?.[index]?.productos);
    

    return (
        <div className="container mx-auto md:px-0 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <div className="bg-[#f5821f] rounded-lg shadow-md xl:mx-5 lg:mx-3 md:mx-2 sm:mx-0 sm:pb-1">

                <div className="bg-white mb-20 md:mb-0 md:sticky md:top-20 py-5 px-5 shadow-md rounded-md w-full h-4/5">
                    <div className=" ">
                        {context.order?.[index]?.productos?.map((producto) => (
                            <div key={producto.codigo} className="mb-5">
                                <div className="flex items-center gap-5">
                                    <figure className="w-24 h-w-24 rounded-md object-cover bg-gray-200 shadow-md">
                                        <Badge badgeContent={`${producto.cantidad}`} color="warning">
                                            <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
                                        </Badge>
                                    </figure>
                                    <div className="flex-1 flex justify-between items-center border-b-2 pb-5">
                                        <p className="text-md font-normal">
                                            {producto.nombre}
                                            <span className={`block text-xs ${producto?.codigo ? "text-gray-400" : "text-gray-500"}`}>
                                                {producto?.codigo ? `Codigo: ${producto.codigo}` : 'Sin codigo'}
                                            </span>
                                        </p>
                                        <p className="text-lg font-semibold text-gray-600">
                                            S/.{calcularPrecioTotalPorProducto(producto)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h3 className="flex justify-between items-center w-full border-b-2 pb-5">
                        <span className="font-normal text-xl text-gray-600">
                            Total:
                        </span>
                        <span className="font-bold text-2xl">
                            S/. {precioTotal}
                        </span>
                    </h3>
                </div>

            </div>
        </div>
    )
}




export default MisPedidos;
