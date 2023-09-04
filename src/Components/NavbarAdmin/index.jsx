import './nav-admin.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarAdmin = () => {
    return (
        <nav className="nav-admin w-full flex justify-between ">
            <figure className='w-1/6'>
                <img src="https://i.postimg.cc/K802W0xt/DELTA_C.png" alt="" style={{
                    filter: 'invert(90%)',

                }}/>
            </figure>
            <div className='flex items-center gap-5 text-gray-100'>
                <p className='text-md font-thin'>andresrt952@gmail.com</p>
                <AccountCircleIcon />
            </div>
        </nav>
    )
}

export default NavbarAdmin