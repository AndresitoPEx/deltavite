
import axios from 'axios';

export const apiProductos = axios.create({
    baseURL: "http://localhost:3001/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetProductos = async () => {
    const response = await apiProductos.get('/producto')
    return response.data
    
}


export const PostProducto = async (producto) => {
    console.log(producto);
 return apiProductos.post('/producto', producto)
}

export const DeleteProducto = async (codigo) => apiProductos.delete(`/producto/${codigo}`)

// export const PutProducto = async (producto) => apiProductos.put(`/producto/${producto.codigo}`, producto)
