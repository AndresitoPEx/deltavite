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
        <div>
            <div className="bg-[#f5821f] flex flex-col items-center justify-center w-full rounded-lg shadow-md mx-5 pb-2">

                <div className="bg-white mb-20 md:mb-0 md:sticky md:top-20 md:py-5 md:px-5 md:shadow-md md:rounded-md w-full h-4/5">
                    <div className="border-b-2">
                        {context.order?.[index]?.productos?.map((producto) => (
                            <div key={producto.codigo} className="mb-5 relative">
                                <div className="flex items-center gap-5 ">
                                    <figure className="w-24 h-w-24  rounded-md object-cover bg-gray-200 shadow-md flex-shrink-0 relative">
                                        <Badge
                                            badgeContent={`${producto.cantidad}`}
                                            color="warning"
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
                                                    <span className="text-gray-400 block text-xs">
                                                        Codigo: {producto.codigo}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-500 block text-xs">
                                                        Sin codigo
                                                    </span>

                                                )
                                            }
                                        </p>

                                        <p className="text-lg font-semibold text-gray-600 w-full 
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
                </div>

            </div>
        </div>
    )
}




export default MisPedidos;
