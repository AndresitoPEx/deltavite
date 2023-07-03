import './nav-admin.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarAdmin = () => {
    return (
        <nav className="nav-admin w-full flex justify-between ">
            <figure className='w-1/6'>
                <img src="./imgs/logo.png" alt="" />
            </figure>
            <div className='flex items-center gap-5'>
                <p className='text-md font-thin'>andresrt952@gmail.com</p>
                <AccountCircleIcon />
            </div>
        </nav>
    )
}

export default NavbarAdmin