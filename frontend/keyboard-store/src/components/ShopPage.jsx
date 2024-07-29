import React, { useState } from "react";
import "../styles/HomePage.css";
import "../styles/ShopPage.css";
import Footer from "./Footer";
import ProductGrid from "./Product/ProductGrid";

function SideBar({ onSelectType }) {
  return (
    <div className="sideBar">
      <h2>Categories</h2>
      <div className="types">
        <p onClick={() => onSelectType("")}>All Products</p>
        <p onClick={() => onSelectType("Linear")}>Linear</p>
        <p onClick={() => onSelectType("Tactile")}>Tactile</p>
        <p onClick={() => onSelectType("Clicky")}>Clicky</p>
      </div>
    </div>
  );
}

function ShopPage() {
  const [selectedType, setSelectedType] = useState("");

  const handleSelectType = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="shopPage">
      <h1>{selectedType === "" ? "All Products" : selectedType}</h1>
      <div className="content">
        <SideBar onSelectType={handleSelectType} />
        <ProductGrid selectedType={selectedType} />
      </div>
    </div>
  );
}

export default ShopPage;
