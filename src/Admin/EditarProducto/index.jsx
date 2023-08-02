import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetProductoByCodigo, PutProducto } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import LayoutAdmin from "../../Components/LayoutAdmin";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const { codigo } = useParams();
  const queryClient = useQueryClient();

  const [categoriaNombre, setCategoriaNombre] = useState("");

  // Estado para almacenar los datos del producto a editar
  const [formData, setFormData] = useState(null);

  // Consulta para obtener los datos del producto por su código
  const { data: producto, isLoading, error, isError } = useQuery(["producto", codigo], () =>
    GetProductoByCodigo(codigo)
  );

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
  const updateMutation = useMutation((updatedData) => PutProducto(updatedData.id, updatedData), {
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Producto actualizado",
        showConfirmButton: false,
        timer: 2500,
      });
      queryClient.invalidateQueries("productos");
    },
    onError: (error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al actualizar el producto",
      });
    }
  });

  // Actualizar el estado con los datos del producto cuando se obtienen
  useEffect(() => {
    if (producto) {
      setFormData(producto);
      setCategoriaNombre(producto.categoriaNombre);
    }
  }, [producto]);

  // Función para manejar los cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "categoria") {
      const categoriaSeleccionada = categorias.find(
        (categoria) => categoria.nombre === value
      );

      setFormData((prevData) => ({
        ...prevData,
        categoriaId: categoriaSeleccionada?.id || 0,
      }));
      setCategoriaNombre(value);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      const updatedData = {
        id: formData.id || 0,
        nombre: formData.nombre || "",
        categoriaId: formData.categoriaId || 0,
        codigo: formData.codigo || "",
        modelo: formData.modelo || "",
        color: formData.color || "",
        descripcion: formData.descripcion || "",
        stock: formData.stock || 0,
        precio: formData.precio || 0,
        imagenUrl: formData.imagenUrl || "",
      };
      updateMutation.mutate(updatedData);
    }
  };

  // Mostrar mensaje de carga si se está obteniendo el producto
  if (isLoading) return <h1>Cargando...</h1>;

  // Manejar errores en la obtención del producto
  if (isError) return <h1>Error al obtener el producto: {error.message}</h1>;

  // Renderizar las opciones de categoría
  const renderCategoriaOptions = () => {
    return categorias?.map((categoria) => (
      <MenuItem key={categoria.id} value={categoria.nombre}>
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
            {/* Categorías */}
            <FormControl>
              <InputLabel id="categoria-label">Categoría</InputLabel>
              <Select
                name="categoria"
                labelId="categoria-label"
                value={categoriaNombre || ""}
                onChange={handleInputChange}
              >
                {renderCategoriaOptions()}
              </Select>
            </FormControl>
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
              name="imagenUrl"
              label="Imagen"
              value={formData?.imagenUrl || ""}
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

export default EditarProducto;
