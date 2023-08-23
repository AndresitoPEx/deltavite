import { useState, useEffect } from 'react';
import KRGlue from '@lyracom/embedded-form-glue';
import CustomerDetailsForm from '../CustomerDetailsForm';
import { useNavigate } from 'react-router-dom';
import './pagos.css';

const CompletarPago = ({ precioTotal, carrito }) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState('');
    const [customerData, setCustomerData] = useState({});

    const handleCustomerDetailsSubmit = (customerDetails) => {
        console.log('Datos del cliente❌❌❌:', customerDetails);
        setCustomerData(customerDetails);
        setShowPaymentForm(true);
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (showPaymentForm) {
            async function setupPaymentForm() {
                const endpoint = 'https://api.micuentaweb.pe';
                const publicKey = '14245093:testpublickey_o9XP4sFofz1xE3mg5j1oU420p7tQjtGLP2rxRteGJFspg';
                let formToken = '';

                try {
                    const res = await fetch('https://node-payserver.onrender.com/createPayment', {
                        // https://node-payserver.onrender.com
                        //http://localhost:2000
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({

                            paymentConf: {
                                amount: parseFloat((precioTotal * 100).toFixed(0)),
                                currency: 'PEN',
                                customer: {
                                    billingDetails: {
                                        firstName: customerData.firstName,
                                        lastName: customerData.lastName,
                                        cellPhoneNumber: customerData.cellPhoneNumber,
                                        identityType: customerData.identityType,
                                        identityCode: customerData.identityCode,
                                    },
                                    email: customerData.email,
                                    shippingDetails: {
                                        address: customerData.address,
                                        district: customerData.district,
                                        city: customerData.city,
                                        phoneNumber: customerData.phoneNumber,
                                    },
                                    shoppingCart: {
                                        cartItemInfo: carrito.map(item => ({
                                            productLabel: item.nombre,
                                            productQty: item.cantidad,
                                            productAmount: parseFloat((item.precio * 100).toFixed(0)),
                                        })),
                                    },
                                },
                            }
                        })
                    });
                    formToken = await res.text();

                    const { KR } = await KRGlue.loadLibrary(endpoint, publicKey);

                    // Configuración personalizada del formulario
                    await KR.setFormConfig({
                        formToken: formToken,
                        'kr-language': 'es-ES',
                    });

                    await KR.onSubmit(async paymentData => {
                        const response = await fetch('https://node-payserver.onrender.com/validatePayment', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(paymentData)
                        });
                        if (response.status === 200) setPaymentMessage('¡Pago exitoso!');
                        return false;
                    });

                    const { result } = await KR.attachForm('#myPaymentForm');
                    await KR.showForm(result.formId);
                } catch (error) {
                    setPaymentMessage('Error: ' + error.message);
                }
            }

            setupPaymentForm();
        }



    }, [showPaymentForm, precioTotal, customerData, carrito]);

    return (
        <div className="payment-container">
            {!showPaymentForm && (
                <CustomerDetailsForm onSubmit={handleCustomerDetailsSubmit} />
            )}

            {showPaymentForm && (
                <div className="form payment-form">
                    <h1 className="payment-title">Ingrese sus datos de pago</h1>

                    <div className="payment-inner-container">
                        <div id="myPaymentForm">
                            <div className="kr-embedded bg-form" />
                        </div>
                    </div>
                    <p className="payment-message">{paymentMessage}</p>
                </div>
            )}
        </div>
    );
};

export default CompletarPago;
