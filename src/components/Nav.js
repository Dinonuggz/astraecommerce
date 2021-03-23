import React, {useState} from 'react'
import logo from "../assets/astralogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons" 
import {faBars} from "@fortawesome/free-solid-svg-icons" 

const Nav = ({setShowModal, showModal, cartItems}) => {
    const [showLinks, setShowLinks] = useState(false)
    
    return (
        <nav className="bg-blue-900 shadow text-white font-display font-normal fixed w-full">
            <div className="w-10/12 md:w-9/12 mx-auto py-3 flex items-center justify-between relative">
                <div className={showLinks ? "absolute left-0 top-20 text-2xl h-auto w-full bg-blue-800 max-h-80 flex items-center flex-col top-10" : "hidden sm:block"}>
                <span className={showLinks ? "py-2 px-10 mb-4 text-center mt-4" : "mr-4"}>CATALOG</span>
                <span className={showLinks ? "py-2 px-10 mb-4 text-center mt-4" : ""}>ABOUT</span>
            </div>
            <div className="sm:hidden z-10" onClick={()=>setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            <div className="w-full flex justify-center absolute z-0">
            <img className="w-16" src={logo} alt="astralogo"/>
            </div> 
       <div className="flex justify-end p-4 items-center">
        <FontAwesomeIcon className={cartItems.length > 0 ? "text-green-600 z-40 cursor-pointer" : ""} icon={faShoppingBag} onClick={() => setShowModal(!showModal)} /> 
        <h2 className="pl-2 text-green-600 font-sans font-bold">{cartItems.length}</h2>
        </div>
        </div> 
        </nav>
    )
}

export default Nav
