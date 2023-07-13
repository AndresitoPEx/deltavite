import React from 'react';
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import LayoutAdmin from "../../Components/LayoutAdmin"
import { PostProducto } from "../../apis/apiProductos";
import { PostImagen } from "../../apis/apiImagenes";
import { GetCategorias } from '../../apis/apiCategorias';

// Material UI
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';



const RegistrarProductos = () => {
    const mutationProduct = useMutation({
        mutationFn: PostProducto,
        onSuccess: () => {
            alert("Producto Registrado");
        },
        onError: (error) => {
            console.error(error);
            alert("Error al registrar el producto");
        },
    });

    const mutationImage = useMutation({
        mutationFn: PostImagen,
        onSuccess: () => {
            alert("Imagen Registrada");
        },
        onError: (error) => {
            console.error(error);
            alert("Error al registrar la imagen");
        },
    });

    const queryClient = useQueryClient();

    const { data: categorias } = useQuery(["categorias"], () => GetCategorias());

    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        categoria: "",
        color: "",
        imagen: "",
        stock: "",
        descripcion: "",
        codigo: "",
        modelo: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());

        // Enviar la nueva imagen (si hay una)
        let imagenId;
        if (data.imagen) {
            let responseImage;
            if (data.imagen.startsWith("http")) {
                // La imagen es un enlace externo, enviar solo el enlace
                responseImage = await mutationImage.mutateAsync({ nombre: data.imagen });
            } else {
                // La imagen es un archivo, enviar FormData
                const formData = new FormData();
                formData.append("imagen", data.imagen);
                responseImage = await mutationImage.mutateAsync(formData);
            }

            // Obtener el ID de la imagen
            imagenId = responseImage.data.id;
        }

        // Convertir el campo "categoria" a número
        if (data.categoria) {
            const categoriaId = parseInt(data.categoria);
            data.categoria = categoriaId;
        }

        // Convertir el campo "precio" a número
        if (data.precio) {
            const precio = parseFloat(data.precio).toFixed(2);
            data.precio = precio;
        }

        // Convertir el campo "stock" a número
        if (data.stock) {
            const stock = parseInt(data.stock);
            data.stock = stock;
        }

        // Asignar el ID de la imagen al campo "imagen" en el producto
        data.imagen = imagenId;

        // Enviar el nuevo producto
        mutationProduct.mutate(data);
        queryClient.invalidateQueries("productos");
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
                                    name="categoria"
                                    value={formData.categoria}
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
                                id="color"
                                name="color"
                                label="Color"
                                variant="filled"
                                margin="normal"
                                value={formData.color}
                                onChange={handleInputChange}
                            />

                            <TextField
                                id="imagen"
                                name="imagen"
                                label="Imagen"
                                variant="filled"
                                margin="normal"
                                value={formData.imagen}
                                onChange={handleInputChange}
                            />

                        </div>

                        <div className="flex flex-col w-1/2">
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
                                id="codigo"
                                name="codigo"
                                label="Codigo"
                                variant="filled"
                                margin="normal"
                                value={formData.codigo}
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

                    <div className='flex gap-10 mt-10'>
                        <Button
                            variant="contained"
                            type="submit"
                            color="success"
                            size='large'
                        >
                            Registrar
                        </Button>
                        <NavLink to="/lista-productos">
                            <Button
                                variant="outlined"
                                type="button"
                                size='large'
                                endIcon={<SendIcon />}
                            >
                                Ver Productos
                            </Button>
                        </NavLink>

                    </div>
                </form>
            </Container>
        </LayoutAdmin>
    );
};

export default RegistrarProductos;
