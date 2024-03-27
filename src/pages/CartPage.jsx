import Cart from '../components/Cart.jsx';
import PropTypes from 'prop-types';

export default function CartPage({cartItems, setCartItems}) {
  return (
    <div>
      <h1>Cart Page to Display Cart Items</h1>
      <Cart setCartItems={setCartItems} cartItems={cartItems} />
      
    </div>
  )
}

CartPage.propTypes = {
    
    cartItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        // Add more specific PropTypes for other properties if needed
      })
    ),
    setCartItems: PropTypes.func, // Assuming setCartItems is a function
  };
  