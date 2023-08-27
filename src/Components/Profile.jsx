import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogOut from "./LogOut";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    if (isLoading) {
        return <div>...</div>;
    }

    if (!isAuthenticated || !user) {
        return <></>;
    }

    return (
        <div className="">
            <button className="" onClick={toggleDropdown}>
                <img className="rounded-full h-10 w-10 border-2 hover:border-[#f5821f] transition duration-500 ease-in-out" src={user.picture} alt={user.name} />
            </button>
            {isDropdownOpen && (
                <ul className="absolute w-48 mt-2 py-1 text-black bg-white border border-gray-300 rounded-lg shadow-lg">
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                        <NavLink to="/mi-pedido">Mis Pedidos</NavLink>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                        <LogOut />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Profile;
