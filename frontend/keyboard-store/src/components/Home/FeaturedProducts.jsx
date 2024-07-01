import React from 'react';
import "../../styles/HomePage.css";
import ProductGrid from "../Product/ProductGrid";

function FeaturedProducts() {
  return (
    <div className="featuredSection">
      <h2>Featured Products</h2>
      <ProductGrid limit={4} />
    </div>
  );
}

export default FeaturedProducts;
