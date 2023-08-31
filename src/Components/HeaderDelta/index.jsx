import LogoContainer from "../LogoContainer"
import Navbar from "../NavBar"
import { Divider } from "@mui/material"
import { Link } from "react-router-dom"

const HeaderDelta = () => {



    return (
        <div className="w-full fixed z-10 top-0 bg-black pt-2">
            <LogoContainer />
            <div className="flex justify-center h-20 items-center my-2">

                <figure className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 2xl:w-1/7 ">
                    <Link to="/">
                        <img className="w-full" src="https://i.postimg.cc/8C7qsb5M/LogoDelta_500px.png" alt="" />
                    </Link>
                </figure>

            </div>

            <Divider
                className="bg-[#f5f5f5e0]"
        
            />
            <Navbar />
        </div>
    )
}

export default HeaderDelta