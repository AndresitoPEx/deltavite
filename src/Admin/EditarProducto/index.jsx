import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetProductoById, PutProducto } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes"; 
import { GetCategorias } from "../../apis/apiCategorias"; 
import { useParams } from "react-router-dom";
import LayoutAdmin from "../../Components/LayoutAdmin";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const EditarProductoByID = () => {
    const { id } = useParams();
    const queryClient = useQueryClient();

    // Estado para almacenar los datos del producto a editar
    const [formData, setFormData] = useState(null);

    // Consulta para obtener los datos del producto por su ID
    const { data: producto, isLoading, error, isError } = useQuery({
        queryKey: ["producto", id],
        queryFn: () => GetProductoById(id),
    });

    // Consulta para obtener las imágenes
    const { data: imagenes } = useQuery({
        queryKey: ["imagenes"],
        queryFn: GetImagenes,
    });

    // Consulta para obtener las categorías
    const { data: categorias } = useQuery({
        queryKey: ["categorias"],
        queryFn: GetCategorias,
    });

    // Mutación para actualizar los datos del producto
    const updateMutation = useMutation({
        mutationFn: (updatedData) => PutProducto(id, updatedData),
        onSuccess: () => {
            alert("Producto actualizado exitosamente");
            queryClient.invalidateQueries("productos");
        },
    });

    // Función para manejar los cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData) {
            updateMutation.mutate(formData);
        }
    };

    // Mostrar mensaje de carga si se está obteniendo el producto
    if (isLoading) return <h1>Cargando...</h1>;

    // Manejar errores en la obtención del producto
    if (isError) return <h1>Error al obtener el producto: {error.message}</h1>;

    // Actualizar el estado con los datos del producto cuando se obtienen
    if (producto && !formData) {
        setFormData(producto);
    }



    // Lograr que el input de imagen se pueda editar ingresando un enlace externo
    const handleImagenChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            imagen: value,
        }));
    };

    // Renderizar las opciones de categoría
    const renderCategoriaOptions = () => {
        return categorias?.map((categoria) => (
            <MenuItem key={categoria.id} value={categoria.id}>
                {categoria.nombre}
            </MenuItem>
        ));
    };

    return (
        <LayoutAdmin>
            <Container maxWidth="xl">
                <div className="text-center mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
                    <h1 className="text-3xl font-bold text-gray-700">Editar Producto</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-5">
                        <TextField
                            name="nombre"
                            label="Nombre"
                            value={formData?.nombre || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="descripcion"
                            label="Descripción"
                            value={formData?.descripcion || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="precio"
                            label="Precio"
                            value={formData?.precio || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="stock"
                            label="Stock"
                            value={formData?.stock || ""}
                            onChange={handleInputChange}
                        />
                        {/* Categoría */}
                        <Select
                            name="categoria"
                            label="Categoría"
                            value={formData?.categoria || ""}
                            onChange={handleInputChange}
                        >
                            {renderCategoriaOptions()}
                        </Select>
                        <TextField
                            name="modelo"
                            label="Modelo"
                            value={formData?.modelo || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="color"
                            label="Color"
                            value={formData?.color || ""}
                            onChange={handleInputChange}
                        />
                        <TextField
                            name="imagen"
                            label="Imagen"
                            value={formData?.imagen || ""}
                            onChange={handleImagenChange}
                        />
                        <TextField
                            name="codigo"
                            label="Codigo"
                            value={formData?.codigo || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-5">
                        <Button variant="contained" type="submit">
                            Actualizar Producto
                        </Button>
                    </div>
                </form>
            </Container>
        </LayoutAdmin>
    );
};

export default EditarProductoByID;
