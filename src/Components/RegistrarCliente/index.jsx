import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { crearCliente } from '../../apis/apiClientes';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';

const RegistrarCliente = () => {
    const mutation = useMutation(crearCliente, {
        onSuccess: () => {
            setSnackbar({ open: true, message: 'Cliente registrado exitosamente', severity: 'success' });
            // Lógica adicional después de registrar el usuario
        },
        onError: (error) => {
            console.error(error);
            setSnackbar({ open: true, message: 'Error al registrar el cliente', severity: 'error' });
        },
    });

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        nombreempresa: '',
        dni: '',
        ruc: '',
        region: '',
        ubicacion: '',
        fecha: new Date().toISOString(),
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleCloseSnackbar = () => {
        setSnackbar({
            ...snackbar,
            open: false,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí va la lógica para validar el formulario
        // Si todo es correcto, llamamos a la mutación.
        mutation.mutate(formData);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Registro de Cliente
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }} >
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="nombre"
                    name="nombre"
                    label="Nombres"
                    variant="outlined"
                    value={formData.nombre}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="apellidos"
                    name="apellidos"
                    label="Apellidos"
                    variant="outlined"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="nombreempresa"
                    name="nombreempresa"
                    label="Nombre de tu empresa"
                    variant="outlined"
                    value={formData.nombreempresa}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="telefono"
                    name="telefono"
                    label="Teléfono de contacto"
                    variant="outlined"
                    value={formData.telefono}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="dni"
                    name="dni"
                    label="DNI"
                    variant="outlined"
                    value={formData.dni}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="ruc"
                    name="ruc"
                    label="RUC"
                    variant="outlined"
                    value={formData.ruc}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="ubicacion"
                    name="ubicacion"
                    label="Dirección de tu empresa"
                    variant="outlined"
                    value={formData.ubicacion}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    color="warning"
                    margin="normal"
                    id="region"
                    name="region"
                    label="Distrito / Provincia / Departamento"
                    variant="outlined"
                    value={formData.region}
                    onChange={handleInputChange}
                />
                <Box mt={2}>
                    <Button fullWidth type="submit" variant="contained" color="warning">
                        Enviar Datos
                    </Button>
                </Box>
            </form>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={snackbar.message}
                action={
                    <Button color="primary" size="small" onClick={handleCloseSnackbar}>
                        Cerrar
                    </Button>
                }
            />
        </Box>
    );
};

export default RegistrarCliente;
