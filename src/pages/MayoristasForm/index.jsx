import RegistrarCliente from "../../Components/RegistrarCliente"
import Layout from "../../Components/Layout"

const MayoristasPage = () => {

    return (
        <Layout className="flex flex-col items-center justify-center gap-10">
            <h1>Para Distribuidores</h1>
            <RegistrarCliente />
        </Layout>
    )
}

export default MayoristasPage