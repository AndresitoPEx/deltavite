import HeaderDelta from "../HeaderDelta";
import Footer from "../Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col mt-36 bg-gray-100 items-center">
            <HeaderDelta />

            {children}

            <Footer />
        </div>
    );
}

export default Layout;