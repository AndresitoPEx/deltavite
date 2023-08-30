import RegistrarCliente from "../../Components/RegistrarCliente"
import Layout from "../../Components/Layout"

const MayoristasPage = () => {

    return (
        <Layout className="flex flex-col items-center justify-center gap-10">

            <div className="h-screen">

                <h1>Para Distribuidores</h1>
                <RegistrarCliente />
            </div>

        </Layout>
    )
}

export default MayoristasPage