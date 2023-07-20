
import axios from 'axios';

export const apiCategorias = axios.create({
    baseURL: "https://ihiz062-001-site1.dtempurl.com/api/"
    // baseURL: "https://tungsten-rustic-pewter.glitch.me/"

})


export const GetCategorias = async () => {
  try {
    const response = await apiCategorias.get('/categorias');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
    return [];
  }
};


export const GetCategoriaById = async (id) => {
    const response = await apiCategorias.get(`/categorias/${id}`);
    return response.data;
};

export const PostCategoria = async (categoria) => apiCategorias.post('/categorias', categoria)

export const PutCategoria = async (id, categoria) => {
    const response = await apiCategorias.put(`/categorias/${id}`, categoria);
    return response.data;
}
