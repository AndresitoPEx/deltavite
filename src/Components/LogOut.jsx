import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {

    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar sesión
        </button>
    );
}

export default LogOut;