import React, { useState } from 'react';
import { Button, TextField, Paper, Grid, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomerDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: 'Jorge',
        lastName: 'Romo',
        identityType: 'DNI',
        identityCode: '46512243',
        cellPhoneNumber: '930172021',
        email: 'andresrt952@gmail.com',
    });
    const [error, setError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar validaciones adicionales si es necesario
        if (formData.identityType === '' || formData.identityCode === '') {
            setError('Completa todos los campos.');
            return;
        }

        setError(null);
        setIsSubmitted(true);
        onSubmit(formData);
    };

    if (isSubmitted) {
        return (
            <Paper className="p-8">
                <Typography variant="h6" className="mb-4 text-center" >¡Gracias por tu información!</Typography>
                
                <Typography variant="body1" className="mb-4 text-center">
                    Hemos recibido tus datos y nos pondremos en contacto contigo lo más pronto posible.
                </Typography>

            </Paper>
        );
    }

    return (
        <Paper className="p-8">
            <Typography variant="h6" className="mb-4">Detalles del Cliente</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Apellido"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Tipo de documento</InputLabel>
                            <Select
                                name="identityType"
                                value={formData.identityType}
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value="DNI">DNI</MenuItem>
                                <MenuItem value="RUC">RUC</MenuItem>
                                <MenuItem value="CE">Carnet de Extranjería</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Número de documento"
                            name="identityCode"
                            value={formData.identityCode}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Número de celular"
                            name="cellPhoneNumber"
                            value={formData.cellPhoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField  
                            fullWidth
                            label="Correo electrónico"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    {error && (
                        <Grid item xs={12}>
                            <Typography color="error">{error}</Typography>
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default CustomerDetailsForm;
