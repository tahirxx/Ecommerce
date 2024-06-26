import PropTypes from 'prop-types';

export default function Cart({ cartItems, setCartItems }) {
 

  // Function to remove a item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Function to update the quantity of a item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0).toFixed(2);
  };
  

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

 if (cartItems.length === 0) {
    return  <p className="text-blue-700 text-2xl text-center">Your cart is empty.</p>
      }

  return (


    <div className="bg-white flex flex-col justify-center items-center text-center h-full">
     
      {/* Cart content */}
      {cartItems.map((item) => (
        <div key={item.id} className="mb-8 ">
           <div className="flex justify-center text-center ">
           <div className="w-100 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className=" w-100 object-cover object-center lg:h-full lg:w-full"
              />
            </div>

          <div className="flex flex-col justify-center items-center">
            <h3>
                <a href={item.href}>{item.name}</a>
            </h3> 
            <p className="mt-1 text-sm text-gray-500 ">{item.color}</p>
            <p className="text-gray-500 ">
              Qty{' '}
              <input
                type="number"
                min="1"
                value={item.quantity || 1} // Ensure a default value of 1 if quantity is null or undefined
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </p>
           
          </div>
          <div className="flex flex-col justify-center items-center text-left text-m mt-2 ml-36">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
              
              <p>${item.price}</p>
            </div>
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              
            </div>
          </div>
        </div></div>
      ))}
      <div className="border-t w-1/2 border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${calculateTotalPrice()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={clearCart}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    
    </div>
  );
}

Cart.propTypes = {
 
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

 
