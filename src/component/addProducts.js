import Modal from "./Modal";
import "../styles/Modal.css";
import "../styles/addtoprod.css";
import { useContext, useState } from "react";
import Appcontext from "../store/app-context";

function AddProduct() {
  const { showAddtoCart, openAddtoCart, closeAddtoCart, addproductMain } =
    useContext(Appcontext);
  // m2 using useRef
  // const nameRef = useRef();

  // using states for geting form data
  const [vari, setVari] = useState("");
  if (showAddtoCart === false) return null;

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    addproductMain(vari);

    // using ref
    /*
    console.log(nameRef.current.value);
    addproductMain(nameRef.current.value);
    */
  }
  function handleProdChangeName(event) {
    // console.log(event.target.value);
    setVari(event.target.value);
  }
  return (
    <Modal show={openAddtoCart} onClose={closeAddtoCart}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product</div>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          {/* Using use states */}
          <input
            className="form-input"
            value={vari}
            onChange={handleProdChangeName}
          />

          {/* using Useref */}
          {/* <input className="form-input" name="Product Name" ref={nameRef} /> */}

          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
