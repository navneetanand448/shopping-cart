import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        {/* It's often good to format the price (e.g., $10.00) */}
        <p className="price">{item.price}</p>

        <div className="quantity-control">
          <button
            /* Improvement: Disable minus button if quantity is 1 to prevent 0 or negative numbers */
            disabled={item.quantity <= 1}
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>

          <span className="quantity">{item.quantity}</span>

          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="remove-item">
        <button
          onClick={() => onRemove(item.id)}
          className="trash-btn"
          aria-label="Remove item"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

