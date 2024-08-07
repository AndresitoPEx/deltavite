import LayoutAdmin from "../../Components/LayoutAdmin";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetProductos, DeleteProducto } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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

    const { data: imagenes, isLoading: isLoadingImagenes, error: errorImagenes, isError: isErrorImagenes } = useQuery({
        queryKey: ["imagenes"],
        queryFn: GetImagenes,
    });

    const { data: categorias, isLoading: isLoadingCategorias, error: errorCategorias, isError: isErrorCategorias } = useQuery({
        queryKey: ["categorias"],
        queryFn: GetCategorias,
    });

    const deleteMutation = useMutation({
        mutationFn: DeleteProducto,
        onSuccess: () => {
            Swal.fire({
                icon: "success",
                title: "Producto eliminado",
                showConfirmButton: false,
                timer: 2500,
            });
            queryClient.invalidateQueries("productos");
        }
    });

    if (isLoading || isLoadingImagenes || isLoadingCategorias) return <h1>Cargando...</h1>;
    if (isError) return <h1>Hubo un error al obtener los datos de productos: {error.message}</h1>;
    if (isErrorImagenes) return <h1>Hubo un error al obtener los datos de imágenes: {errorImagenes.message}</h1>;
    if (isErrorCategorias) return <h1>Hubo un error al obtener los datos de categorías: {errorCategorias.message}</h1>;

    const getProducts = () => {
        if (productos && imagenes && categorias) {
            console.log("Lista de productos: ", productos);
            return productos.map((producto) => {
                const imagenesProducto = imagenes.filter((img) => img.productoId === producto.id);
                const categoria = categorias.find((cat) => cat.id === producto.categoriaId);

                return {
                    ...producto,
                    imagenes: imagenesProducto,
                    categoria: categoria ? categoria.nombre : '',
                };
            });
        }
        return [];
    };

    const productosTable = getProducts();

    const handleEdit = (codigo) => {
        console.log("Editar producto con código: ", codigo);
        navigate(`/admin/editar-producto/${codigo}`);
    }

    return (
        <LayoutAdmin>
            <Container maxWidth="xl">
                <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
                    <h2 className="text-3xl font-bold text-gray-700">Stock de Productos</h2>
                </div>
                <div className="mb-5">
                    <NavLink to="/admin/registrar-producto">
                        <Button variant="contained">Registrar Producto</Button>
                    </NavLink>
                </div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className="shadow-lg">
                                <TableCell>Nombre</TableCell>
                                <TableCell>Precio</TableCell>
                                <TableCell>Categoría</TableCell>
                                <TableCell>Imagen</TableCell>
                                <TableCell>Código</TableCell>
                                <TableCell>Color</TableCell>
                                <TableCell>{' '}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productosTable.map((producto) => (
                                <TableRow key={producto.id}>
                                    <TableCell>{producto.nombre}</TableCell>
                                    <TableCell>S/. {producto.precio}</TableCell>
                                    <TableCell>{producto.categoria}</TableCell>
                                    <TableCell>
                                        {producto.imagenes.length > 0 && (
                                            <img src={producto.imagenes[0].nombre} alt="Imagen del producto" className="w-20" />
                                        )}
                                    </TableCell>
                                    <TableCell>{producto.codigo}</TableCell>
                                    <TableCell>{producto.color}</TableCell>
                                    <TableCell className="flex justify-center items-center space-x-2" style={{ width: "240px" }}>
                                        <Button variant="contained" color="warning" className="mx-10" onClick={() => handleEdit(producto.codigo)}>
                                            <EditIcon />
                                        </Button>
                                        <Button variant="contained" color="error" onClick={() => deleteMutation.mutate(producto.id)}>
                                            <DeleteIcon />
                                        </Button>
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
