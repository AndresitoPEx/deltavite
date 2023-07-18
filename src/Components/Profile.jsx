import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>...</div>;
    }

    if (!isAuthenticated || !user) {
        return <></>;
    }

    console.log(user);

    return (
        <div>
            <h3 className="text-[#f5821f] mt-1 text-lg ">
                {user.email}
            </h3>
        </div>
    );
};


export default Profile;
