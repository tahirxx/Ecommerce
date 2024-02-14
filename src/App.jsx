import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'
import Carousel from './components/Carousel'
import SellingProducts from './components/SellingProducts'
import { Disclosure } from '@headlessui/react'
import Discount from './components/Discount'

function App() {
    return (
    
      <div>
        <Navbar />
        <Hero />
        <Product />
        <Carousel />
        <SellingProducts />
        <Discount />
      </div>
  )
}

export default App
