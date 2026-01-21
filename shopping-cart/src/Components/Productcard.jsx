import {FaShoppingCart} from 'react-icons/fa'

 export function Productcard({product,onAddToCart}) {
  return (
   <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>

      {/* The Icon and Text are now INSIDE the button */}
      <button onClick={() => onAddToCart(product)}>
        <FaShoppingCart style={{ marginRight: '8px' }} />
        Add to Cart
      </button>
    </div>
  )
}

export default Productcard
