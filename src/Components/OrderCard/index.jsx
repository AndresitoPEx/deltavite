
import { useState, useContext } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';
import { Button } from '@mui/material';
import { PlusIcon } from '@heroicons/react/24/solid';
import { MinusIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {


    const { codigo, nombre, imagen, precio, handleDelete, handleUpdateTotal } = props;

    // Consumir el contexto
    const context = useContext(CarritoDeCompras);

    // Obtener la cantidad del producto del carrito o establecerla en 1 si es un nuevo producto
    const [cantidad, setCantidad] = useState(context.productosCarrito.find((producto) => producto.codigo === codigo)?.cantidad || 1);

    // Actualizar el contexto con la nueva cantidad del producto
    const handleUpdateCantidad = (newCantidad) => {
        const updatedProduct = { ...props, cantidad: newCantidad };
        const updatedProducts = context.productosCarrito.map((producto) => (producto.codigo === codigo ? updatedProduct : producto));
        context.setProductosCarrito(updatedProducts);
    };

    const handleAddUnit = () => {
        setCantidad((prevCantidad) => prevCantidad + 1);
        handleUpdateCantidad(cantidad + 1); // Actualizar la cantidad en el contexto
        handleUpdateTotal(parseFloat(precio)); // Sumar el precio unitario al precio total
    };

    const handleRemoveUnit = () => {
        if (cantidad > 1) {
            setCantidad((prevCantidad) => prevCantidad - 1);
            handleUpdateCantidad(cantidad - 1); // Actualizar la cantidad en el contexto
            handleUpdateTotal(-parseFloat(precio)); // Restar el precio unitario al precio total
        }
    };

    const handleDeleteProduct = () => {
        handleDelete(codigo, parseFloat(precio) * cantidad); // Multiplicar el precio por la cantidad para obtener el total del producto a eliminar
    };

    const priceToShow = (parseFloat(precio) * cantidad).toFixed(2);

    return (
        <div className="flex justify-between items-center border-b-2 py-5">
            <div className="flex items-center gap-2">
                <figure className="w-28 h-28 overflow-hidden rounded-md object-cover bg-gray-200 shadow-md  flex-shrink-0 
                ">
                    <img src={imagen} alt={nombre} className="w-full h-full rounded-md object-cover" />
                </figure>
                <div>
                    <p className="text-md font-semibold gap-2">{nombre}</p>
                    <p>
                        {
                            cantidad > 1 ? (
                                <span className="text-xs font-thin text-gray-500">
                                    {cantidad} unidades
                                </span>
                            ) : (
                                <span className="text-xs font-thin text-gray-500">
                                    {cantidad} unidad
                                </span>
                            )
                        }
                    </p>
                    <p className="text-xl font-extralight ">S/. {priceToShow}</p>
                    <div className="flex items-center gap-2  ">
                        <Button
                            className=" text-black rounded-md hover:bg-gray-300"
                            onClick={handleRemoveUnit}
                            variant='outlined'
                            color='warning'
                        >
                            <MinusIcon className="h-5 w-5" />
                        </Button>
                        <span className='px-3 py-1 text-md font-semibold text-black rounded-md bg-gray-200'>
                            {cantidad}
                        </span>
                        <Button
                            className=" text-black rounded-md hover:bg-gray-300"
                            onClick={handleAddUnit}
                            variant='outlined'
                            color='warning'

                        >
                            <PlusIcon className="h-5 w-5" />
                        </Button>

                    </div>
                    <Button
                        className='text-black rounded-md'
                        size='small'
                        variant="text"
                        onClick={handleDeleteProduct}
                        
                    >
                        <p className="text-xs font-light text-red-500 hover:underline cursor-pointer mt-2">
                            Remover
                        </p>
                    </Button>
                </div>
            </div>
            <div className="items-center gap-5">


            </div>
        </div>
    );
};

export default OrderCard;
