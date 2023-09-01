import './sidebar.css'
import { NavLink } from 'react-router-dom';


//materialUI
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideBar = () => {
    return (
        <div className="sideBar">
            <MenuList>
                <MenuItem>
                    <NavLink to='/admin' className="flex">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Home</Typography>
                        </ListItemText>

                    </NavLink>
                </MenuItem>

                <Divider />

                <MenuItem>
                    <NavLink to="/lista-clientes" className="flex">
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Clientes</Typography>
                        </ListItemText>
                    </NavLink>
                </MenuItem>


                <Divider />

                <MenuItem>
                    <NavLink to='/lista-productos' className="flex">
                        <ListItemIcon>
                            <StoreIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Tienda</Typography>
                        </ListItemText>
                    </NavLink>
                </MenuItem>


                <Divider />

                <MenuItem>
                    <NavLink to="/lista-usuarios" className="flex">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Usuarios</Typography>
                        </ListItemText>
                    </NavLink>
                </MenuItem>

                {/* <Divider />

                <MenuItem>
                    <NavLink className="flex">
                        <ListItemIcon>
                            <SummarizeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Reportes</Typography>
                        </ListItemText>
                    </NavLink>
                </MenuItem>

                <Divider />

                <MenuItem>
                    <NavLink className="flex"   >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="inherit">Configuración</Typography>
                        </ListItemText>
                    </NavLink>
                </MenuItem> */}

                <Divider />

            </MenuList>


        </div>
    )
}

export default SideBar