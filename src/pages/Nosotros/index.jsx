import Layout from "../../Components/Layout";

const Nosotros = () => {
    return (
        <Layout>
            <div className="bg-gray-100">
                <section className="py-10">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-6 text-center">Nosotros</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
                                <p className="text-lg mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla justo
                                    vitae diam auctor, at pretium magna tincidunt. Nulla facilisi. Sed sed enim
                                    mauris. Sed faucibus, nisi id consectetur condimentum, sapien sem commodo
                                    metus, at ullamcorper odio ex sed nulla.
                                </p>
                                <p className="text-lg mb-4">
                                    Aliquam consequat est sed tellus euismod, at placerat mauris tristique. Morbi
                                    non feugiat ligula. Phasellus efficitur interdum justo, sed vulputate justo
                                    eleifend id. Suspendisse potenti. Fusce bibendum dolor vitae venenatis
                                    facilisis. Morbi eget est in tellus suscipit varius in in massa.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla justo
                                    vitae diam auctor, at pretium magna tincidunt. Nulla facilisi. Sed sed enim
                                    mauris. Sed faucibus, nisi id consectetur condimentum, sapien sem commodo
                                    metus, at ullamcorper odio ex sed nulla.
                                </p>
                                <p className="text-lg mb-4">
                                    Aliquam consequat est sed tellus euismod, at placerat mauris tristique. Morbi
                                    non feugiat ligula. Phasellus efficitur interdum justo, sed vulputate justo
                                    eleifend id. Suspendisse potenti. Fusce bibendum dolor vitae venenatis
                                    facilisis. Morbi eget est in tellus suscipit varius in in massa.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
                                <p className="text-lg mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla justo
                                    vitae diam auctor, at pretium magna tincidunt. Nulla facilisi. Sed sed enim
                                    mauris. Sed faucibus, nisi id consectetur condimentum, sapien sem commodo
                                    metus, at ullamcorper odio ex sed nulla.
                                </p>
                                <p className="text-lg mb-4">
                                    Aliquam consequat est sed tellus euismod, at placerat mauris tristique. Morbi
                                    non feugiat ligula. Phasellus efficitur interdum justo, sed vulputate justo
                                    eleifend id. Suspendisse potenti. Fusce bibendum dolor vitae venenatis
                                    facilisis. Morbi eget est in tellus suscipit varius in in massa.
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
                                <h2 className="text-2xl font-bold mb-4">Nuestro Compromiso</h2>
                                <p className="text-lg mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla justo
                                    vitae diam auctor, at pretium magna tincidunt. Nulla facilisi. Sed sed enim
                                    mauris. Sed faucibus, nisi id consectetur condimentum, sapien sem commodo
                                    metus, at ullamcorper odio ex sed nulla.
                                </p>
                                <p className="text-lg mb-4">
                                    Aliquam consequat est sed tellus euismod, at placerat mauris tristique. Morbi
                                    non feugiat ligula. Phasellus efficitur interdum justo, sed vulputate justo
                                    eleifend id. Suspendisse potenti. Fusce bibendum dolor vitae venenatis
                                    facilisis. Morbi eget est in tellus suscipit varius in in massa.
                                </p>
                            </div>
                        </div>


                        <div className="flex justify-center mt-10">
                            <button className="bg-black text-white py-2 px-14 rounded-md hover:bg-orange-600">
                                Conoce más
                            </button>
                        </div>


                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Nosotros;
