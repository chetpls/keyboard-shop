import React from 'react';
import "../../styles/HomePage.css";
import ProductGrid from "../Product/ProductGrid";
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  return (
    <div className="section">
      <div className='text-black flex flex-col items-center w-full gap-10 bg-[#f1ede9]'>
      <h2 className='uppercase text-5xl font-bold mt-10'>Featured Products</h2>
      <ProductGrid className="" limit={4} size="w-96" />
      <Link to="/shop"><button className="bg-orange-300 text-lg font-semibold px-5 py-2 rounded-md" >View More</button></Link>
    </div></div>
  );
}

export default FeaturedProducts;
