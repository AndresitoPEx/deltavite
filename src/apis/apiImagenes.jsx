
import axios from 'axios';

export const apiImagenes = axios.create({
    baseURL: "https://ihiz062-001-site1.dtempurl.com/api/"
    // baseURL: "https://tungsten-rustic-pewter.glitch.me/"
    
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

