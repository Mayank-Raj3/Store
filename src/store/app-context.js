import { createContext } from "react";

const Appcontext = createContext({
  showcart: false,
  productData: [],
  openCart: () => {},
  closeCart: () => {},
  showAddtoCart: false,
  openAddtoCart: () => {},
  closeAddtoCart: () => {},
  handleAddtoCart: () => {},
  onIncQuantity: () => {},
  onDecQuantity: () => {},
  addproductMain: () => {},
  cartItems: [],
});

export default Appcontext;
