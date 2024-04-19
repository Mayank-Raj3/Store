import "../styles/header.css";

export function Nav({ openCart, cartItems, openAddtoCart }) {
  return (
    <div className="header">
      <h1>My Store</h1>
      <div>
        <button
          className="yellow-button"
          onClick={openAddtoCart}
          style={{ marginRight: "20px" }}
        >
          Add Product
        </button>

        <button className="yellow-button" onClick={openCart}>
          Cart{"-"}
          {cartItems.length}
        </button>
      </div>
    </div>
  );
}
