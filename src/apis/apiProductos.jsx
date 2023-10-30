import axios from 'axios';

export const apiProductos = axios.create({
  baseURL: 'http://localhost:4000/api/',
});

export const GetProductos = async () => {
  const response = await apiProductos.get('/producto');
  return response.data;
};

export const GetProductoById = async (id) => {
  const response = await apiProductos.get(`/producto/${id}`);
  return response.data;
};

export const GetProductoByCodigo = async (codigo) => {
  const response = await apiProductos.get('/producto');
  const productos = response.data;
  const producto = productos.find((p) => p.codigo === codigo);
  return producto;
};

export const PostProducto = async (producto) => {
  console.log(producto);
  return apiProductos.post('/producto', producto);
};

export const DeleteProducto = (id) => apiProductos.delete(`/producto/${id}`);

export const PutProducto = async (id, producto) => {
  const response = await apiProductos.put(`/producto/${id}`, producto);
  return response.data;
};
