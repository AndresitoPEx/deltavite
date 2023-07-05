
import axios from 'axios';

export const apiImagenes = axios.create({
    baseURL: "http://localhost:3001/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetImagenes = async () => {
    const response = await apiImagenes.get('/imagenes')
    return response.data
    
}

export const GetImagenById = async (id) => {
    const response = await apiImagenes.get(`/imagenes/${id}`);
    return response.data;
};

export const PostImagen = async (imagen) => {
    
    return apiImagenes.post('/imagenes', imagen)
}

export const PutImagen = async (id, imagen) => {
    const response = await apiImagenes.put(`/imagenes/${id}`, imagen);
    return response.data;
}

