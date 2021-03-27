import React from 'react'
import astratop from "../assets/astratop.png"

const About = () => {
    return (
        <div id="about" className="bg-gray-900 pt-4 sm:pt-8 pb-8">
        <div className="w-10/12 md:w-9/12 mx-auto py-3 flex flex-col md:flex-row items-center">
        <div className="">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 text-yellow-500"> Our designs</h2>
        <hr className="mb-2"/>
        <p className="text-gray-200 mb-4">Our watches go through a lengthy design process before being released. 
Our First generation Astra Genesis watch was designed in many iterations over 5 years to achieve what we believe is watchmaking excellence. Early prototypes where entirely 3D-Printed in up to 4 times the original size to ensure that every component and design decision was carefully orchesterated. </p>
<p className="text-blue-300">Want to learn more and receive exclusive offers tailored to you?</p>
<button className="border px-6 py-2 text-white mt-4 mb-4">Subscribe now</button>
</div>
<img className="md:ml-4 w-12/12 sm:w-11/12 md:w-4/12 py-4" src={astratop} alt=""/>   
        </div>    
        </div>
    )
}

export default About
