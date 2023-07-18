import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

import Container from "@mui/material/Container";

const Tienda = () => {
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
      return productos.map((producto) => {
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
        <div className="grid gap-5 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full py-20">
          {productosCard.map((producto) => (
            <div key={producto.id}>
              <Card
                categoria={producto.categoriaNombre} // Utilizamos categoriaNombre en lugar de categoria
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagenNombre} // Utilizamos imagenNombre en lugar de imagen
                codigo={producto.codigo}
                color={producto.color}
              />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Tienda;
