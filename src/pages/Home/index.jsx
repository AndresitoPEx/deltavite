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

        return () => clearTimeout(timer);
    }, []);

    if (dataLoading) {
        // Muestra la página de carga mientras dataLoading es true
        return <LoadingPage />;
    }


    return (
        <Layout>
            {/* Sección de banner promocional */}
            <section className="w-full">
                <div className="relative">
                    <img src="https://i.postimg.cc/90SwfqCK/294061075-553185146335372-2252448118094084959-n.jpg" alt="Banner promocional" className="w-full h-auto object-cover" />
                </div>
            </section>


            <div className="bg-gray-100 w-full">
                <Container maxWidth="xl">

                    <section className="py-10 bg-gray-100 w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Nuestra Filosofía</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <img src="https://i.postimg.cc/ryG7VhcS/173201205-191960819436652-6854720412959685384-n.jpg" alt="Our Team" className="w-full h-96 object-cover mb-4" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <blockquote className="italic">
                                        "Nuestra misión es ofrecer productos de alta calidad que mejoran la vida de nuestros clientes."
                                    </blockquote>

                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Sección destacada de productos */}
                    <section className="py-10 bg-white w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">¿Cómo Confeccionamos Nuestros Productos?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="step-container">
                                    <img src="path/to/image1.jpg" alt="Step 1" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Paso 1: Diseño</h3>
                                    <p className="text-sm">Nuestro equipo de diseñadores trabaja en los bocetos iniciales.</p>
                                </div>
                                <div className="step-container">
                                    <img src="path/to/image2.jpg" alt="Step 2" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Paso 2: Materiales</h3>
                                    <p className="text-sm">Seleccionamos los mejores materiales para garantizar calidad.</p>
                                </div>
                                <div className="step-container">
                                    <img src="path/to/image3.jpg" alt="Step 3" className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold mb-2">Paso 3: Fabricación</h3>
                                    <p className="text-sm">Proceso de fabricación altamente controlado y optimizado.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Sección de banner con efecto parallax */}

                    <section className="parallax-section">
                        <div className="parallax-container">
                            <div className="parallax-image" style={{ backgroundImage: "url(https://i.postimg.cc/TPZsntQ3/53364279-624005534718277-4547978364798894080-n.png)" }}></div>
                            <div className="container mx-auto">
                                <h2 className="text-3xl font-bold mb-6 text-center">Título del Parallax</h2>
                                <p className="text-center text-gray-500">Descripción o contenido adicional del parallax</p>
                            </div>
                        </div>
                    </section>



                    {/* Sección de últimas novedades */}
                    <section className="py-10 bg-white w-full">
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Tecnología e Innovación</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg mb-4">
                                        Utilizamos tecnología de punta y procesos de fabricación optimizados para garantizar la calidad y la sostenibilidad de nuestros productos.
                                    </p>
                                </div>
                                <div>
                                    <img src="https://i.postimg.cc/W4gNvHFV/277733606_1398040550648101_7333026352736774807_n.jpg" alt="Technology and Innovation" className="w-full object-cover mb-4" />
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default Home;
