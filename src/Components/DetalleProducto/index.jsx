import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { CarritoDeCompras } from "../../Context/carritoContext";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const DetalleProducto = () => {
  const context = useContext(CarritoDeCompras);
  const { codigo } = useParams();

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

  if (isLoading || isLoading2 || isLoading3) return <h1>Cargando...</h1>;
  if (isError) return <h1>Error al obtener los datos de productos: {error.message}</h1>;
  if (isError2) return <h1>Error al obtener los datos de imágenes: {error2.message}</h1>;
  if (isError3) return <h1>Error al obtener los datos de categorías: {error3.message}</h1>;

  const getProductById = (id) => {
    if (productos && imagenes && categorias) {
      const producto = productos.find((producto) => producto.codigo === id);

      if (producto) {
        const imagen = imagenes.find((img) => img.nombre === producto.imagenNombre);
        const imagenURL = imagen ? imagen.nombre : "";

        const categoria = categorias.find((cat) => cat.nombre === producto.categoriaNombre);
        const categoriaNombre = categoria ? categoria.nombre : "";

        return {
          ...producto,
          imagen: imagenURL,
          categoria: categoriaNombre,
        };
      }
    }
    return null;
  };

  const agregarProductoACarrito = (producto) => {
    context.agregarProductoACarrito(producto); // Usamos la función del contexto para agregar el producto al carrito
  };

  const renderIcon = (codigo) => {
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
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          <span>Agregar producto</span>
        </button>
      );
    }
  };

  const producto = getProductById(codigo);
  console.log(producto);



  if (!producto) return <h1>No se encontró el producto</h1>;

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 item text-center">{producto.nombre}</h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 flex justify-end items-center">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="object-cover w-full h-full max-w-lg max-h-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-6">
            <div className="flex-1 mb-10">
              <h2 className="text-2xl font-bold mb-4">{producto.codigo}</h2>
              <p className="text-lg mb-2">
                <span className="font-bold text-5xl">S/.{producto.precio.toFixed(2)}</span>
              </p>
              <p className="text-lg mb-2">Categoría: {producto.categoria}</p>
              <p className="text-lg mb-2">Color: {producto.color}</p>
              <p className="text-lg mb-2">Descripción: {producto.descripcion}</p>
              <p className="text-lg mb-2">Modelo: {producto.modelo}</p>
            </div>
            <div>{renderIcon(producto.codigo)}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetalleProducto;
