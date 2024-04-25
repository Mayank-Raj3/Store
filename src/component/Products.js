import React from "react";
import "../styles/products.css";
import urlLink from "../utils/links.json";
import Appcontext from "../store/app-context";
import { useContext } from "react";
import Shimmer from "./Shimmer";

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
  const { handleAddtoCart, productData, loading } = useContext(Appcontext);
  if (!loading) {
    // return <h1>Loding...</h1>;
    return <Shimmer />;
  }
  return (
    <div className="products-container">
      {Object.keys(productData).map((k) => (
        <ProductItem
          key={productData[k].id}
          id={productData[k].id}
          name={productData[k].name}
          url_id={productData[k].url_id}
          handleAddtoCart={handleAddtoCart}
        />
      ))}
    </div>
  );
}

// for body :-product compo
