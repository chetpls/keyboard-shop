import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import "../../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, total, tax, grandTotal } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cartSection">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product._id} className="cartItem">
              <img src={product.image} alt={product.name} />
              <div className="cartItemDetails">
                <div className="cartItemLeft">
                  <p className="productName">{product.name}</p>
                  <p className="productType">Category: {product.type}</p>
                  <p className="productQuantity">Quantity: {product.quantity}</p>
                  <button onClick={() => removeFromCart(product._id)}>Remove</button>
                </div>  
                <div className="cartItemRight">
                  <p>${product.price.toFixed(2)}</p>
                </div>            
              </div>
            </div>
          ))
        )}
      </div>
      <div className="orderSummary">
        <h2>Order Summary</h2>
        <div className="orderSummaryItem">
          <span className="orderSummaryLabel">Sub Total:</span>
          <span className="orderSummaryValue">${total.toFixed(2)}</span>
        </div>
        <div className="orderSummaryItem">
          <span className="orderSummaryLabel">Tax &#40;8%&#41;:</span>
          <span className="orderSummaryValue">${tax.toFixed(2)}</span>
        </div>
        <div className="orderSummaryItem">
          <span className="orderSummaryLabel">Shipping:</span>
          <span className="orderSummaryValue">Free</span>
        </div>
        <div className="orderSummaryItem">
          <span className="orderSummaryLabel">Total:</span>
          <span className="orderSummaryValue">${grandTotal.toFixed(2)}</span>
        </div>
        <button className='checkout'>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
