import { useQuery } from "@tanstack/react-query";
import { GetProductos } from "../../apis/apiProductos";
import { GetImagenes } from "../../apis/apiImagenes";
import { GetCategorias } from "../../apis/apiCategorias";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useContext } from "react";
import { CarritoDeCompras } from "../../Context";

const DetalleProducto = () => {

    const context = useContext(CarritoDeCompras) 
    const { contar } = useContext(CarritoDeCompras)

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
                const imagen = imagenes.find((img) => img.id === producto.imagen);
                const imagenURL = imagen ? imagen.nombre : "";

                const categoria = categorias.find((cat) => cat.id === producto.categoria);
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

    const agregarProductoACarrito = (Card) => {
        context.setContar(contar + 1)
        context.setProductosCarrito([...context.productosCarrito, Card])
        context.openCheckOutMenu()

        console.log(context.productosCarrito);
    }



    const producto = getProductById(codigo);

    if (!producto) return <h1>No se encontró el producto</h1>;

    return (
        <Layout>
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold mb-6 item text-center">{producto.nombre}</h1>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 flex justify-end items-center">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                            <img src={producto.imagen} alt={producto.nombre} className="object-cover w-full h-full max-w-lg max-h-lg" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-6">
                        <h2 className="text-2xl font-bold mb-4">{producto.codigo}</h2>
                        <p className="text-lg mb-2"><span className="font-bold text-5xl">S/.{producto.precio}</span></p>
                        <p className="text-lg mb-2">Categoría: {producto.categoria}</p>
                        <p className="text-lg mb-2">Color: {producto.color}</p>
                        <p className="text-lg mb-2">Descripción: {producto.descripcion}</p>
                        <p className="text-lg mb-2">Modelo: {producto.modelo}</p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-50 hover:bg-blue-600"
                            onClick={() => agregarProductoACarrito(producto)}
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default DetalleProducto;
