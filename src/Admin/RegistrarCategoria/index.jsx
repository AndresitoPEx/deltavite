
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Swal from 'sweetalert2';


import LayoutAdmin from "../../Components/LayoutAdmin"


const RegistrarCategoria = () => {
    return (
        <LayoutAdmin>

            <div>
                <h1>Registrar Categoria</h1>
            </div>
        </LayoutAdmin>
    )
}

export default RegistrarCategoria