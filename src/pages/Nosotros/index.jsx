import Layout from "../../Components/Layout";
import Container from '@mui/material/Container';
import LoadingPage from "../../Components/Loading";
import { useState, useEffect } from "react";


const Nosotros = () => {

    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDataLoading(false);
        }, 1000);
    }, []);

    if (dataLoading) {
        return <LoadingPage />;
    }


    return (
        <Layout>
            <div className="w-full h-[700px] relative">
                <img
                    src='https://i.postimg.cc/8PBkz0ND/PORTADA_FACEBOK.jpg'
                    className="object-cover object-top w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-white text-3xl "></h1>
                </div>
            </div>
            <Container maxWidth="xl">
                <div className="">
                    <section className="py-10">
                        <div className="container mx-auto">
                            <h1 className="text-3xl font-bold mb-6 text-center">Conoce más sobre Delta TG</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                                    <p className="text-lg mb-4">
                                        En DELTA TACTICAL GEAR, nuestra misión es más que simplemente proveer equipo táctico de alta calidad. Nos esforzamos por ser un pilar de confianza y eficacia para las fuerzas de seguridad y los individuos que buscan equipamiento de alto rendimiento. Fabricamos nuestros productos con la más alta calidad de materiales, como la tela cordura 1000D, para asegurar que cada artículo no solo cumpla sino que supere las expectativas de nuestros clientes.
                                    </p>

                                </div>
                                <div>
                                    <img
                                        src="https://i.postimg.cc/5yZjJdmM/266340555-1325636307888526-8060030097436519231-n.jpg"
                                        alt="Imagen Nuestra Historia"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                                <div>
                                    <img
                                        src="https://i.postimg.cc/SRrqZBtr/242809003-1274601109658713-2618943298765768435-n.jpg"
                                        alt="Imagen Nuestro Equipo"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
                                    <p className="text-lg mb-4">
                                        Visualizamos un futuro donde DELTA TACTICAL GEAR sea la marca de referencia en equipamiento táctico a nivel nacional e internacional. Aspiramos a ser líderes en innovación, estableciendo nuevos estándares de calidad y funcionalidad en todo nuestro rango de productos. Queremos ser la primera elección para profesionales y entusiastas que buscan equipamiento táctico de alta calidad, durabilidad y eficacia.
                                    </p>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                                    <p className="text-lg mb-4">
                                        Calidad: Nos comprometemos a ofrecer productos de la más alta calidad, fabricados con materiales resistentes y duraderos.
                                        Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones, tanto con clientes como con proveedores.
                                        Innovación: Estamos en una búsqueda constante de mejora, siempre buscando formas de innovar en diseño y funcionalidad.
                                        Responsabilidad: Entendemos la importancia de nuestro rol en la seguridad de nuestros clientes, y nos tomamos esa responsabilidad muy en serio.
                                    </p>

                                </div>
                                <div>
                                    <img
                                        src="https://i.postimg.cc/KjbV7T7k/77218556_454221148567222_4240801668364636430_n.jpg"
                                        alt="Imagen Nuestra Historia"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                                <div>
                                    <img
                                        src="https://i.postimg.cc/D0cNxz5C/179900087_191210182837685_4842390274538153276_n.jpg"
                                        alt="Imagen Nuestro Equipo"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
                                    <p className="text-lg mb-4">
                                        En DELTA TACTICAL GEAR, estamos comprometidos con la excelencia en cada aspecto de nuestro negocio. Desde el momento en que seleccionas tus productos hasta el instante en que los recibes, puedes contar con un servicio rápido y eficiente. Ofrecemos entrega a nivel nacional e internacional, asegurando que nuestros productos de alta calidad lleguen a tus manos lo más rápido posible. Tu seguridad y satisfacción son nuestra máxima prioridad.
                                    </p>

                                </div>
                            </div>


                            {/* <div className="flex justify-center mt-10">
                                <button className="bg-black text-white py-2 px-14 rounded-md hover:bg-orange-600">
                                    Conoce más
                                </button>
                            </div> */}


                        </div>
                    </section>
                </div>
            </Container>
        </Layout>
    );
};

export default Nosotros;
