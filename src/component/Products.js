import React from "react";
import "../styles/products.css";
import urlLink from "../utils/links.json";
import Appcontext from "../store/app-context";
import { useContext } from "react";
function ProductItem({ id, name, url_id, handleAddtoCart }) {
  return (
    <div key={id} className="product">
      <img src={urlLink.url + url_id} alt={name} />
      <div className="product-name">{name}</div>
      <button
        className="yellow-button"
        onClick={() => handleAddtoCart(id, name, urlLink.url + url_id)}
      >
        Add to Cart{" "}
      </button>
    </div>
  );
}

export function Products() {
  const { handleAddtoCart, productData } = useContext(Appcontext);

  return (
    <div className="products-container">
      {productData.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          url_id={item.url_id}
          handleAddtoCart={handleAddtoCart}
        />
      ))}
    </div>
  );
}

// for body :-product compo
