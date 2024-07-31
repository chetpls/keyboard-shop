import React, { useContext } from "react";
import "../../styles/Products.css";
import { CartContext } from "../Shop/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ _id, name, price, type, image, size }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart({ _id, name, price, type, image });
  };
  
  const handleProductPage = () => {
    navigate(`/${_id}`)
  }

  return (
    <div className={`flex flex-col items-center ${size} gap-2 p-3`} >
      <img className={`${size} rounded-3xl cursor-pointer`} src={image} alt={name} onClick={handleProductPage}/>
      <div className="w-full flex flex-row justify-between items-center box-border cursor-pointer" onClick={handleProductPage}>
        <p className="font-semibold text-xl">{name}</p>
        <p className="border border-green/40 rounded-3xl px-5 py-1 font-semibold text-xl">
          ${price}
        </p>
      </div>
      <div className="flex flex-row justify-between w-full items-center box-border">
        <p className="text-gray-400">
          Category: <span className="text-white">{type}</span>
        </p>
        <button
          id="addToCart"
          className="text-xl box-border bg-green font-semibold px-5 py-1 hover:bg-black text-black rounded-3xl"
          onClick={handleAddToCart}
        >
          <h3 glitch="+">+</h3>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
