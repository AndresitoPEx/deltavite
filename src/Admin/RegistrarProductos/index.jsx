
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import LayoutAdmin from "../../Components/LayoutAdmin"
import { PostProducto } from "../../apis/apiProductos";
import { PostImagen } from "../../apis/apiImagenes";
import { GetCategorias } from '../../apis/apiCategorias';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';


const RegistrarProductos = () => {
  const mutationProduct = useMutation({
    mutationFn: PostProducto,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Producto Registrado",
        showConfirmButton: false,
        timer: 2500,
      });
    },
    onError: (error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al registrar el producto",
      });
    },
  });

  const mutationImage = useMutation({
    mutationFn: PostImagen,
    onSuccess: () => {
      //alert("Imagen Registrada");
    },
    onError: (error) => {
      console.error(error);
      //alert("Error al registrar la imagen");
    },
  });

  const queryClient = useQueryClient();

  const { data: categorias } = useQuery(["categorias"], () => GetCategorias());

  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoriaId: "",
    color: "",
    imagenUrl: "",
    stock: "",
    descripcion: "",
    codigo: "",
    modelo: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      categoriaId: parseInt(formData.categoriaId),
      stock: parseInt(formData.stock),
      precio: parseFloat(formData.precio).toFixed(2)
    };

    // Enviar la nueva imagen (si hay una)
    let imagenId;
    if (data.imagenUrl) {
      let responseImage;
      if (data.imagenUrl.startsWith("http")) {
        // La imagen es un enlace externo, enviar solo el enlace
        responseImage = await mutationImage.mutateAsync({ nombre: data.imagenUrl });
      } else {
        // La imagen es un archivo, enviar FormData
        const formData = new FormData();
        formData.append("imagen", data.imagenUrl);
        responseImage = await mutationImage.mutateAsync(formData);
      }

      // Obtener el ID de la imagen
      imagenId = responseImage.data.id;
    }

    // Asignar el ID de la imagen al campo "imagen" en el producto
    data.imagen = imagenId;

    // Enviar el nuevo producto
    mutationProduct.mutate(data);
    queryClient.invalidateQueries("productos");

    // Limpiar el formulario después del registro exitoso
    setFormData({
      nombre: "",
      precio: "",
      categoriaId: "",
      color: "",
      imagenUrl: "",
      stock: "",
      descripcion: "",
      codigo: "",
      modelo: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <LayoutAdmin>
      <Container className="p-10" maxWidth="xl">
        <form onSubmit={handleSubmit}>
          <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
            <h2 className="text-3xl font-bold text-gray-700">Registrar Producto</h2>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col w-1/2">
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                variant="filled"
                margin="normal"
                value={formData.nombre}
                onChange={handleInputChange}
              />

              <TextField
                id="precio"
                name="precio"
                label="Precio"
                variant="filled"
                margin="normal"
                value={formData.precio}
                onChange={handleInputChange}
              />

              <FormControl variant="filled" margin="normal">
                <InputLabel id="categoria-label">Categoría</InputLabel>
                <Select
                  labelId="categoria-label"
                  id="categoria"
                  name="categoriaId"
                  value={formData.categoriaId}
                  onChange={handleInputChange}
                >
                  {categorias?.map((categoria) => (
                    <MenuItem key={categoria.id} value={categoria.id}>
                      {categoria.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>



              <TextField
                id="imagen"
                name="imagenUrl"
                label="Imagen"
                variant="filled"
                margin="normal"
                value={formData.imagenUrl}
                onChange={handleInputChange}
              />

            </div>

            <div className="flex flex-col w-1/2">

              <TextField
                id="color"
                name="color"
                label="Color"
                variant="filled"
                margin="normal"
                value={formData.color}
                onChange={handleInputChange}
              />

              <TextField
                id="stock"
                name="stock"
                label="Stock"
                variant="filled"
                margin="normal"
                value={formData.stock}
                onChange={handleInputChange}
              />

              <TextField
                id="descripcion"
                name="descripcion"
                label="Descripcion"
                variant="filled"
                margin="normal"
                value={formData.descripcion}
                onChange={handleInputChange}
              />

              <TextField
                id="modelo"
                name="modelo"
                label="Modelo"
                variant="filled"
                margin="normal"
                value={formData.modelo}
                onChange={handleInputChange}
              />

            </div>
          </div>

          <div className='flex gap-10 mt-10 justify-between'>
            <div className='flex gap-10'>
              <Button
                variant="contained"
                type="submit"
                color="success"
                size='large'
              >
                Registrar
              </Button>
              <NavLink to="/admin/lista-productos">
                <Button
                  variant="contained"
                  type="button"
                  size='large'
                  endIcon={<SendIcon />}
                >
                  Ver Productos
                </Button>
              </NavLink>
            </div>
            <div>
              <NavLink to="/admin/registrar-categoria">
                <Button
                  variant="contained"
                  type="button"
                  size='large'
                  color='warning'
                >
                  Agregar Categoria
                </Button>
              </NavLink>
            </div>
          </div>
        </form>
      </Container>
    </LayoutAdmin>
  );
};

export default RegistrarProductos;
