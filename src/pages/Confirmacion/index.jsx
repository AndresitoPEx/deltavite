import Layout from "../../Components/Layout";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ConfirmacionDePago = () => {

    return (
        <Layout>
             <div className="flex flex-col items-center justify-center min-h-screen rounded-xl shadow-2xl p-8 m-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto transform transition duration-500">
                
                <CheckCircleOutlineIcon 
                    style={{ fontSize: 100 }} 
                    className="text-green-600 mb-4 w-1/2 mx-auto justify-center animate-pulse"
                />
                
                <h1 className="mt-4 text-4xl font-extrabold text-center tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl
                text-green-600 mb-5
                ">
                    ¡Compra Exitosa!
                </h1>
                
                <p className="mt-2 text-xl text-center tracking-tight sm:text-3xl lg:text-2xl xl:text-3xl 
                text-gray-700 mb-5 ">
                    Gracias por confiar en nosotros.
                </p>
                
                <p className="mt-2 text-lg text-center text-gray-700 tracking-tight sm:text-md lg:text-xl xl:text-2xl
                mb-5 ">
                    En breve recibirás un correo con los detalles de tu compra.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <a 
                        href="/"
                        className="px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                        Volver a la Tienda
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ConfirmacionDePago;
