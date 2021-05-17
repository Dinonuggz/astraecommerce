import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons" 
import {faMinusSquare} from "@fortawesome/free-solid-svg-icons" 
import {faCcVisa} from "@fortawesome/free-brands-svg-icons" 
import {faApplePay} from "@fortawesome/free-brands-svg-icons" 
import {faGooglePay} from "@fortawesome/free-brands-svg-icons" 

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity:0}
}
const modal = {
    hidden: {
        y:"-100vh",
        opacity:0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transitiion: { delay:0.5 }
    }
}
const Modal = ({ showModal, cartItems, cartItemsHandler, cartRemoveHandler, checkOutHandler,checkout }) => {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0 )
    const shippingPrice = itemsPrice > 20000 ? 0: 150
    const totalPrice = itemsPrice + shippingPrice

    return (
        <AnimatePresence exitBeforeEnter>
         {showModal && (
            <motion.div className="fixed top:0 left:0 w-full h-full bg-gray-900 z-10 bg-opacity-70"
             variants={backdrop}
             initial="hidden"
             animate="visible"
             exit="hidden">
            <motion.div className="bg-white text-center w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto rounded shadow"
            variants={modal}>
            <h2 className="text-xl lg:text-2xl text-blue-900 mb-2 pt-2">Cart</h2>
            <hr className="mb-2 mx-4"/>
            {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center mb-4"> 
            <div className="flex">
            <p className="text-black font-bold pr-2">{cartItems.length > 0 ? item.name : "Cart is empty"}</p>
            <p className="text-light">{item.qty} x {item.price.toFixed(2)} SEK</p>
            </div>
            <div className="flex"> <button className="text-blue-900 text-2xl py-1 mx-2 text-white rounded text-center mt-2" onClick={()=>cartItemsHandler(item)}><FontAwesomeIcon icon={faPlusSquare} /></button>
            <button className="text-blue-900 text-2xl py-1 text-white mx-2 rounded text-center mt-2" onClick={()=>cartRemoveHandler(item)}><FontAwesomeIcon icon={faMinusSquare} /></button></div>
             </div>
              

            ) )}
            <hr className="mb-2 mx-4"/>
            <p className="text-xs opacity-60">Products {itemsPrice.toFixed(2)} SEK</p>
            <p className="text-xs opacity-60">Shipping {shippingPrice.toFixed(2)} SEK</p>
            <p className="font-bold">Total {totalPrice.toFixed(2)} SEK</p>
            <button className="bg-blue-800 px-4 py-2 text-white mt-4 mb-2 inline w-11/12 md:w-8/12 lg:w-7/12" onClick={()=>checkOutHandler()}>{checkout}</button>
            <div className="text-4xl mb-4">
            <FontAwesomeIcon className="m-2" icon={faCcVisa} />
            <FontAwesomeIcon className="m-2" icon={faApplePay} />
            <FontAwesomeIcon className="m-2 " icon={faGooglePay} />
            </div>
            </motion.div>
             </motion.div>)}
        </AnimatePresence>
    )
}

export default Modal
