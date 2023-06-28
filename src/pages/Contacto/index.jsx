import Layout from "../../Components/Layout";

const Contacto = () => {
  return (
    <Layout>
      <div className="bg-gray-100">
        <section className="py-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                <p className="text-lg mb-2">
                  <span className="font-bold">Dirección:</span> Av. Principal 123, Ciudad
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Teléfono:</span> +1 234 567 890
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Correo Electrónico:</span>{" "}
                  info@tuempresa.com
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
                <form className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="bg-white border border-gray-300 rounded-md p-2 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="bg-white border border-gray-300 rounded-md p-2 mb-4"
                  />
                  <textarea
                    placeholder="Mensaje"
                    className="bg-white border border-gray-300 rounded-md p-2 h-40 mb-4"
                  ></textarea>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contacto;
