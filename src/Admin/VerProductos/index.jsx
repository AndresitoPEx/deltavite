
import LayoutAdmin from "../../Components/LayoutAdmin";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetProductos, DeleteProducto } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const VerProductos = () => {

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const { data: productos, isLoading, error, isError } = useQuery({
        queryKey: ["productos"],
        queryFn: GetProductos,
        select: productos => productos.sort((a, b) => b.id - a.id)
    });

    const { data: imagenes, isLoading2, error2, isError2 } = useQuery({
        queryKey: ["imagenes"],
        queryFn: GetImagenes,
    });

    const { data: categorias, isLoading3, error3, isError3 } = useQuery({
        queryKey: ["categorias"],
        queryFn: GetCategorias,
    });

    //ELIMINAR PRODUCTO
    const deleteMutation = useMutation({
        mutationFn: DeleteProducto,
        onSuccess: () => {
            alert("Producto Eliminado");
            queryClient.invalidateQueries("productos");
        }
    });


    if (isLoading || isLoading2 || isLoading3) return <h1>Cargando...</h1>;
    if (isError) return <h1>Hubo un error al obtener los datos de productos: {error.message}</h1>;
    if (isError2) return <h1>Hubo un error al obtener los datos de imágenes: {error2.message}</h1>;
    if (isError3) return <h1>Hubo un error al obtener los datos de categorías: {error3.message}</h1>;

    const getProducts = () => {
        if (productos && imagenes && categorias) {
            return productos.map((producto) => {
                const imagen = imagenes.find((img) => img.id === producto.imagen);
                const imagenURL = imagen ? imagen.nombre : '';

                const categoria = categorias.find((cat) => cat.id === producto.categoria);
                const categoriaNombre = categoria ? categoria.nombre : '';

                return {
                    ...producto,
                    imagen: imagenURL,
                    categoria: categoriaNombre,
                };
            });
        }
        return [];
    };

    const productosTable = getProducts();

    const handleEdit = (id) => {

        console.log("Editar producto con id: ", id);
        navigate(`/editar-producto/${id}`);
    }


    return (
        <LayoutAdmin>
            <Container maxWidth="xl">
                <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
                    <h2 className="text-3xl font-bold text-gray-700">Lista de Productos</h2>
                </div>
                <div className="mb-5">
                    <NavLink to="/registrar-productos">
                        <Button variant="contained">Registrar Producto</Button>
                    </NavLink>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className="shadow-lg">
                                {/* transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-800 hover:border-gray-800 hover:text-gray-100 */}
                                <TableCell>Nombre</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Categoría</TableCell>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Modelo</TableCell>
                                <TableCell>Color</TableCell>
                                <TableCell> Editar/Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productosTable.map((producto) => (
                                <TableRow key={producto.id}>
                                    <TableCell>{producto.nombre}</TableCell>
                                    <TableCell>{producto.precio}</TableCell>
                                    <TableCell>{producto.categoria}</TableCell>
                                    <TableCell>
                                        <img src={producto.imagen} alt="Imagen del producto" className="w-20" />
                                    </TableCell>
                                    <TableCell>{producto.modelo}</TableCell>
                                    <TableCell>{producto.color}</TableCell>
                                    <TableCell>
                                        {/* //para editar */}
                                        <button className="mx-10"
                                            onClick={() => handleEdit(producto.id)
                                            }
                                        >
                                            <EditIcon color="warning" />
                                        </button>
                                        {/* //para eliminar */}
                                        <button
                                            onClick={() => {
                                                deleteMutation.mutate(producto.id);
                                            }}>
                                            <DeleteIcon color="error" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </LayoutAdmin>
    );
}

export default VerProductos;
