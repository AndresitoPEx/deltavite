
import axios from 'axios';

export const apiCategorias = axios.create({
  baseURL: "http://localhost:4000/api/"
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

export const PostCategoria = async (categoria) => {
  try {
    const response = await apiCategorias.post('/categorias', categoria);
    return response.data;
  } catch (error) {
    console.error('Error al crear una categoría:', error);
    return null;
  }
};

export const PutCategoria = async (id, categoria) => {
  try {
    const response = await apiCategorias.put(`/categorias/${id}`, categoria);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar una categoría:', error);
    return null;
  }
};
