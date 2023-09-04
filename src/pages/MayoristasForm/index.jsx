import RegistrarCliente from "../../Components/RegistrarCliente"
import Layout from "../../Components/Layout"
import Container from '@mui/material/Container';
import LoadingPage from "../../Components/Loading";
import { useState, useEffect } from "react";

const MayoristasPage = () => {

    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDataLoading(false);
        }, 500);
    }, []);

    if (dataLoading) {
        return <LoadingPage />;
    }


    return (
        <Layout>
            <Container>
                <div className="flex flex-col gap-10 md:gap-4 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row py-10">
                    <div className="md:h-4/5">
                        <RegistrarCliente />
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <img
                            src='https://i.postimg.cc/Kj5sSxb1/242681053-1273867203065437-4704187045925719852-n.jpg'
                            className="object-cover object-center w-full h-full opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center"
                            style={{ background: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1.5))" }}>
                            <h1 className="text-gray-100 text-3xl font-light md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center tracking-widest px-10">
                                REGISTRA TUS DATOS Y UN ASESOR DE VENTAS SE PONDRÁ EN CONTACTO CONTIGO
                            </h1>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}


export default MayoristasPage;
