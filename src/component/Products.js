import React from "react";
import "../styles/products.css";
import productData from "../utils/data.json";

export function Products() {
  console.log(productData);
  return (
    <div className="products-container">
      {productData.map((item) => (
        <div key={item.id} className="product">
          <img
            src={`https://assets.leetcode.com/users/images/${item.url_id}`}
            alt={item.name}
          />
          <div className="product-name">{item.name}</div>
          <button className="yellow-button">Add to Cart </button>
        </div>
      ))}
    </div>
  );
}
