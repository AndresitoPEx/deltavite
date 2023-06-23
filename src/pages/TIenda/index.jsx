import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias"; // Importa la función para obtener las categorías
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";


const Tienda = () => {

  const { data: productos, isLoading, error, isError } = useQuery({
    queryKey: ["productos"],
    queryFn: GetProductos, // Llama a la función para obtener los productos
  });

  const { data: imagenes, isLoading2, error2, isError2 } = useQuery({
    queryKey: ["imagenes"],
    queryFn: GetImagenes, // Llama a la función para obtener las imágenes
  });

  const { data: categorias, isLoading3, error3, isError3 } = useQuery({
    queryKey: ["categorias"],
    queryFn: GetCategorias, // Llama a la función para obtener las categorías
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

  const productosCard = getProducts();

  return (
    <Layout>
      <h1>Tienda</h1>
      <div className="grid gap-5 grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full max-w-screen-lg">
        {productosCard.map((producto) => (
          <div key={producto.id}>
            <Card
              categoria={producto.categoria}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              codigo={producto.codigo}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Tienda;
