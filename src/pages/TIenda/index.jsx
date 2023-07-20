import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

import Container from "@mui/material/Container";

const Tienda = () => {

  const [busqueda, setBusqueda] = useState("");

  const { data: productos, isLoading, error, isError } = useQuery({
    queryKey: ["productos"],
    queryFn: GetProductos,
    select: (productos) => productos.sort((a, b) => b.id - a.id),
  });

  const { data: imagenes, isLoading2, error2, isError2 } = useQuery({
    queryKey: ["imagenes"],
    queryFn: GetImagenes,
  });

  const { data: categorias, isLoading3, error3, isError3 } = useQuery({
    queryKey: ["categorias"],
    queryFn: GetCategorias,
  });

  if (isLoading || isLoading2 || isLoading3) return <h1>Cargando...</h1>;
  if (isError) return <h1>Hubo un error al obtener los datos de productos: {error.message}</h1>;
  if (isError2) return <h1>Hubo un error al obtener los datos de imágenes: {error2.message}</h1>;
  if (isError3) return <h1>Hubo un error al obtener los datos de categorías: {error3.message}</h1>;

  const getProducts = () => {
    if (productos && imagenes && categorias) {

      const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );

      return productosFiltrados.map((producto) => {
        const imagen = imagenes.find((img) => img.id === producto.imagen);
        const imagenURL = imagen ? imagen.nombre : "";

        const categoria = categorias.find((cat) => cat.id === producto.categoria);
        const categoriaNombre = categoria ? categoria.nombre : "";

        return {
          ...producto,
          imagen: imagenURL,
          categoria: categoriaNombre,
        };
      });
    }
    return [];
  };

  const productosCard = getProducts();

  return (
    <Layout>
      <Container maxWidth="xl">
        <div className="pt-10">
          <input
            className="w-1/5 border border-gray-300 border-solid rounded-3 shadow-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar productos por nombre..."
          />
        </div>
        {productosCard.length === 0 ? ( // Verificamos si no hay resultados en la búsqueda
          <div className="text-center mt-10 h-screen">

            <p className="text-2xl font-semibold text-[#f5821f]">No se encontraron productos.</p>
            <p className="text-xl text-gray-600">Intenta con otra busqueda.</p>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full py-20">
            {productosCard.map((producto) => (
              <div key={producto.id}>
                <Card
                  categoria={producto.categoriaNombre}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imagen={producto.imagenNombre}
                  codigo={producto.codigo}
                  color={producto.color}
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Tienda;
