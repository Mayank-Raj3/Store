import Modal from "./Modal";
import "../styles/Modal.css";
import "../styles/addtoprod.css";
import { useState } from "react";

function AddProduct({
  showAddtoCart,
  openAddtoCart,
  closeAddtoCart,
  addproductMain,
}) {
  const [vari, setVari] = useState("");
  if (showAddtoCart === false) return null;

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    addproductMain(vari);
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
          {/* <input className="form-input" /> */}
          <input
            className="form-input"
            value={vari}
            onChange={handleProdChangeName}
          />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
