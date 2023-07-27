import axios from 'axios';

const baseURL = "https://ihiz062-001-site1.dtempurl.com/api/clientes";

export const apiClientes = axios.create({
  baseURL
});

export const obtenerClientes = async () => {
  try {
    const response = await apiClientes.get('/');
    return response.data;
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    throw error;
  }
};

export const obtenerClientePorId = async (id) => {
  try {
    const response = await apiClientes.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener cliente con ID ${id}:`, error);
    throw error;
  }
};

export const crearCliente = async (cliente) => {
  try {
    const response = await apiClientes.post('/', cliente);
    return response.data;
  } catch (error) {
    console.error("Error al crear cliente:", error);
    throw error;
  }
};

export const actualizarCliente = async (id, cliente) => {
  try {
    const response = await apiClientes.put(`/${id}`, cliente);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar cliente con ID ${id}:`, error);
    throw error;
  }
};

export const eliminarCliente = async (id) => {
  try {
    const response = await apiClientes.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar cliente con ID ${id}:`, error);
    throw error;
  }
};
