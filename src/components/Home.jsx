import Hero from './Hero'
import Product from './Product'
import Carousel from './Carousel'
import SellingProducts from './SellingProducts'
import Discount from './Discount'
import ProductGrid from './ProductGrid.jsx'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <Carousel />
      <SellingProducts />
      <Discount />
      <ProductGrid />
      <Footer /> 
    </div>
  )
}
