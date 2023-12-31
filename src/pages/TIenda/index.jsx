import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import LoadingPage from "../../Components/Loading";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";

const Tienda = () => {

  const [busqueda, setBusqueda] = useState("");
  const [showLoading, setShowLoading] = useState(true);

  const { data: productos, isLoading: isLoadingProductos, error: errorProductos, isError: isErrorProductos } = useQuery({
    queryKey: ["productos"],
    queryFn: GetProductos,
    select: (productos) => productos.sort((a, b) => b.id - a.id),
  });

  const { data: imagenes, isLoading: isLoadingImagenes, error: errorImagenes, isError: isErrorImagenes } = useQuery({
    queryKey: ["imagenes"],
    queryFn: GetImagenes,
  });

  const { data: categorias, isLoading: isLoadingCategorias, error: errorCategorias, isError: isErrorCategorias } = useQuery({
    queryKey: ["categorias"],
    queryFn: GetCategorias,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  if (isLoadingProductos || isLoadingImagenes || isLoadingCategorias || showLoading) return <LoadingPage />;
  if (isErrorProductos) return <h1>Hubo un error al obtener los datos de productos: {errorProductos.message}</h1>;
  if (isErrorImagenes) return <h1>Hubo un error al obtener los datos de imágenes: {errorImagenes.message}</h1>;
  if (isErrorCategorias) return <h1>Hubo un error al obtener los datos de categorías: {errorCategorias.message}</h1>;

  console.log('Productos:', productos);
  console.log('Imágenes:', imagenes);
  console.log('Categorías:', categorias);

  const getProducts = () => {
    if (productos && imagenes && categorias) {
      const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );

      return productosFiltrados.map((producto) => {
        const imagenesProducto = imagenes.filter((img) => img.productoId === producto.id);
        const categoria = categorias.find((cat) => cat.id === producto.categoriaId);

        return {
          ...producto,
          imagenes: imagenesProducto, // aquí asignamos todas las imágenes
          categoria: categoria,
        };
      });
    }
    return [];
  };


  const productosCard = getProducts();

  return (
    <Layout>
      <div className="w-full h-[500px] relative ">
        <img
          src='https://i.postimg.cc/Z5jF7j9Q/79069.jpg'
          className="object-cover object-center w-full h-full "
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-3xl"></h1>
        </div>
      </div>
      <Container maxWidth="xl">
        <div className="pt-14">
          <input
            className="w-full border border-gray-300 border-solid rounded-3 shadow-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar productos..."
          />
        </div>

        <div>

          <h1 className="text-3xl text-gray-400 font-bold mt-6 text-center">CATÁLOGO OCTUBRE - DICIEMBRE 2023</h1>
          <Divider
            className="bg-[#f5f5f5e0]"
          />
        </div>
        {productosCard.length === 0 ? (
          <div className="text-center mt-10 h-screen">
            <p className="text-3xl font-semibold text-[#f5821f]">No se encontraron productos.</p>
            <p className="text-2xl text-gray-600">Intenta con otra busqueda.</p>
          </div>
        ) : (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full py-20">
            {productosCard.map((producto) => (
              <div key={producto.id}>
                <Card
                  categoria={producto.categoria}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imagenes={producto.imagenes}
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
