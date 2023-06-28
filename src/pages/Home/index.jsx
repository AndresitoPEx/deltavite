import './home.css'

import Layout from "../../Components/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="bg-gray-100 w-full">
                {/* Sección de banner promocional */}
                <section className="py-10 bg-black">
                    <div className="container mx-auto ">
                        <img src="https://i.postimg.cc/90SwfqCK/294061075-553185146335372-2252448118094084959-n.jpg" alt="Banner promocional" className="w-full" />
                    </div>
                </section>

                {/* Sección de categorías */}
                <section className="py-10 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Categorías</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <li>
                                <a href="#" className="block bg-white p-4 text-center">
                                    <img src="https://i.postimg.cc/529jM3By/246505382-1292446391207518-4064799709388919362-n.jpg" alt="Categoría 1" className="w-full h-32 object-cover mb-4" />
                                    Categoría 1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block bg-white p-4 text-center">
                                    <img src="https://i.postimg.cc/529jM3By/246505382-1292446391207518-4064799709388919362-n.jpg" alt="Categoría 2" className="w-full h-32 object-cover mb-4" />
                                    Categoría 2
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block bg-white p-4 text-center">
                                    <img src="https://i.postimg.cc/529jM3By/246505382-1292446391207518-4064799709388919362-n.jpg" alt="Categoría 2" className="w-full h-32 object-cover mb-4" />
                                    Categoría 3
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block bg-white p-4 text-center">
                                    <img src="https://i.postimg.cc/529jM3By/246505382-1292446391207518-4064799709388919362-n.jpg" alt="Categoría 2" className="w-full h-32 object-cover mb-4" />
                                    Categoría 4
                                </a>
                            </li>
                            {/* Agregar más categorías */}
                        </ul>
                    </div>
                </section>

                {/* Sección destacada de productos */}
                <section className="py-10">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Productos Destacados</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/zG35jPwC/322475247-1559586227861359-4888582581913463503-n.jpg" alt="Producto 1" className="w-full h-3/4 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Producto 1</h3>
                                <p className="text-sm">Descripción del producto 1</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/zG35jPwC/322475247-1559586227861359-4888582581913463503-n.jpg" alt="Producto 2" className="w-full h-3/4 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Producto 2</h3>
                                <p className="text-sm">Descripción del producto 2</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/zG35jPwC/322475247-1559586227861359-4888582581913463503-n.jpg" alt="Producto 2" className="w-full h-3/4 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Producto 2</h3>
                                <p className="text-sm">Descripción del producto 3</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/zG35jPwC/322475247-1559586227861359-4888582581913463503-n.jpg" alt="Producto 2" className="w-full h-3/4 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Producto 2</h3>
                                <p className="text-sm">Descripción del producto 4</p>
                            </div>
                            {/* Agregar más productos */}
                        </div>
                    </div>
                </section>

                {/* Sección de banner con efecto parallax */}

                <section className="py-10">
                    <div className="parallax-container">
                        <div className="parallax-image" style={{ backgroundImage: "url(https://i.postimg.cc/TPZsntQ3/53364279-624005534718277-4547978364798894080-n.png)" }}></div>
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-6 text-center">Título del Parallax</h2>
                            <p className="text-center text-gray-500">Descripción o contenido adicional del parallax</p>
                        </div>
                    </div>
                </section>



                {/* Sección de últimas novedades */}
                <section className="py-10">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Últimas Novedades</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/bNczqTh8/28616300-414339525684880-3109795440802123074-o.jpg" alt="Novedad 1" className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Novedad 1</h3>
                                <p className="text-sm">Descripción de la novedad 1</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/bNczqTh8/28616300-414339525684880-3109795440802123074-o.jpg" alt="Novedad 2" className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Novedad 2</h3>
                                <p className="text-sm">Descripción de la novedad 2</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/bNczqTh8/28616300-414339525684880-3109795440802123074-o.jpg" alt="Novedad 2" className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Novedad 2</h3>
                                <p className="text-sm">Descripción de la novedad 3</p>
                            </div>
                            <div className="bg-white p-4">
                                <img src="https://i.postimg.cc/bNczqTh8/28616300-414339525684880-3109795440802123074-o.jpg" alt="Novedad 2" className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-semibold mb-2">Novedad 2</h3>
                                <p className="text-sm">Descripción de la novedad 4</p>
                            </div>
                            {/* Agregar más novedades */}
                        </div>
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-4 text-center"></h2>
                            <div className="aspect-w-16 h-80 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.youtube.com/embed/d_UYUGhdIR8"
                                    title="Nuestro Video"
                                    className="w-full h-full"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </Layout>
    );
};

export default Home;
