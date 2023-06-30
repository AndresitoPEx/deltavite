import { useContext } from 'react';
import { CarritoDeCompras } from '../../Context'; //importamos el contexto global
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


import './card.css'

const Card = ({ codigo, categoria, nombre, precio, imagen, color }) => {

    const context = useContext(CarritoDeCompras)

    const navigate = useNavigate()

    const { contar } = useContext(CarritoDeCompras)

    const handleVerDetalles = (codigo) => {
        navigate(`/producto/${codigo}`)
    }



    const imageStyle = {
        backgroundImage: `url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px' // Ajustar la altura de las imagenes
    };

    const agregarProductoACarrito = (Card) => {
        context.setContar(contar + 1)
        context.setProductosCarrito([...context.productosCarrito, Card])
        context.openCheckOutMenu()

    }

    const renderIcon = (codigo) => {

        const productoEnCarrito = context.productosCarrito.filter((producto) => producto.codigo === codigo).length > 0

        if (productoEnCarrito) {
            return (
                <button
                    className="bg-green-700 p-1.5 w-8 h-8 items-center justify-center rounded-md"
                >
                    <CheckIcon className="h-5 w-5 text-white" />
                </button>
            )

        } else {

            return (
                <button
                    className="bg-[#f5821f] p-1.5 w-8 h-8 items-center justify-center rounded-md hover:bg-[#e26611]"
                    onClick={() => agregarProductoACarrito(
                        {
                            codigo: codigo,
                            categoria: categoria,
                            nombre: nombre,
                            precio: precio,
                            imagen: imagen,
                            color: color
                        }
                    )}
                >
                    <PlusIcon className="h-5 w-5" />
                </button>
            )
        }

    }

    return (
        <div className="bg-[#f5f5f5] rounded-sm hover-card" >
            <div
                className="relative mb-2 w-full cursor-pointer" style={imageStyle}
            ></div>
            <div className="flex flex-col p-3 ">
                <div className="m-2">
                    <span className="text-lg font-bold text-gray-500">{categoria}</span>
                </div>
                <div className="flex justify-between items-center m-2">
                    <span className="text-md font-light">{nombre}</span>
                    <span className="text-lg font-semibold">S/. {precio}</span>
                </div>
                <div className="flex justify-between items-center m-2 ">
                    <button
                        className='bg-black text-white p-2 rounded-md'
                        onClick={() => handleVerDetalles(codigo)}
                    >
                        Ver Detalles
                    </button>

                    {
                        renderIcon(codigo)
                    }
                </div>
                {/* <div>
                    <span>{color}</span>
                </div> */}

            </div>
        </div>
    );
};

export default Card;
