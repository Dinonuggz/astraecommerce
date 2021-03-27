import React, {useState} from 'react'
import {Link} from "react-scroll"
import logo from "../assets/astralogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons" 
import {faBars} from "@fortawesome/free-solid-svg-icons" 

const Nav = ({setShowModal, showModal, cartItems}) => {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <nav className="bg-blue-900 shadow text-white font-display font-normal fixed w-full z-10">
            <div className="w-10/12 md:w-9/12 mx-auto py-3 flex items-center justify-between relative">
                <div className={showLinks ? "absolute right-0 top-20 text-2xl w-full bg-blue-800 flex items-center flex-col" : "hidden sm:block"}>
                <Link className="z-10 relative" to="catalog" smooth={true} duration={1000}><span className={showLinks ? "" : "mr-4 cursor-pointer"}>CATALOG</span></Link>
                <Link className="z-10 relative" to="about" smooth={true} duration={1000}><span className={showLinks ? "" : "cursor-pointer"}>ABOUT</span></Link>
            </div>
            <div className="sm:hidden z-10" onClick={()=>setShowLinks(!showLinks)}>
                <FontAwesomeIcon icon={faBars} />
                </div>
            <div className="w-full flex justify-center absolute z-0">
            <img className="w-24" src={logo} alt="astralogo"/>
            </div> 
       <div className="flex justify-end p-4 items-center">
        <FontAwesomeIcon className={cartItems.length > 0 ? "text-yellow-400 z-40 cursor-pointer" : ""} icon={faShoppingBag} onClick={() => setShowModal(!showModal)} /> 
        <h2 className="pl-2 text-white text-xs font-sans font-light opacity-50">{cartItems.length > 0 ? `( ${cartItems.length} )` :""}</h2>
        </div>
        </div> 
        </nav>
        //w-full flex justify-center absolute z-0
    )
}

export default Nav
