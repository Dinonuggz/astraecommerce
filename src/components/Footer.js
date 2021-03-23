import React from 'react'
import logo from "../assets/astralogo.png"

const Footer = () => {
    return (
        <div className="bg-blue-900 text-gray-200">
        <div className="w-10/12 md:w-9/12 mx-auto py-3 flex flex-col md:flex-row items-center justify-around mb-4">
    <ul className="text-center">
        <li className="mt-1 mb-2 sm:mt-2 sm:mb-3 md:mt-4 text-yellow-400"><h3>CONTACT</h3></li>
        <li><p>Astra Watches HQ</p></li>
        <li><p>226 49 Sweden</p></li>
        <li><p>PO-BOX 43322</p></li>
        <li><p>120-280-0000</p></li>
        <li><p>@astra.contact</p></li>
    </ul>
    <ul className="text-center">
        <li className="mt-2 mb-2 sm:mt-2 sm:mb-3 md:mt-4 text-yellow-400"><h3>FAQ</h3></li>
        <li><p>Warranty & Returns </p></li>
        <li><p>Order & Shipping</p></li>
        <li><p>Tracking Orders</p></li>
        <li><p>Servicing</p></li>
        <li><p>Terms & Conditions</p></li>
    </ul>
    <ul className="text-center">
        <li className="mt-2 mb-2 sm:mt-2 sm:mb-3 md:mt-4 text-yellow-400"><h3>PARTNERS</h3></li>
        <li><p>Lorem Ipsum Watches</p></li>
        <li><p>Deltalia Central</p></li>
        <li><p>4848-53 Corp.</p></li>
        <li><p>Skydrive 58, 93117</p></li>
        <li><p>United States of America</p></li>
    </ul>
</div>
<div className="w-10/12 md:w-9/12 mx-auto py-3 flex flex-col md:flex-row items-center justify-between">
    <img className="w-12" src={logo} alt="astra logo"></img>
    <ul className="flex text-xs text-gray-400">
        <li><p>Registered Trademark</p></li>
        <li><p>&copy; Astra Watches 2021</p></li>
    </ul>

</div>   
</div>)
}

export default Footer
