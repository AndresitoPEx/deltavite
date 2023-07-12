
import axios from 'axios';

export const apiCategorias = axios.create({
    baseURL: "https://tungsten-rustic-pewter.glitch.me/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetCategorias = async () => {
    const response = await apiCategorias.get('/categorias')
    return response.data
    
}

export const GetCategoriaById = async (id) => {
    const response = await apiCategorias.get(`/categorias/${id}`);
    return response.data;
};

export const PostCategoria = async (categoria) => apiCategorias.post('/categorias', categoria)

export const PutCategoria = async (id, categoria) => {
    const response = await apiCategorias.put(`/categorias/${id}`, categoria);
    return response.data;
}
