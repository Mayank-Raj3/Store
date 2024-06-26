import React, { useEffect } from "react";
// import data from "../utils/data.json";
import def from "../utils/default.json";
import { useState } from "react";
import Appcontext from "./app-context";

function AppcontextProvider({ children }) {
  const [showcart, setShowcart] = useState(false); // for showing cart
  const [productData, setproductData] = useState({}); // static product data
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    async function setData() {
      // https://store-dad40-default-rtdb.firebaseio.com/products
      try {
        setTimeout(async () => {
          const res = await fetch(
            "https://store-dad40-default-rtdb.firebaseio.com/products.json"
          );
          const data = await res.json();
          // console.log(data);
          setLoding(true);
          setproductData(data);
        }, 1000);
      } catch (error) {
        throw error;
      }
    }
    setData();
  }, []);

  /*
  for updateing in backend

  const sendProductData = async (product) => {
    try {
      await fetch(
        "https://store-dad40-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };


  */

  // functions to open and close carts
  function openCart() {
    setShowcart(true);
  }
  function closeCart() {
    setShowcart(false);
  }

  // functions to open and close addtoproduts
  const [showAddtoCart, setShowAddtoCart] = useState(false);
  function openAddtoCart() {
    setShowAddtoCart(true);
  }
  function closeAddtoCart() {
    setShowAddtoCart(false);
  }

  //  for crud operatings in the cart
  const [cartItems, setCartItems] = useState([]); // for showing the cart

  function handleAddtoCart(id1, name1, url1) {
    //  for avoing copy with references we used destu.
    const updatedArray = [
      ...cartItems,
      {
        id: id1,
        name: name1,
        url: url1,
        quantity: 1,
      },
    ];

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
    const updatedProduct = [
      ...productData,
      {
        id: productData.length + 1,
        name: newProd,
        url_id: def.url_id,
        quantity: 1,
      },
    ];
    setproductData(updatedProduct);
  }

  const appContextValue = {
    showcart,
    productData,
    openCart,
    closeCart,
    showAddtoCart,
    openAddtoCart,
    closeAddtoCart,
    handleAddtoCart,
    onIncQuantity,
    onDecQuantity,
    addproductMain,
    cartItems,
    loading,
  };

  return (
    <Appcontext.Provider value={appContextValue}>
      {children}
    </Appcontext.Provider>
  );
}

export default AppcontextProvider;
