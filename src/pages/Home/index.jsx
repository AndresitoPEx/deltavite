import './home.css'
import { useState, useEffect } from 'react';
import Layout from "../../Components/Layout";
import LoadingPage from "../../Components/Loading";
//materialUI
import Container from '@mui/material/Container';

const Home = () => {

    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        // Simulación de una carga de datos con un temporizador
        const timer = setTimeout(() => {
            setDataLoading(false);
        }, 1000);

        // Función para agregar el script del chatbot
        const addChatbotScript = () => {
            const script = document.createElement('script');
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "R-_SwarTzCUZEB3KB1qIf";
            script.defer = true;
            document.body.appendChild(script);

            // Configuración del chatbot
            window.chatbaseConfig = {
                chatbotId: "R-_SwarTzCUZEB3KB1qIf",
            };
        };

        // Función para eliminar el script del chatbot
        const removeChatbotScript = () => {
            const script = document.getElementById("R-_SwarTzCUZEB3KB1qIf");
            if (script) {
                document.body.removeChild(script);
            }
        };

        addChatbotScript();

        return () => {
            clearTimeout(timer);
            removeChatbotScript();
        };
    }, []);

    if (dataLoading) {
        // Muestra la página de carga mientras dataLoading es true
        return <LoadingPage />;
    }


    return (
        <Layout>
            {/* Sección de banner promocional */}
            <section className="w-full">
                <section className="parallax-section">
                    <div className="parallax-container">
                        <div className="parallax-image" style={{ backgroundImage: "url(https://i.postimg.cc/TPZsntQ3/53364279-624005534718277-4547978364798894080-n.png)" }}></div>
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-center">Título del Parallax</h2>
                            <p className="text-center text-gray-500">Descripción o contenido adicional del parallax</p>
                        </div>
                    </div>
                </section>

            </section>


            <div className="bg-gray-100 w-full">
                <Container maxWidth="xl">

                    <section className="py-10 bg-gray-100 w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="  text-3xl font-bold mb-6">Fuerza que te protege</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <img src="https://i.postimg.cc/ryG7VhcS/173201205-191960819436652-6854720412959685384-n.jpg" alt="Our Team" className="w-full h-96 object-cover mb-4" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <blockquote className="italic text-2xl text-gray-500 font-bold mb-4 tracking-wide">
                                        "Te ofrecemos productos de alta calidad que cuidan tu integridad y te ayudan a cumplir con tu deber."
                                    </blockquote>

                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="py-10 w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="step-container">
                                    <img src="https://i.postimg.cc/6QwNXMQP/78698125-799140340538128-6437447573388132352-n.jpg" alt="Step 1" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Mochilas de Campaña</h3>

                                </div>
                                <div className="step-container">
                                    <img src="https://i.postimg.cc/vBfk6hnw/179279950_2624308597868079_3353346571864009743_n.jpg" alt="Step 2" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Chalecos Tácticos</h3>

                                </div>
                                <div className="step-container">
                                    <img src="https://i.postimg.cc/Kv629Ghx/353010507-793679898952561-7465947359681832810-n.jpg" alt="Step 3" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Accesorios</h3>

                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Sección de banner con efecto parallax */}

                    <section className="parallax-section">
                        <div className="parallax-container">
                            <div className="parallax-image" style={{ backgroundImage: "url(https://i.postimg.cc/90SwfqCK/294061075-553185146335372-2252448118094084959-n.jpg)" }}></div>
                            <div className="container mx-auto">
                                <h2 className="text-3xl font-bold mb-6 text-center">Título del Parallax</h2>
                                <p className="text-center text-gray-500">Descripción o contenido adicional del parallax</p>
                            </div>
                        </div>
                    </section>





                    {/* Sección de últimas novedades */}
                    <section className="py-10 w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Tecnología e Innovación</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col justify-center">
                                    <blockquote className="italic text-2xl text-gray-500 font-bold mb-4 tracking-wide">
                                        "Utilizamos tecnología de punta y procesos de fabricación optimizados para garantizar la calidad y la sostenibilidad de nuestros productos."
                                    </blockquote>
                                </div>
                                <div>
                                    <img src="https://i.postimg.cc/W4gNvHFV/277733606_1398040550648101_7333026352736774807_n.jpg" alt="Technology and Innovation" className="w-full object-cover mb-4" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sección para un video de YouTube */}
                    <section className="py-10 w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-4">CONOCE NUESTRO CHALECO PORTA PLACAS DELTA 21</h2> {/* Aquí va el título */}
                            <div className="relative" style={{ height: "400px" }}> {/* Altura fija de 500px */}
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/d_UYUGhdIR8?si=p1p5hjSVe__sT373&amp;controls=0"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </section>




                </Container>
            </div>
        </Layout>
    );
};

export default Home;
