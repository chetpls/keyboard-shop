import React, {useContext} from 'react';
import "../../styles/Products.css"
import {CartContext} from "../CartContext";

const ProductCard = ({ _id, name, price, type, image }) => {
  const {addToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({_id, name, price, type, image});
  };

  return (
    <div className="productCard">
      <img
        className="productImg"
        src={image}
        alt={name}
      />
      <div className="productCardHeader">
        <p className="productName">{name}</p>
        <p className="productPrice">${price.toFixed(2)}</p>
      </div>
      <div className="productCardFooter">
        <p className="category">
          Category: <span>{type}</span>
        </p>
        <button id="addToCart" onClick={handleAddToCart}>+ Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;