import { useState } from "react";
const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  {
    id: 3,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$66.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 4,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$78.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(products);

  // Function to add a product to the cart
  const addToCart = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.slice(1)) * item.quantity;
    }, 0).toFixed(2);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Function to add a new item to the cart
  const addCartItem = (newItem) => {
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center text-center h-full">
      {/* Cart content */}
      {cartItems.map((product) => (
        <div key={product.id} className="mb-8 ">
           <div className="flex justify-center text-center ">
           <div className="w-100 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-100 w-100 object-cover object-center lg:h-full lg:w-full"
              />
            </div>

          <div className="flex flex-col justify-center items-center">
            <h3>
                <a href={product.href}>{product.name}</a>
            </h3> 
            <p className="mt-1 text-sm text-gray-500 ">{product.color}</p>
            <p className="text-gray-500 ">
              Qty{' '}
              <input
                type="number"
                min="1"
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
              />
            </p>
           
          </div>
          <div className="flex flex-col justify-center items-center text-left text-m mt-2 ml-36">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
              
              <p>{product.price}</p>
            </div>
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => removeFromCart(product.id)}
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
