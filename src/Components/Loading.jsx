import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { BarLoader } from "react-spinners";

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#f5821f");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: ${color};
  `;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 ">    
      <img className="w-40 animate-pulse" src="https://i.postimg.cc/jjWL24MX/stiker_delta_3.png" alt="Logo" />
      <BarLoader color={color} loading={loading} css={override} />
      <h1 className="text-xl text-center text-[#f5821f] font-normal mt-1 mb-5">Cargando...</h1>
    </div>
  );
};

export default LoadingPage;
