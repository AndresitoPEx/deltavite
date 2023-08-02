import { useState } from 'react';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { crearCliente } from "../../apis/apiClientes";

// Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


const RegistrarCliente = () => {
    const mutation = useMutation(crearCliente, {
        onSuccess: () => {
            alert("Cliente registrado exitosamente");
            // Lógica adicional después de registrar el usuario
        },
        onError: (error) => {
            console.error(error);
            alert("Error al registrar el cliente");
        },
    });

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        clave: "",
    });

    const [emailError, setEmailError] = useState(false);
    const [nombreError, setNombreError] = useState(false);
    const [apellidosError, setApellidosError] = useState(false);
    const [claveError, setClaveError] = useState(false);

    const validarEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailPattern.test(email);
    };

    const validarFormulario = () => {
        const { nombre, apellidos, email, clave } = formData;

        let hayErrores = false;

        if (!nombre || nombre.length < 2) {
            hayErrores = true;
            setNombreError(true);
        } else {
            setNombreError(false);
        }

        if (!apellidos || apellidos.length < 2) {
            hayErrores = true;
            setApellidosError(true);
        } else {
            setApellidosError(false);
        }

        if (!email) {
            hayErrores = true;
            setEmailError(true);
        } else {
            setEmailError(validarEmail(email));
        }

        if (!clave || clave.length < 6) {
            hayErrores = true;
            setClaveError(true);
        } else {
            setClaveError(false); // Restablecer el estado de claveError si es válido
        }

        return !hayErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            mutation.mutate(formData);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Validar el campo de contraseña al cambiar su valor
        if (name === "email") {
            setEmailError(validarEmail(value));
        } else if (name === "clave") {
            setClaveError(value.length < 6);
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            clave: value, // Actualizar el valor del campo de contraseña en el estado
        }));

        setClaveError(value.length < 6); // Validar el campo de contraseña y actualizar el estado claveError
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <p className="text-sm font-semibold text-red-400">Datos Obligatorios *</p>

                <div className="flex flex-col">
                    <TextField
                        id="nombre"
                        name="nombre"
                        label="Nombres"
                        variant="outlined"
                        required
                        error={nombreError}
                        helperText={nombreError ? "Por favor, ingrese un nombre." : ""}
                        onChange={handleInputChange}
                        margin="normal"
                        color="warning"
                    />
                    <TextField
                        id="apellidos"
                        name="apellidos"
                        label="Apellidos"
                        variant="outlined"
                        required
                        error={apellidosError}
                        helperText={apellidosError ? "Por favor, ingrese apellidos." : ""}
                        onChange={handleInputChange}
                        margin="normal"
                        color="warning"
                    />
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        required
                        error={emailError}
                        helperText={emailError ? "Por favor, ingrese un correo electrónico válido." : ""}
                        onChange={handleInputChange}
                        margin="normal"
                        color="warning"
                    />
                    <FormControl margin="normal" color="warning" variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            error={claveError}
                            helperText={claveError ? "Por favor, ingrese una contraseña almenos de 8 caracteres" : ""}
                            onChange={handlePasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </div>
                <div className="mt-5 flex justify-center">
                    <Button
                        className="w-1/2"
                        type="submit"
                        variant="contained"
                        color="warning"
                    // disabled={emailError || nombreError || apellidosError} // Desactivar el botón si hay errores en email, nombre o apellidos
                    >
                        Registrarse
                    </Button>
                </div>
            </form>

        </section>
    )
};

export default RegistrarCliente;
