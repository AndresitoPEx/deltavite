
import { useState, useContext } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext';

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
        <div className="flex justify-between items-center mb-5 border-b-2 py-5">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 overflow-hidden rounded-md object-cover bg-gray-200 shadow-md  flex-shrink-0 
                ">
                    <img src={imagen} alt={nombre} className="w-full h-full rounded-md object-cover" />
                </figure>
                <div>
                    <p className="text-md font-light gap-2">{nombre}</p>
                    <div className="flex items-center gap-2">
                        <button
                            className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
                            onClick={handleRemoveUnit}
                        >
                            -
                        </button>
                        <span>{cantidad}</span>
                        <button
                            className="bg-blue-500 text-white px-2 rounded-md hover:bg-blue-600"
                            onClick={handleAddUnit}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="items-center gap-5">
                <p className="text-xl font-semibold text-center py-2">S/. {priceToShow}</p>
                <button
                    className="bg-red-700 p-1 w-24 h-7 flex items-center justify-center rounded-md hover:bg-red-800"
                    onClick={handleDeleteProduct}
                >
                    <p className="text-white text-sm font-semibold">Eliminar</p>
                </button>
            </div>
        </div>
    );
};

export default OrderCard;
