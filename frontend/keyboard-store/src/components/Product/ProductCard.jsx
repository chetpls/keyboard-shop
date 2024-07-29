import React, {useContext} from 'react';
import "../../styles/Products.css"
import {CartContext} from "../CartContext";

const ProductCard = ({ _id, name, price, type, image, size }) => {
  const {addToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({_id, name, price, type, image});
  };

  return (
    <div className={`flex flex-col items-center ${size} gap-2 p-3`}>
      <img
        className={`${size} rounded-3xl `}
        src={image}
        alt={name}
      />
      <div className="w-full flex flex-row justify-between items-center box-border">
        <p className="font-semibold text-xl">{name}</p>
        <p className="border border-black rounded-3xl px-5 py-1 font-semibold text-xl">${price}</p>
      </div>
      <div className="flex flex-row justify-between w-full items-center box-border">
        <p className="text-gray-700">
          Category: <span className="text-black">{type}</span>
        </p>
        <button id="addToCart" className="text-sm box-border " onClick={handleAddToCart}>+ Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;