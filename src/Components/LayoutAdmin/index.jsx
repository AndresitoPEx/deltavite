import './layout-admin.css'
import Container from '@mui/material/Container';


//Componentes
import SideBar from '../SideBar'
import NavbarAdmin from '../NavbarAdmin'


const LayoutAdmin = ({ children }) => {
    return (
        <>
            <NavbarAdmin />
            <SideBar />
            <div className='layout-admin'>
                <Container>
                    <div className="flex flex-col items-center">
                        {children}
                    </div>
                </Container>

            </div>
        </>
    );
}

export default LayoutAdmin;