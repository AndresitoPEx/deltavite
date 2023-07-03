import LayoutAdmin from "../../Components/LayoutAdmin"
import Container from '@mui/material/Container';
import { useParams } from "react-router-dom";

const EditarProducto = () => {

    const { codigo } = useParams()


    return (
        <LayoutAdmin>
            <Container maxWidth="xl">
                <div className="text-center mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
                    <h1 className="text-3xl font-bold text-gray-700">Editar Producto</h1>
                </div>
            </Container>
        </LayoutAdmin>
    )
}

export default EditarProducto