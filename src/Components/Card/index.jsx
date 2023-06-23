import { useContext } from 'react';
import { CarritoDeCompras } from '../../Context'; //importamos el contexto global
import { PlusIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

import './card.css'

const Card = ({codigo, categoria, nombre, precio, imagen }) => {

    const navigate = useNavigate()

    const { contar, setContar } = useContext(CarritoDeCompras)

    const handleVerDetalles = (codigo) => {
        navigate(`/producto/${codigo}`)
    }



    const imageStyle = {
        backgroundImage: `url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px' // Ajusta la altura de las imagenes
    };

    return (
        <div className="bg-[#f5f5f5] rounded-sm hover-card" >
            <div
                className="relative mb-2 w-full cursor-pointer" style={imageStyle}
                ></div>
            <div className="flex flex-col p-3 ">
                <div className="m-2">
                    <span className="text-lg font-bold text-gray-500">{categoria}</span>
                </div>
                <div className="flex justify-between m-2">
                    <span className="text-md font-light">{nombre}</span>
                    <span className="text-lg font-semibold">S/. {precio}</span>
                </div>
                <div className="flex justify-between m-2 ">
                    <button
                        className='bg-black text-white p-2 rounded-md'
                        onClick={() => handleVerDetalles(codigo)}
                    >
                        Ver Detalles
                    </button>

                    <button
                        className="bg-[#f5821f] p-2 w-8 h-8 items-center justify-center rounded-full"
                        onClick={() => setContar(contar + 1)}
                    >
                        <PlusIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
