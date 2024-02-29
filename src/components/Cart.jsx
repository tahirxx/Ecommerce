
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
 

return (
    <div className="bg-white">
    <div className="grid grid-cols-2 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
     
        
      <div className="mt-6 w-80  gap-x-6 gap-y-10 ">
        <h1 className='text-3xl'>Shopping Cart</h1>
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-100 w-100 object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900 bg-orange-200 rounded-md w-20 text-center ">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24">
  {products.map((product) => (
    <div key={product.id} className="mb-8">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href={product.href}>{product.name}</a>
          </h3>
          <p>{product.price}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <p className="text-gray-500">Qty {product.quantity}</p>
        <div>
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  ))}
  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>$262.00</p> {/* Replace with actual subtotal */}
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
        >
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  </div>
</div>
    </div>
  </div>
)
        }



