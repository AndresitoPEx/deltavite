import Layout from "../../Components/Layout";
import { useContext } from "react";
import { CarritoDeCompras } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { PrecioTotal } from "../../utils";



const UltimoPedido = () => {


    const context = useContext(CarritoDeCompras)

    const index = context.order.length - 1;


    return (
        <Layout>
            <h1 className="font-bold mb-10 ">Lista de Pedidos:</h1>
            <div className="flex flex-col md:flex-row w-full md:px-40 py-10 h-screen">
                <div className="flex flex-col md:w-3/5 px-5">
                    {context.order?.[index]?.productos?.map((producto) => {
                        return (
                            <OrderCard
                                key={producto.codigo}
                                codigo={producto.codigo}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                precio={producto.precio}
                                handleDelete={() => { }}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col md:border-l-2 md:pl-5">
                    <div className="mb-20">
                        <h3 className="text-lg font-semibold">
                            Precio Total:{" "}
                            <span className="font-bold">
                                S/. {PrecioTotal(context.order?.[index]?.productos)}
                            </span>
                        </h3>
                    </div>
                    <Link to="/mis-pedidos">
                        <button className="flex bg-[#f5821f] p-5 w-auto h-8 items-center justify-center rounded-md text-white font-semibold hover:bg-[#e26611]">
                            Continuar Pedido
                            <ChevronRightIcon className="h-6 w-6 cursor-pointer ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>

    );

}

export default UltimoPedido;