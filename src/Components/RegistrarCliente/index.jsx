import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { crearCliente } from '../../apis/apiClientes';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { BounceLoader } from 'react-spinners';

const RegistrarCliente = () => {
    const navigate = useNavigate();

    const mutation = useMutation(crearCliente, {

        onSuccess: () => {
            Swal.fire({
                icon: 'success',
                title: '¡Gracias por registrarte!',
                text: 'Nos pondremos en contacto contigo lo más pronto posible.',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#f5821f',
            });
            navigate('/home');
        },
        onError: (error) => {
            console.error(error);

        },
    });

    const { isLoading } = mutation;

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

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.nombre.trim()) {
            errors.nombre = "El nombre es requerido";
            isValid = false;
        }

        if (!formData.email.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = "Email inválido";
            isValid = false;
        }

        if (!formData.apellidos.trim()) {
            errors.apellidos = "Los apellidos son requeridos";
            isValid = false;
        }

        if (!formData.telefono.trim()) {
            errors.telefono = "El teléfono es requerido";
            isValid = false;
        }

        if (!formData.nombreempresa.trim()) {
            errors.nombreempresa = "El nombre de la empresa es requerido";
            isValid = false;
        }

        if (!formData.dni.trim()) {
            errors.dni = "El DNI es requerido";
            isValid = false;
        }

        if (!formData.ruc.trim()) {
            errors.ruc = "El RUC es requerido";
            isValid = false;
        }

        if (!formData.region.trim()) {
            errors.region = "La región es requerida";
            isValid = false;
        }

        if (!formData.ubicacion.trim()) {
            errors.ubicacion = "La ubicación es requerida";
            isValid = false;
        }



        setFormErrors(errors);

        return isValid;
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
        if (validateForm()) {
            mutation.mutate(formData);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Registro de Distribuidores
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
                    required
                    error={Boolean(formErrors.nombre)}
                    helperText={formErrors.nombre}
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
                    required
                    error={Boolean(formErrors.apellidos)}
                    helperText={formErrors.apellidos}
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
                    required
                    error={Boolean(formErrors.email)}
                    helperText={formErrors.email}
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                />
                <Box mt={2}>

                    <Button fullWidth type="submit" variant="contained" color="warning">
                        Enviar Datos
                        {isLoading && <BounceLoader
                            size={20}
                            color="#f5821f" />}
                    </Button>
                </Box>
            </form>

        </Box>
    );
};

export default RegistrarCliente;
