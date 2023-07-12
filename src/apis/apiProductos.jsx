
import axios from 'axios';

export const apiProductos = axios.create({
    baseURL: "https://tungsten-rustic-pewter.glitch.me/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetProductos = async () => {
    const response = await apiProductos.get('/producto')
    return response.data

}

export const GetProductoById = async (id) => {
    const response = await apiProductos.get(`/producto/${id}`);
    return response.data;
};

export const PostProducto = async (producto) => {
    console.log(producto);
    return apiProductos.post('/producto', producto)
}

export const DeleteProducto = id => apiProductos.delete(`/producto/${id}`)

export const PutProducto = async (id, producto) => {
    const response = await apiProductos.put(`/producto/${id}`, producto);
    return response.data;
};
