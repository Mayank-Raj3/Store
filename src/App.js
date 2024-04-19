import { Nav } from "./component/Nav";
import { Products } from "./component/Products";
import { useState } from "react";
import { Cart } from "./component/cart.js";
import AddProduct from "./component/addProducts.js";
import data from "../src/utils/data.json";
import def from "../src/utils/default.json";
function App() {
  const [showcart, setShowcart] = useState(false); // for modal
  const [productData, setproductData] = useState(data); // for showing the cart

  function openCart() {
    setShowcart(true);
  }
  function closeCart() {
    setShowcart(false);
  }

  const [showAddtoCart, setShowAddtoCart] = useState(false);
  function openAddtoCart() {
    setShowAddtoCart(true);
  }
  function closeAddtoCart() {
    setShowAddtoCart(false);
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

  function addproductMain(newProd) {
    // console.log(def.url_id);

    const updatedProduct = [
      ...productData,
      {
        id: productData.length + 1,
        name: newProd,
        url_id: def.url_id,
        quantity: 1,
      },
    ];
    // console.log(updatedProduct);
    setproductData(updatedProduct);
  }
  return (
    <div>
      <Nav
        openCart={openCart}
        cartItems={cartItems}
        openAddtoCart={openAddtoCart}
      />
      <Products onAddtoCart={handleAddtoCart} productData={productData} />
      <Cart
        showcart={showcart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={onIncQuantity}
        onDecQuantity={onDecQuantity}
        setCartItems={setCartItems}
      />
      <AddProduct
        showAddtoCart={showAddtoCart}
        openAddtoCart={openAddtoCart}
        closeAddtoCart={closeAddtoCart}
        addproductMain={addproductMain}
      />
    </div>
  );
}

export default App;
