
import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CarritoDeCompras } from "../../Context/carritoContext";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import Layout from "../../Components/Layout";
import LoadingPage from "../../Components/Loading";


const DetalleProducto = () => {
  const context = useContext(CarritoDeCompras);
  const { codigo } = useParams();

  const [addingToCart, setAddingToCart] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const { data: productos, isLoading, error, isError } = useQuery({
    queryKey: ["productos"],
    queryFn: GetProductos,
  });

  const { data: imagenes, isLoading2, error2, isError2 } = useQuery({
    queryKey: ["imagenes"],
    queryFn: GetImagenes,
  });

  const { data: categorias, isLoading3, error3, isError3 } = useQuery({
    queryKey: ["categorias"],
    queryFn: GetCategorias,
  });

  if (showLoading) return <LoadingPage />;

  if (isLoading || isLoading2 || isLoading3) return <LoadingPage />;
  if (isError) return <h1>Error al obtener los datos de productos: {error.message}</h1>;
  if (isError2) return <h1>Error al obtener los datos de imágenes: {error2.message}</h1>;
  if (isError3) return <h1>Error al obtener los datos de categorías: {error3.message}</h1>;

  const getProductById = (id) => {
    if (productos && imagenes && categorias) {
      const producto = productos.find((producto) => producto.codigo === id);

      if (producto) {
        const imagenesProducto = imagenes.filter((img) => img.productoId === producto.id);
        const imagenesProductoArray = imagenesProducto.map((img) => img.nombre);

        const categoria = categorias.find((cat) => cat.id === producto.categoriaId);
        const categoriaNombre = categoria ? categoria.nombre : "";

        return {
          ...producto,
          imagenes: imagenesProductoArray,
          categoria: categoriaNombre,
        };
      }
    }
    return null;
  };



  const agregarProductoACarrito = (producto) => {
    setAddingToCart(true);
    setTimeout(() => {
      context.agregarProductoACarrito(producto); // Usamos la función del contexto para agregar el producto al carrito
      setAddingToCart(false);
    }, 500);
  };

  const renderIcon = (codigo, loading) => {
    const productoEnCarrito =
      context.productosCarrito.filter((producto) => producto.codigo === codigo).length > 0;

    if (productoEnCarrito) {
      return (
        <button className="bg-green-700 p-2 flex items-center justify-center rounded-md text-white hover:bg-green-600 focus:outline-none">
          <CheckIcon className="h-5 w-5 mr-1" />
          <span>Producto Agregado</span>
        </button>
      );
    } else {
      return (
        <button
          className="bg-[#f5821f] p-2 flex items-center justify-center rounded-md text-white hover:bg-[#e3661d] focus:outline-none"
          onClick={() => agregarProductoACarrito(producto)}
          disabled={loading} // Deshabilitar el botón mientras está en estado de carga
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-1 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10 2.647A7.962 7.962 0 0020 12h-4a7.962 7.962 0 01-3 5.291l3 2.647z"
              ></path>
            </svg>
          ) : (
            <PlusIcon className="h-5 w-5 mr-1" />
          )}
          <span>{loading ? "Agregando..." : "Agregar producto"}</span>
        </button>
      );
    }
  };

  const producto = getProductById(codigo);

  if (!producto) return <h1>No se encontró el producto</h1>;

  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1 className="text-gray-500 text-3xl font-bold mb-6 item text-center">{producto.nombre}</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              <img
                src={producto.imagenes}
                alt={producto.nombre}
                className="object-cover w-full h-full max-w-lg max-h-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <div className="flex-1 mb-10">
              <h4 className="text-gray-400  text-md font-bold mb-4">Codigo: {producto.codigo}</h4>
              <p className="text-lg mb-2 py-10">
                <span className="font-bold text-5xl">S/.{producto.precio}</span>
              </p>
              <p className="text-lg mb-2">Categoría: {producto.categoria}</p>
              <p className="text-lg mb-2">Color: {producto.color}</p>
              <p className="text-lg mb-2">Descripción: {producto.descripcion}</p>
              <p className="text-lg mb-2">Modelo: {producto.modelo}</p>
            </div>
            <div>{renderIcon(producto.codigo, addingToCart)}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetalleProducto;
