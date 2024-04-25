import { Nav } from "./component/Nav";
import { Products } from "./component/Products";
import { Cart } from "./component/cart.js";
import AddProduct from "./component/addProducts.js";
import AppcontextProvider from "./store/AppcontextProvider.js";

function App() {
  return (
    <AppcontextProvider>
      <Nav />
      <Products />
      <Cart />
      <AddProduct />
    </AppcontextProvider>
  );
}

export default App;
