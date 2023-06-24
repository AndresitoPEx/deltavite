import Layout from "../../Components/Layout";
import { useContext } from "react";
import { CarritoDeCompras } from "../../Context";
import OrderCard from "../../Components/OrderCard";





const UltimoPedido = () => {


    const context = useContext(CarritoDeCompras)


    return (
        <Layout>
            <h1>UltimoPedido</h1>
            <div className='flex flex-col w-1/3'>
                {
                    context.order?.slice(-1)[0]?.productos?.map(producto => {
                        return (
                            <OrderCard
                                key={producto.codigo}
                                codigo={producto.codigo}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                precio={producto.precio}
                                handleDelete={() => { }}
                            />
                        )
                    }
                    )

                }
            </div>
        </Layout>
    );

}

export default UltimoPedido;