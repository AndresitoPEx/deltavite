
import axios from 'axios';

export const apiProductos = axios.create({
    baseURL: "https://apisdelta.azurewebsites.net/api/"
})


export const GetProductos = async () => {
    const response = await apiProductos.get('/producto')
    return response.data
    
}

