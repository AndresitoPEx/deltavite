import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { obtenerClientes, eliminarCliente } from "../../apis/apiClientes";
import LayoutAdmin from "../../Components/LayoutAdmin";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Swal from 'sweetalert2';

const VerClientes = () => {

    const queryClient = useQueryClient();


    // Obtener lista de usuarios
    const { data: clientes, isLoading, error, isError } = useQuery(
        ["clientes"],
        obtenerClientes
    );

    // Eliminar usuario
    const deleteMutation = useMutation(eliminarCliente, {
        onSuccess: () => {
            Swal.fire({
                icon: "success",
                title: "Cliente eliminado",
                showConfirmButton: false,
                timer: 2500,
            });
            queryClient.invalidateQueries("clientes");
        },
    });

    return (
        <LayoutAdmin>
            <Container maxWidth="xl">
                <div className="text-left mt-5 mb-5 p-5 bg-light-gray rounded-3 shadow-lg border border-gray-300 border-solid border-opacity-50">
                    <h2 className="text-3xl font-bold text-gray-700">Lista de Clientes Mayoristas</h2>
                </div>
            
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className="shadow-lg">
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellidos</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Número</TableCell>
                                <TableCell>Empresa</TableCell>
                                <TableCell>DNI</TableCell>
                                <TableCell>RUC</TableCell>
                                <TableCell>Dirección</TableCell>
                                <TableCell>Ubicación</TableCell>

                                <TableCell>{' '}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {clientes?.map((cliente) => (
                                <TableRow key={cliente.id}>
                                    <TableCell>{cliente.nombre}</TableCell>
                                    <TableCell>{cliente.apellidos}</TableCell>
                                    <TableCell>{cliente.email}</TableCell>
                                    <TableCell>{cliente.telefono}</TableCell>
                                    <TableCell>{cliente.nombreempresa}</TableCell>
                                    <TableCell>{cliente.dni}</TableCell>
                                    <TableCell>{cliente.ruc}</TableCell>
                                    <TableCell>{cliente.region}</TableCell>
                                    <TableCell>{cliente.ubicacion}</TableCell>
                                    
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => deleteMutation.mutate(cliente.id)}
                                        >
                                            <DeleteIcon />
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
}

export default VerClientes
