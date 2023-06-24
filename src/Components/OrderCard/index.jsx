import { XMarkIcon } from "@heroicons/react/24/solid";
import { render } from "react-dom";


const OrderCard = props => {

    const { nombre, imagen, precio, handleDelete } = props

    let renderIcon
    if (handleDelete) {
        renderIcon = <XMarkIcon
            onClick={() => handleDelete(props.codigo)}
            className="h-6 w-6 text-black cursor-pointer"
        />
    }


    return (
        <div className="flex justify-between items-center mb-5">

            <div className="items-center gap-2">

                <figure className="w-20 h-20">
                    <img src={imagen} alt={nombre} className="w-full h-full rounded-md object-cover" />
                </figure>
                <p className="text-sm font-light px-2">
                    {nombre}
                </p>
            </div>

            <div className="flex items-center gap-2">

                <p className="text-xl font-semibold">
                    S/. {precio}
                </p>
                {
                    renderIcon
                }
            </div>
        </div>
    );
}

export default OrderCard;