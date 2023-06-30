import Layout from "../../Components/Layout"

import React from 'react';

const RegistrarProductos = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const data = new FormData(e.target)
        const nuevoProducto = Object.fromEntries(data.entries())
        console.log(nuevoProducto)
    }





    return (
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" />


                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" />

                <label htmlFor="imagen">Imagen</label>
                <input type="text" id="imagen" name="imagen" />

                <label htmlFor="codigo">Codigo</label>
                <input type="text" id="codigo" name="codigo" />

                <label htmlFor="color">Color</label>
                <input type="text" id="color" name="color" />

                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" />

                <label htmlFor="stock">Modelo</label>
                <input type="text" id="modelo" name="modelo" />

                <label htmlFor="precio">Precio</label>
                <input type="number" id="precio" name="precio" />

                <button type="submit">Registrar</button>



            </form>
        </Layout>
    );
};

export default RegistrarProductos;
