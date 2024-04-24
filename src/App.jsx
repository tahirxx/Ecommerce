
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

import KidsClothes from './components/WomenClothes.jsx'
import MenClothes from './components/MenClothes.jsx'
import WomenClothes from './components/WomenClothes.jsx'

import { useState, useEffect } from "react";
import CartPage from './pages/CartPage.jsx';
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
 
  const [warning, setWarning] = useState(false);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []
  );

  // Update localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const productIndex = cartItems.findIndex(item => item.id === product.id);
         if (productIndex !== -1) {
          // If product already exists in cart, set warning
      setWarning(true);
      // Clear warning after 3 seconds
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
     
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
     console.log(cartItems);
    
    }

    
  }
    return (
    <Router>
      <div>
        <Navbar size={[cartItems.length]} />
          <Routes>
            <Route path="/" element={<Product addToCart={addToCart} setCartItems={setCartItems} cartItems={cartItems} />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage setCartItems={setCartItems} cartItems={cartItems} />}/> 
           
          </Routes>
         {
              warning && <div className='warning'>Item is already added to your cart</div>
            }
      </div>
      </Router>
  )
}


