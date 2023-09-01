import RegistrarCliente from "../../Components/RegistrarCliente"
import Layout from "../../Components/Layout"
import Container from '@mui/material/Container';

const MayoristasPage = () => {

    return (
        <Layout className="flex flex-col items-center justify-center gap-10">
            <Container>
                <div className="flex justify-between items-center gap-10 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                    <div className="h-screen">
                        <h1>Para Distribuidores</h1>
                        <RegistrarCliente />
                    </div>
                    <div className="w-1/2 relative">
                        <img
                            src='https://i.postimg.cc/Kj5sSxb1/242681053-1273867203065437-4704187045925719852-n.jpg'
                            className="object-cover object-top w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <h1 className="text-white text-3xl"></h1>
                        </div>
                    </div>
                </div>
            </Container>

        </Layout>
    )
}

export default MayoristasPage