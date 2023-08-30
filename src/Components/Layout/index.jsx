import HeaderDelta from "../HeaderDelta";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col mt-36 bg-gray-200 items-center h-screen">
            <HeaderDelta />

            {children}

            <Footer />
        </div>
    );
}

export default Layout;