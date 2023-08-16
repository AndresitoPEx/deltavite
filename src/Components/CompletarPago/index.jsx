import { useState, useEffect } from 'react';
import KRGlue from '@lyracom/embedded-form-glue';
import CustomerDetailsForm from '../CustomerDetailsForm';
import './pagos.css'

const CompletarPago = ({ precioTotal }) => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState('');

    const handleCustomerDetailsSubmit = (customerDetails) => {
        setShowPaymentForm(true);
    };

    useEffect(() => {
        if (showPaymentForm) {
            async function setupPaymentForm() {
                const endpoint = 'https://api.micuentaweb.pe';
                const publicKey = '14245093:testpublickey_o9XP4sFofz1xE3mg5j1oU420p7tQjtGLP2rxRteGJFspg';
                let formToken = '';

                try {
                    const res = await fetch('http://localhost:2000/createPayment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            paymentConf: { amount: precioTotal * 100, currency: 'PEN' }
                        })
                    });
                    formToken = await res.text();

                    const { KR } = await KRGlue.loadLibrary(endpoint, publicKey);

                    // Configuración personalizada del formulario
                    await KR.setFormConfig({
                        formToken: formToken,
                        'kr-language': 'es-ES',
                        'kr-theme': 'classic', // Establece el tema a "classic"
                        'merchant': {
                            'header': {
                                'image': {
                                    'type': 'logo',
                                    'visibility': true,
                                    'src': 'https://i.postimg.cc/K802W0xt/DELTA_C.png'
                                },
                                'shopName': {
                                    'color': 'red'
                                },
                                'backgroundColor': 'blue'
                            }
                        }
                    });

                    
                    await KR.onSubmit(async paymentData => {
                        const response = await fetch('http://localhost:2000/validatePayment', {
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
    }, [showPaymentForm, precioTotal]);

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
                            <div className="kr-embedded" />
                        </div>
                    </div>
                    <p className="payment-message">{paymentMessage}</p>
                </div>
            )}
        </div>
    );

};

export default CompletarPago;
