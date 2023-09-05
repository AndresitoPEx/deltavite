import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './logo.css'


const LogoContainer = () => {

    const [esVisible, setEsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {

            const isScrolled = window.scrollY > 0
            setEsVisible(!isScrolled)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <div className={`bg-black ${esVisible ? "visible" : "hidden"}`}>
            <div className="bg-[#f5821f] text-center justify-center p-1 ">
                <h4 className="text-black text-opacity-50 font-mono text-sm animate-bounce tracking-wider">¡ENVÍOS GRATIS POR EL MES DE LA POLICÍA!</h4>
            </div>



        </div>
    )
}

export default LogoContainer