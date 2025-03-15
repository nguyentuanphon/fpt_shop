import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    } else {
      console.error("addToCart is not a function");
    }
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} VNĐ</p>
      <Link to={`/product/${product.id}`}>
        <button>Xem chi tiết</button>
      </Link>
      <button onClick={handleAddToCart}>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductCard;
