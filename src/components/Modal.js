import React from 'react'
import {motion, AnimatePresence} from "framer-motion"

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
const Modal = ({ showModal, setShowModal, cartItems, cartItemsHandler, cartRemoveHandler }) => {
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
            <motion.div className="bg-white text-center w-10/12 sm:w-8/12 md:w-4/12 mx-auto rounded shadow"
            variants={modal}>
            <h2 className="text-xl lg:text-2xl text-blue-900 mb-2 pt-2">Cart</h2>
            <hr className="mb-2 mx-4"/>
            {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center mb-4"> 
            <p className="text-black font-bold pr-2">{item.name}</p>
            <p className="opacity-50">{item.qty} x ${item.price.toFixed(2)} SEK</p>
            <p className="bg-blue-300 inline px-2 py-1 text-xs">Quantity: {item.qty}</p>
            <div> <button className="bg-blue-500 px-4 py-1 mx-2 text-white rounded text-center mt-2" onClick={()=>cartItemsHandler(item)}>+</button>
            <button className="bg-red-500 px-4 py-1 text-white mx-2 rounded text-center mt-2" onClick={()=>cartRemoveHandler(item)}>-</button></div>
             </div>
              

            ) )}
            <hr className="mb-2 mx-4"/>
            <p className="text-xs">Products {itemsPrice.toFixed(2)}</p>
            <p className="text-xs">Shipping {shippingPrice.toFixed(2)}</p>
            <p className="font-bold">Total {totalPrice.toFixed(2)}</p>
            <button className="bg-blue-800 px-4 py-2 text-white mt-4 mb-2" onClick={()=>setShowModal(!showModal)}>Check Out</button>
            </motion.div>
             </motion.div>)}
        </AnimatePresence>
    )
}

export default Modal
