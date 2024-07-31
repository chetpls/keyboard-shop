import React from 'react';

import ProductGrid from "../Product/ProductGrid";
import { Link } from 'react-router-dom';

function FeaturedProducts() {
  return (
    <div >
      <div className=' flex flex-col items-center w-full gap-10 bg-[#141414] text-green'>
      <h2 className='uppercase text-5xl font-bold mt-10 text-center'>Featured Products</h2>
      <ProductGrid  limit={4} size="w-96" />
      <Link to="/shop"><button className="bg-green text-black hover:bg-black  text-lg font-semibold px-5 py-2 rounded-md "  ><h3 glitch="View More">View More</h3></button></Link>
    </div></div>
  );
}

export default FeaturedProducts;
