
import axios from 'axios';

export const apiCategorias = axios.create({
    baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetCategorias = async () => {
    const response = await apiCategorias.get('/categorias')
    return response.data
    
}

