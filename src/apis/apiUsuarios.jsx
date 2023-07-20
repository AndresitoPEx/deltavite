import axios from 'axios';

const baseURL = "https://ihiz062-001-site1.dtempurl.com/api/usuarios";

export const apiUsuarios = axios.create({
  baseURL
});

export const obtenerUsuarios = async () => {
  try {
    const response = await apiUsuarios.get('/');
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
};

export const obtenerUsuarioPorId = async (id) => {
  try {
    const response = await apiUsuarios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener usuario con ID ${id}:`, error);
    throw error;
  }
};

export const crearUsuario = async (usuario) => {
  try {
    const response = await apiUsuarios.post('/', usuario);
    return response.data;
  } catch (error) {
    console.error("Error al crear usuario:", error);
    throw error;
  }
};

export const actualizarUsuario = async (id, usuario) => {
  try {
    const response = await apiUsuarios.put(`/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error(`Error al actualizar usuario con ID ${id}:`, error);
    throw error;
  }
};

export const eliminarUsuario = async (id) => {
  try {
    const response = await apiUsuarios.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al eliminar usuario con ID ${id}:`, error);
    throw error;
  }
};
