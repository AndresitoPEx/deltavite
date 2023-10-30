import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext'; //importamos el contexto global
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


import './card.css';

const Card = ({ codigo, categoria, nombre, precio, imagenes, color }) => {
  const context = useContext(CarritoDeCompras);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleVerDetalles = (codigo) => {
    navigate(`/producto/${codigo}`);
  };

  const imageStyle = {
    backgroundImage: `url(${imagenes[0].nombre})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
  };

  const agregarProductoACarrito = async (Card) => {
    setLoading(true);

    // Simular una carga de 1 segundo antes de agregar el producto al carrito
    await new Promise(resolve => setTimeout(resolve, 1000));

    context.agregarProductoACarrito(Card);

    setLoading(false);
  };

  const renderIcon = (codigo) => {
    const productoEnCarrito = context.productosCarrito.some((producto) => producto.codigo === codigo);

    if (productoEnCarrito) {
      return (
        <button className="bg-green-700 p-1.5 w-8 h-8 items-center justify-center rounded-md">
          <CheckIcon className="h-5 w-5 text-white" />
        </button>
      );
    } else {
      return (
        <button
          className="bg-[#f5821f] p-1.5 w-8 h-8 items-center justify-center rounded-md hover:bg-[#e26611] focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          onClick={() =>
            agregarProductoACarrito({
              codigo: codigo,
              categoria: categoria,
              nombre: nombre,
              precio: precio,
              imagenes: imagenes[0].nombre, // aquí pasamos todas las imágenes
              color: color,
            })
          }
        >
          <PlusIcon className="h-5 w-5 text-white hover:text-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        </button>
      );
    }
  };

  const formattedPrice = parseFloat(precio).toFixed(2);

  return (
    <div className="bg-[#f5f5f5] rounded-xl hover-card flex flex-col justify-between">
      <div className="flex flex-col">
        <button className="hover:bg-gray-200  text-white rounded-md" onClick={() => handleVerDetalles(codigo)}>
          <div className="relative w-full cursor-pointer rounded-xl" style={imageStyle}></div>
        </button>
        <div className="flex flex-col justify-between h-48 w-full bg-[#f5f5f5] rounded-xl p-3">
          <div className="flex justify-between m-2">
            {categoria ? (
              <span className="text-md font-normal text-gray-600 bg-[#d1d1d1] py-1 px-2 rounded-md hover:bg-[#e26611] hover:text-white">
                {categoria.nombre}
              </span>
            ) : (
              <span className="text-md font-thin text-black bg-[#d1d1d1] py-1 px-2 rounded-md hover:bg-[#e26611] hover:text-white">
                Sin categoría
              </span>
            )}
            <div>
              <span className="text-sm font-bold text-gray-400">{color}</span>
            </div>
          </div>
          <div className="flex justify-between items-center m-2">
            <span className="text-lg font-semibold text-gray-600">{nombre}</span>
            <span className="text-lg font-semibold">S/. {formattedPrice}</span>
          </div>
          <div className="flex justify-between items-center m-2 ">
            <button className="bg-black hover:bg-gray-900 text-white p-2 rounded-md" onClick={() => handleVerDetalles(codigo)}>
              <h4 className="text-sm font-semibold transition duration-500 ease-in-out transform hover:scale-105">Ver Detalles</h4>
            </button>
            {loading ? (
              <div className="bg-[#f5821f] p-1.5 w-8 h-8 items-center justify-center rounded-md">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              renderIcon(codigo)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
