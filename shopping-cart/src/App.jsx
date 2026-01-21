import "./App.css";
import Cart from "./Components/Cart";
import { products } from "./data/product";
import Productcard from "./Components/Productcard";
import { useCart } from "./Hooks/usecart.js";
function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <>
      <div className="app">
        <header>
          <h1>Shopping Cart</h1>
        </header>
        <main className="products">
          <section>
            {products.map((product) => (
              <Productcard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </section>
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            total={total}
          />
        </main>
      </div>
    </>
  );
}

export default App;
