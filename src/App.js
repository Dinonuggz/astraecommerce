import NavBar from "./components/Nav"
import Hero from "./components/Hero"
import GiftSection from "./components/GiftSection"
import Catalog from "./components/Catalog"
import data from "./data/data"
import { useState } from "react"
import Modal from "./components/Modal"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [showModal,setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const cartItemsHandler = (item) => {
    const exist = cartItems.find(x => x.id === item.id)
    if(exist) {
     setCartItems(cartItems.map(x => x.id === item.id ? {...exist, qty: exist.qty +1} : x))
    }
    else {
     setCartItems([...cartItems, {...item, qty: 1}])
    }
  }
  const cartRemoveHandler = (item) => {
    const exist = cartItems.find((x) => x.id === item.id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id))
    } else {
      setCartItems(cartItems.map(x => x.id === item.id ? {...exist, qty: exist.qty -1} : x)) 
    }
  }
  const products = data.products
  return (
    <div className="App">
     <NavBar setShowModal = {setShowModal} showModal = {showModal} cartItems={cartItems}/>
     <Modal showModal={showModal} setShowModal = {setShowModal} cartItems={cartItems} cartItemsHandler={cartItemsHandler} cartRemoveHandler={cartRemoveHandler}/>
     <Hero />
     <GiftSection />
     <Catalog products={products} cartItemsHandler = {cartItemsHandler}/>
     <About />
     <Footer />
    </div>
  );
}

export default App;
