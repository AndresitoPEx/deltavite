import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { obtenerClientes } from "../../apis/apiClientes";
import { GetProductos } from "../../apis/apiProductos";
import { obtenerUsuarios } from "../../apis/apiUsuarios";

import LayoutAdmin from "../../Components/LayoutAdmin";
import { Paper, Grid, Typography } from '@mui/material';

const AdminHome = () => {
    console.log("AdminHome");
    const { data: clientes, isLoading: isLoadingClientes } = useQuery(
        ["clientes"],
        obtenerClientes
    );

    const { data: productos, isLoading: isLoadingProductos } = useQuery(
        ["productos"],
        GetProductos
    );

    const { data: usuarios, isLoading: isLoadingUsuarios } = useQuery(
        ["usuarios"],
        obtenerUsuarios
    );

    useEffect(() => {
        // Si necesitas realizar alguna operación cuando los datos están cargados, aquí es el lugar.
    }, [clientes, productos, usuarios]);

    if (isLoadingClientes || isLoadingProductos || isLoadingUsuarios) {
        return <h1>Cargando...</h1>;
    }
    

    return (
        <LayoutAdmin>
            <Typography variant="h3"
                sx={{
                    mb: 4,
                }}
                    
            >
                Bienvenido al panel de administración
            </Typography>
            <Grid container spacing={4}>

                {/* Clientes */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className="p-5">
                        <Typography variant="h6">Total de Clientes</Typography>
                        <Typography variant="h3">{clientes.length}</Typography>
                        {/* Aquí puedes agregar más información relevante acerca de los clientes */}
                    </Paper>
                </Grid>

                {/* Productos */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className="p-5">
                        <Typography variant="h6">Total de Productos</Typography>
                        <Typography variant="h3">{productos.length}</Typography>
                        {/* Aquí puedes agregar más información relevante acerca de los productos */}
                    </Paper>
                </Grid>
            

            </Grid>
        </LayoutAdmin>
    );
}

export default AdminHome;
