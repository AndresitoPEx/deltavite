import React, { useState } from "react";
import Layout from "../../Components/Layout";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
    };

    return (
        <Layout>
            <div className="container mx-auto my-8  ">
                <h1 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-semibold mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-lg font-semibold mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <label htmlFor="remember" className="text-lg font-semibold">
                            <input type="checkbox" id="remember" className="mr-2" />
                            Recordar sesión
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="bg-black hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
