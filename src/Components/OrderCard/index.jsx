

const OrderCard = props => {

    const { nombre, imagen, precio, handleDelete } = props

    let renderDelete
    if (handleDelete) {
        renderDelete =
            <button
                className="bg-red-700 p-1 w-24 h-7 flex items-center justify-center rounded-md hover:bg-red-800"
                onClick={() => handleDelete(props.codigo)}
            >
                <p className="text-white text-sm font-semibold ">Eliminar</p>
            </button>


    }
    const formattedPrice = parseFloat(precio).toFixed(2);
    const priceToShow = precio % 1 === 0 ? precio : formattedPrice;

    return (
        <div className="flex justify-between items-center mb-5 border-b-2 py-5">

            <div className="flex items-center gap-2">

                <figure className="w-20 h-20">
                    <img src={imagen} alt={nombre} className="w-full h-full rounded-md object-cover" />
                </figure>
                <p className="text-sm font-light">
                    {nombre}
                </p>
            </div>

            <div className="items-center gap-5">

                <p className="text-xl font-semibold text-center py-2">

                    S/. {priceToShow}
                </p>
                {renderDelete}

            </div>
        </div>
    );
}

export default OrderCard;