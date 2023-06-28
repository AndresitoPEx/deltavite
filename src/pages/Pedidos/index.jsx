import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import OrdersCard from "../../Components/Orders-Card";
import { useContext } from "react";
import { CarritoDeCompras } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const MisPedidos = () => {
    return (
        <Layout>
            <div>
                <h1>
                    Mis Pedidos
                </h1>
            </div>
        </Layout>
    )
}




export default MisPedidos;
// const MisPedidos = () => {

//     const context = useContext(CarritoDeCompras)
//     console.log(context.order);

//     return (
//         <Layout>
//             <div className="absolute left-0 ">
//                 <Link to='/mis-pedidos/last' className="">
//                     <button className=' text-black  py-2 px-4 rounded flex justify-between'>
//                         <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
//                         Último Pedido
//                     </button>
//                 </Link>
//             </div>
//             <h1 className="font-bold">Mis Pedidos</h1>
//             {
//                 context.order?.map((order, index) => (
//                     <Link key={index} to={`/mis-pedidos/${order.id}`}>
//                         <OrdersCard
//                             precioTotal={order.precioTotal}
//                             productosTotal={order.precioTotal} />
//                     </Link>
//                 )

//                 )
//             }
//         </Layout>
//     );

// }