import React from "react";
import "../styles/products.css";
import productData from "../utils/data.json";

function ProductItem({ id, name, url_id }) {
  return (
    <div key={id} className="product">
      <img
        src={`https://assets.leetcode.com/users/images/${url_id}`}
        alt={name}
      />
      <div className="product-name">{name}</div>
      <button className="yellow-button">Add to Cart </button>
    </div>
  );
}

export function Products() {
  return (
    <div className="products-container">
      {productData.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          url_id={item.url_id}
        />
      ))}
    </div>
  );
}
