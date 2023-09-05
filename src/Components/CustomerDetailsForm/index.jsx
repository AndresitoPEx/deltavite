import { useState } from 'react';
import { Button, TextField, Grid, Typography, Select, MenuItem, FormControl, InputLabel, Paper, Divider } from '@mui/material';
    


const CustomerDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        identityType: '',
        identityCode: '',
        cellPhoneNumber: '',
        email: '',
        address: '',
        district: '',
        city: '',
        phoneNumber: '',
        cartItemInfo: [],
    });
    const [error, setError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validaciones
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
        <div className="">
            <Typography variant="h5" className="text-gray-800 pb-8 text-center font-bold">Datos del cliente</Typography>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>
                            Información Personal
                        </Typography>
                        <Divider />
                    </Grid>
                    {/* Información Personal */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
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
                            color='warning'
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
                                color='warning'
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
                            color='warning'
                            fullWidth
                            label="Número de documento"
                            name="identityCode"
                            value={formData.identityCode}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>
                            Información de Contacto
                        </Typography>
                        <Divider />
                    </Grid>
                    {/* Información de Contacto */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
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
                            color='warning'
                            fullWidth
                            label="Correo electrónico"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="subtitle1" gutterBottom>
                            Información de Envío
                        </Typography>
                        <Divider />
                    </Grid>
                    {/* Información de Envío */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
                            fullWidth
                            label="Dirección"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
                            fullWidth
                            label="Distrito"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
                            fullWidth
                            label="Ciudad"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            color='warning'
                            fullWidth
                            label="Número de teléfono de referencia"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    {error && (
                        <Grid item xs={12}>
                            <Typography color="error">{error}</Typography>
                        </Grid>
                    )}
                    <Grid item 
                        xs={12}
                        className="flex justify-center"


                    >
                        <Button size='large' type="submit" variant="contained" color="warning" className='
                        w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2' >
                            Continuar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );

};

export default CustomerDetailsForm;
