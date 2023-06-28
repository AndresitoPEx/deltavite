

const OrdersCard = props => {

    const { precioTotal, productosTotal } = props




    return (
        <div className="flex justify-between items-center mb-5 border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{productosTotal}</span>
                <span className="text-xl font-semibold"> S/. {precioTotal} </span>
            </p>
        </div>
    );
}

export default OrdersCard;