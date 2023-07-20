import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NavLink, useNavigate } from 'react-router-dom';

import LayoutAdmin from "../../Components/LayoutAdmin"
import { crearUsuario } from "../../apis/apiUsuarios";

// Material UI
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const RegistrarUsuario = () => {
  const mutation = useMutation(crearUsuario, {
    onSuccess: () => {
      alert("Usuario registrado exitosamente");
      // Lógica adicional después de registrar el usuario
    },
    onError: (error) => {
      console.error(error);
      alert("Error al registrar el usuario");
    },
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    clave: "",
    rolId: 0,
    usuario: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <LayoutAdmin>
      <Container className="p-10" maxWidth="xl">
        <form onSubmit={handleSubmit}>
          <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
            <h2 className="text-3xl font-bold text-gray-700">Registrar Usuario</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="filled"
              margin="normal"
              value={formData.nombre}
              onChange={handleInputChange}
            />

            <TextField
              id="apellidos"
              name="apellidos"
              label="Apellidos"
              variant="filled"
              margin="normal"
              value={formData.apellidos}
              onChange={handleInputChange}
            />

            <TextField
              id="email"
              name="email"
              label="Email"
              variant="filled"
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
            />

            <TextField
              id="clave"
              name="clave"
              label="Clave"
              variant="filled"
              margin="normal"
              type="password"
              value={formData.clave}
              onChange={handleInputChange}
            />

            <TextField
              id="rolId"
              name="rolId"
              label="Rol ID"
              variant="filled"
              margin="normal"
              type="number"
              value={formData.rolId}
              onChange={handleInputChange}
            />

            <TextField
              id="usuario"
              name="usuario"
              label="Usuario"
              variant="filled"
              margin="normal"
              value={formData.usuario}
              onChange={handleInputChange}
            />
          </div>

          <div className='flex gap-10 mt-10'>
            <Button
              variant="contained"
              type="submit"
              color="success"
              size='large'
              endIcon={<SendIcon />}
            >
              Registrar
            </Button>
            <NavLink to="/lista-usuarios">
              <Button
                variant="outlined"
                size='large'
              >
                Ver Usuarios
              </Button>
            </NavLink>
          </div>
        </form>
      </Container>
    </LayoutAdmin>
  );
};

export default RegistrarUsuario;
