import React from "react";
import "../styles/cart.css";
import Modal from "./Modal";

function CartItems({ id, name, url, qty, onIncQuantity, onDecQuantity }) {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={url} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty:{qty}</div>
          <div>
            <button
              className="yellow-button qty-button qty-plus-button"
              onClick={() => onIncQuantity(id)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="yellow-button qty-button"
              onClick={() => onDecQuantity(id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cart({
  showcart,
  closeCart,
  cartItems,
  onIncQuantity,
  onDecQuantity,
}) {
  return (
    <Modal show={showcart} onClose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItems
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              qty={item.quantity}
              onIncQuantity={onIncQuantity}
              onDecQuantity={onDecQuantity}
            />
          ))
        ) : (
          <p>Cart is empty :)</p>
        )}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
          {cartItems.length > 0 && (
            <button className="yellow-button" onClick={closeCart}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
