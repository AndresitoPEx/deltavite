import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { obtenerUsuarios, eliminarUsuario } from "../../apis/apiUsuarios";
import LayoutAdmin from "../../Components/LayoutAdmin";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const VerUsuarios = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Obtener lista de usuarios
  const { data: usuarios, isLoading, error, isError } = useQuery(
    ["usuarios"],
    obtenerUsuarios
  );

  // Eliminar usuario
  const deleteMutation = useMutation(eliminarUsuario, {
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado",
        showConfirmButton: false,
        timer: 2500,
      });
      queryClient.invalidateQueries("usuarios");
    },
  });

  useEffect(() => {
    // Lógica adicional al cargar el componente
  }, []);

  const handleCrearUsuario = () => {
    // Lógica para redireccionar al formulario de registro de usuario
    navigate("/registrar-usuario");
  };


  if (isLoading) return <h1>Cargando...</h1>;
  if (isError) return <h1>Error al obtener los usuarios: {error.message}</h1>;

  return (
    <LayoutAdmin>
      <Container maxWidth="xl">
        <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
          <h2 className="text-3xl font-bold text-gray-700">Lista de Usuarios</h2>
        </div>
        <div className="mb-5">
          <Button variant="contained" onClick={handleCrearUsuario}>
            Registrar Usuario
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="shadow-lg">
                <TableCell>Usuario</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell>{' '}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell>{usuario.usuario}</TableCell>
                  <TableCell>{usuario.nombre}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.rol}</TableCell>
                  
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        deleteMutation.mutate(usuario.id);
                      }}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </LayoutAdmin>
  );
};

export default VerUsuarios;
