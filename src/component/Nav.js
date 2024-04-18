import "../styles/header.css";

export function Nav({ openCart, cartItems }) {
  return (
    <div className="header">
      <h1>My Store</h1>
      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart{"-"}
          {cartItems.length}
        </button>
      </div>
    </div>
  );
}
