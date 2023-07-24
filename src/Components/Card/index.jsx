import { useContext } from 'react';
import { CarritoDeCompras } from '../../Context/carritoContext'; //importamos el contexto global
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

import './card.css';

const Card = ({ codigo, categoria, nombre, precio, imagen, color }) => {
  const context = useContext(CarritoDeCompras);
  const navigate = useNavigate();

  const handleVerDetalles = (codigo) => {
    navigate(`/producto/${codigo}`);
  };

  const imageStyle = {
    backgroundImage: `url(${imagen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px', // Ajustar la altura de las imagenes
  };

  const agregarProductoACarrito = (Card) => {
    context.agregarProductoACarrito(Card); // Usamos la función del contexto para agregar el producto al carrito
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
          className="bg-[#f5821f] p-1.5 w-8 h-8 items-center justify-center rounded-md hover:bg-[#e26611]"
          onClick={() =>
            agregarProductoACarrito({
              codigo: codigo,
              categoria: categoria,
              nombre: nombre,
              precio: precio,
              imagen: imagen,
              color: color,
            })
          }
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      );
    }
  };

  const formattedPrice = parseFloat(precio).toFixed(2);
  const priceToShow = precio % 1 === 0 ? precio : formattedPrice;

  return (
    <div className="bg-[#f5f5f5] rounded-sm hover-card flex flex-col justify-between ">
      <div className="relative mb-2 w-full cursor-pointer" style={imageStyle}></div>
      <div className="flex flex-col p-3 ">
        <div className="m-2">
          <span className="text-md font-thin text-black bg-[#d1d1d1] py-1 px-2 rounded-md hover:bg-[#e26611] hover:text-white">
            {categoria}
          </span>
        </div>
        <div className="flex justify-between items-center m-2">
          <span className="text-xl font-semibold text-gray-600">{nombre}</span>
          <span className="text-lg font-semibold">S/. {priceToShow}</span>
        </div>
        <div className="flex justify-between items-center m-2 ">
          <button className="bg-black text-white p-2 rounded-md" onClick={() => handleVerDetalles(codigo)}>
            Ver Detalles
          </button>

          {renderIcon(codigo)}
        </div>
      </div>
    </div>
  );
};

export default Card;
