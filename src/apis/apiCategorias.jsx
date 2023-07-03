
import axios from 'axios';

export const apiCategorias = axios.create({
    baseURL: "http://localhost:3001/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetCategorias = async () => {
    const response = await apiCategorias.get('/categorias')
    return response.data
    
}

export const PostCategoria = async (categoria) => apiCategorias.post('/categorias', categoria)

