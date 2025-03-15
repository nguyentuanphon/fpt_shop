import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Dữ liệu không đúng định dạng");
        }
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching products:", error);
      });
  }, []);

  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Đang tải sản phẩm...</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
