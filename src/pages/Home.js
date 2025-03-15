import React from "react";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  return (
    <div className="home">
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Home;
