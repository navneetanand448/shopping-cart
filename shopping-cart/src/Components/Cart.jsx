import "../App.jsx";
import { CartItem } from "./CartItem.jsx";
export default function Cart({ cart, onUpdateQuantity, total, onRemove }) {
  if (cart.length === 0) {
    return <div className="cart empty">Cart is Empty</div>;
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
      <div className="cart-summary">
        <h3 className="cart-total">
          Total: ${typeof total === "string" ? total : total.toFixed(2)}
        </h3>
        <button
          className="checkout-button"
          onClick={() => alert("Proceeding to Checkout!")}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
