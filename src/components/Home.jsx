import Hero from './Hero'
import Product from './Product'
import Carousel from './Carousel'
import SellingProducts from './SellingProducts'
import Discount from './Discount'
import ProductGrid from './ProductGrid'
import Footer from './Footer'
import PropTypes from 'prop-types';
import Cart from './Cart'


export default function Home({addToCart, setCartItems, cartItems}) {
 
   
    return (
    <div>
      <Hero />
      <Product addToCart={addToCart} setCartItems={setCartItems} cartItems={cartItems}/>
      <Cart setCartItems={setCartItems} cartItems={cartItems}/>
      <Carousel />
      <SellingProducts />
      <Discount />
      <ProductGrid />
      <Footer /> 
    </div>
  )
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired, // Assuming price is a number
      quantity: PropTypes.number.isRequired,
      // Add more specific PropTypes for other properties if needed
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired, // Assuming setCartItems is a function
};

