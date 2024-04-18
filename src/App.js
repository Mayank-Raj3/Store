import { Nav } from "./component/Nav";
import { Products } from "./component/Products";
import { useState } from "react";
import { Cart } from "./component/cart.js";

function App() {
  const [showcart, setShowcart] = useState(false); // for modal
  function openCart() {
    setShowcart(true);
  }
  function closeCart() {
    setShowcart(false);
  }

  const [cartItems, setCartItems] = useState([]); // for showing the cart

  function handleAddtoCart(id1, name1, url1) {
    const updatedArray = [
      ...cartItems,
      {
        id: id1,
        name: name1,
        url: url1,
        quantity: 1,
      },
    ];
    // console.log(updatedArray); // logging the updated array
    // console.log(cartItems); // logging the state after update

    const idsArray = cartItems.map((item) => item.id);
    if (idsArray.indexOf(id1) === -1) setCartItems(updatedArray);
    // set the state with the updated array if ont present
    else onIncQuantity(id1);
  }

  function onIncQuantity(id) {
    const updatedCart = cartItems.map((it) => {
      if (it.id === id) {
        return {
          ...it,
          quantity: it.quantity + 1,
        };
      }
      return it; // Return the original item if the ID doesn't match
    });

    setCartItems(updatedCart);
  }

  function onDecQuantity(id) {
    const updatedCart = cartItems
      .map((it) => {
        if (it.id === id) {
          return it.quantity - 1 > 0
            ? { ...it, quantity: it.quantity - 1 }
            : null;
        }
        return it;
      })
      .filter(Boolean); // Filter out null values

    setCartItems(updatedCart);
  }
  return (
    <div>
      <Nav openCart={openCart} cartItems={cartItems} />
      <Products onAddtoCart={handleAddtoCart} />
      <Cart
        showcart={showcart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={onIncQuantity}
        onDecQuantity={onDecQuantity}
      />
    </div>
  );
}

export default App;
