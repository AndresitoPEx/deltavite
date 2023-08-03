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
        <div className={`flex justify-center h-20 items-center pt-3 ${esVisible ? "visible" : "hidden"}`}>
            <figure className=" w-1/6">
                <Link to="/">
                    <img className="w-full" src="https://i.postimg.cc/8C7qsb5M/LogoDelta_500px.png" alt="" />
                </Link>
            </figure>
        </div>
    )
}

export default LogoContainer