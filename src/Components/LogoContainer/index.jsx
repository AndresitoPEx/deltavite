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
            <figure className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7 ">
                <Link to="/">
                    <img className="w-full" src="https://i.postimg.cc/8C7qsb5M/LogoDelta_500px.png" alt="" />
                </Link>
            </figure>
        </div>
    )
}

export default LogoContainer