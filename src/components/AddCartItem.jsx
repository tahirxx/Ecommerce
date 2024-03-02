
export default function AddCartItem({ product, onAddToCart }) {
  return (
    <div>
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.color}</p>
      <p className="text-gray-700">{product.price}</p>
      <button
        className="block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}