
import axios from 'axios';

export const apiImagenes = axios.create({
    baseURL: "http://localhost:3001/"
    // baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetImagenes = async () => {
    const response = await apiImagenes.get('/imagenes')
    return response.data
    
}

export const PostImagen = async (imagen) => {
    
    return apiImagenes.post('/imagenes', imagen)
}
