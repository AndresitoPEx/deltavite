const Layout = ({ children }) => {
    return (
        <div className="flex flex-col mt-20 bg-gray-100 items-center">
            {children}
        </div>
    );
}

export default Layout;