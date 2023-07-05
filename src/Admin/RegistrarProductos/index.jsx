import React from 'react';
import { useState } from "react";

import LayoutAdmin from "../../Components/LayoutAdmin"
import { PostProducto } from "../../apis/apiProductos";
import { PostImagen } from "../../apis/apiImagenes";
import { NavLink } from 'react-router-dom';


import { useMutation, useQueryClient } from "@tanstack/react-query";

//materialUI
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';


const RegistrarProductos = () => {



    const [categoria, setCategoria] = useState("");

    const opcionesCategoria = [
        { id: 1, nombre: "Chaleco Antibala" },
        { id: 2, nombre: "Mochila Táctica" },
        // Agrega más opciones aquí si es necesario
    ];



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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log(data);

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
        useQueryClient().invalidateQueries("productos");
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

                            />

                            <TextField
                                id="precio"
                                name="precio"
                                label="Precio"
                                variant="filled"
                                margin="normal"
                            />

                            <TextField
                                id="categoria"
                                name="categoria"
                                label="Categoria"
                                variant="filled"
                                margin="normal"
                                select
                                fullWidth
                                value={categoria} // Establece el valor seleccionado en el estado
                                onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado al seleccionar una opción
                            >
                                {opcionesCategoria.map((opcion) => (
                                    <MenuItem key={opcion.id} value={opcion.id}>
                                        {opcion.nombre}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField
                                id="color"
                                name="color"
                                label="Color"
                                variant="filled"
                                margin="normal"
                            />


                            <TextField
                                id="imagen"
                                name="imagen"
                                label="Imagen"
                                variant="filled"
                                margin="normal"

                            />

                        </div>

                        <div className="flex flex-col w-1/2">
                            <TextField
                                id="stock"
                                name="stock"
                                label="Stock"
                                variant="filled"
                                margin="normal"
                            />

                            <TextField
                                id="descripcion"
                                name="descripcion"
                                label="Descripcion"
                                variant="filled"
                                margin="normal"
                            />

                            <TextField
                                id="codigo"
                                name="codigo"
                                label="Codigo"
                                variant="filled"
                                margin="normal"
                            />

                            <TextField
                                id="modelo"
                                name="modelo"
                                label="Modelo"
                                variant="filled"
                                margin="normal"
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


