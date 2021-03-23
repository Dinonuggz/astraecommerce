import React from 'react'
import heroimg from "../assets/hero.png"
import {Link} from "react-scroll"

const Hero = () => {
    return (
        <div className="flex items-center justify-center flex-col font-display">
        <h1 className="font-display text-yellow-400 text-3xl sm:text-4xl md:text-6xl lg:text-8xl mt-32 sm-mt-36 md:mt-40 lg:mt-44 xl:mt-46" >DISCOVER GENESIS</h1>
        <Link to="catalog" smooth={true} duration={1000} className="cursor-pointer px-4 py-3 mt-4 lg:px-20 lg:py-4 bg-blue-900 uppercase text-gray-200 lg:mt-8 hover:bg-blue-700">Explore the collection</Link>
        <img className=" sm:w-10/12 md:w-8/12 lg:w-6/12" src={heroimg} alt=""/>    
        </div>
    )
}

export default Hero
