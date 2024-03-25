
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

import KidsClothes from './components/WomenClothes.jsx'
import MenClothes from './components/MenClothes.jsx'
import WomenClothes from './components/WomenClothes.jsx'

import { useState } from "react";
import Cart from './components/Cart.jsx';
import Product from './pages/Product.jsx'


function Men() {
  return (
    <div>
      <h1>Men Section</h1>
      <MenClothes />
    </div>
  );
}

function Women() {
  return (
  <div>
      <h1>Women Section</h1>
      <WomenClothes />
  </div>
  );
}

function Kids() {
  return (
  <div>
      <h1>Kids Section</h1>
      <KidsClothes />
  </div>
  );
}

export default function App() {
 
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product) => {

      console.log(product)
    
    const productIndex = cartItems.findIndex(item => item.id === product.id);
     
    if (productIndex !== -1) {
    
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
     
      setCartItems([...cartItems, product]);
     console.log(cartItems)
    }

 
  }
    return (
    <Router>
      <div>
        <Navbar size={cartItems.length} />
          <Routes>
            <Route path="/" element={<Product addToCart={addToCart} setCartItems={setCartItems} cartItems={cartItems} />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}/> 
          </Routes>
        
      </div>
      </Router>
  )
}


