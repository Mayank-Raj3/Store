import React from "react";
import "../styles/products.css";
import urlLink from "../utils/links.json";

function ProductItem({ id, name, url_id, onAddtoCart }) {
  return (
    <div key={id} className="product">
      <img src={urlLink.url + url_id} alt={name} />
      <div className="product-name">{name}</div>
      <button
        className="yellow-button"
        onClick={() => onAddtoCart(id, name, urlLink.url + url_id)}
      >
        Add to Cart{" "}
      </button>
    </div>
  );
}

export function Products({ onAddtoCart, productData }) {
  return (
    <div className="products-container">
      {productData.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          url_id={item.url_id}
          onAddtoCart={onAddtoCart}
        />
      ))}
    </div>
  );
}
