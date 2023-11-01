
import axios from 'axios';

export const apiImagenes = axios.create({
    baseURL: "https://deltadb.onrender.com/api/"


})


export const GetImagenes = async () => {
    try {
        const response = await apiImagenes.get('/imagenes');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        return [];
    }
};

export const GetImagenById = async (id) => {
    const response = await apiImagenes.get(`/imagenes/${id}`);
    return response.data;
};

export const PostImagen = async (imagen) => {
    try {
        const response = await apiImagenes.post('/imagenes', imagen);
        return response.data;
    } catch (error) {
        console.error('Error al crear una imagen:', error);
        return null;
    }
};


export const PutImagen = async (id, imagen) => {
    try {
        const response = await apiImagenes.put(`/imagenes/${id}`, imagen);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar una imagen:', error);
        return null;
    }
};
