
import axios from 'axios';

export const apiImagenes = axios.create({
    baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetImagenes = async () => {
    const response = await apiImagenes.get('/imagenes')
    return response.data
    
}

