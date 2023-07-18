
import axios from 'axios';

export const apiProductos = axios.create({
    baseURL: "http://ihiz062-001-site1.dtempurl.com/api/"
    // baseURL: "https://tungsten-rustic-pewter.glitch.me/"

})

export const GetProductos = async () => {
    const response = await apiProductos.get('/producto')
    return response.data

}

// export const GetProductoById = async (id) => {
//     const response = await apiProductos.get(`/producto/${id}`);
//     return response.data;
// };

export const GetProductoByCodigo = async (codigo) => {
    const response = await apiProductos.get(`/producto?codigo=${codigo}`);
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
