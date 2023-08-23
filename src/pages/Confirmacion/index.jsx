import { useState, useEffect } from 'react';
import Layout from "../../Components/Layout";

const ConfirmacionDePago = () => {
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const transactionId = localStorage.getItem('transactionId');
        
        // Hacer la solicitud al backend para obtener los detalles del pago
        fetch(`http://localhost:2000/getPayment?transactionId=${transactionId}`)
            .then(response => response.json())
            .then(data => {
                setPaymentData(data);
            })
            .catch(error => {
                console.error('Error al obtener los detalles del pago:', error);
            });
    }, []);

    if (!paymentData) {
        return <div>Cargando datos del pago...</div>;
    }

    return (
        <Layout>
            <div className="confirmation-container">
                <h1>¡Gracias por tu compra, {paymentData.customer.billingDetails.firstName} {paymentData.customer.billingDetails.lastName}!</h1>
                <p>Tu pedido ha sido procesado con éxito.</p>
                <p>Total Pagado: {paymentData.orderDetails.orderTotalAmount / 100} {paymentData.orderDetails.orderCurrency}</p>
                <h2>Detalles del Pedido:</h2>
                <ul>
                    {paymentData.customer.shoppingCart.cartItemInfo.map(item => (
                        <li key={item.productRef}>
                            {item.productLabel} - Cantidad: {item.productQty} - Precio: {item.productAmount / 100}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default ConfirmacionDePago;
