import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import Carousel from './components/Carousel'
import SellingProducts from './components/SellingProducts'
import Discount from './components/Discount'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer'
import LoginRegisterPopup from './components/LoginRegisterPopup.jsx'

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

    return (
    
      <div>
        <Navbar />
        <Hero />
        <Product />
        <Carousel />
        <SellingProducts />
        <Discount />
        <ProductGrid /> 
        <Footer />
        {showPopup && <LoginRegisterPopup onClose={togglePopup} />}
      </div>
  )
}
