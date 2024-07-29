import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "./products.json";
import "../../styles/Products.css";

function ProductGrid({ selectedType, limit, size }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching data:', error));
}, []);

  const filteredProducts = selectedType
    ? products.filter((product) => product.type === selectedType)
    : products;

  const displayedProducts = limit
    ? filteredProducts.slice(-limit)
    : filteredProducts;

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 2xl:grid-cols-4  ">
      {displayedProducts.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          name={product.name}
          price={product.price}
          type={product.type}
          image={product.image}
          size={size}
        />
      ))}
    </div>
  );
}

export default ProductGrid;