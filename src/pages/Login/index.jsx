import { useAuth } from '../../Context/authContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, Paper, Typography } from '@mui/material';

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            console.log('Login correcto');
            navigate('/admin');

        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="flex-col bg-cover bg-center h-screen w-full flex justify-center items-center"
            style={{ backgroundImage: `url('https://i.postimg.cc/6qRfMXRV/620953.jpg')` }}>
            <img src="https://i.postimg.cc/K802W0xt/DELTA_C.png" alt="logo"
                className='xl:w-1/5 lg:w-1/4 p-5 sm:w-1/3 xs:w-1/2 w-2/3 mx-auto'

                style={{
                    filter: 'invert(90%)',

                }}
            />
            <Container
                component={Paper}
                elevation={3}
                className="py-10 px-6"
                maxWidth="xs"
                style={
                    {
                        background: 'rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(5px)'

                    }
                }
            >
                <Typography variant="h5" className="mb-8 text-center">

                    Iniciar Sesión

                </Typography>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <TextField
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        color='warning'
                    />
                    <TextField
                        label="Contraseña"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        color='warning'
                    />
                    <Button type='submit' variant="contained" color="warning">
                        Ingresar
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Login;
