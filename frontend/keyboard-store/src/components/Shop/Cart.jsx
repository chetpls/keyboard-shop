import React, { useContext } from 'react';
import { CartContext } from '../CartContext';


const Cart = () => {
  const { cart, removeFromCart, total, tax, grandTotal } = useContext(CartContext);

  return (
    <div className="flex h-screen bg-[#f1ede9]">
      <div className="flex flex-col w-full px-10 mt-20 gap-5">
      <h2 className="text-center text-5xl uppercase font-bold">Shopping Cart</h2>
    <div className="flex flex-col lg:flex-row gap-4 box-border">
      <div className="flex flex-col w-4/6 gap-4">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => (
            <div key={product._id} className="flex flex-row items-center justify-between border-b-[#ddd]">
              <img className="w-44 mr-4 rounded-3xl" src={product.image} alt={product.name} />
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col justify-between h-40">
                  <p className="text-2xl">{product.name}</p>
                  <p className="text-base">Category: {product.type}</p>
                  <p className="text-base">Quantity: {product.quantity}</p>
                  <button className="w-24 text-xs" onClick={() => removeFromCart(product._id)}>Remove</button>
                </div>  
                <div className="ml-auto text-right">
                  <p>${product.price}</p>
                </div>            
              </div>
            </div>
          ))
        )}
      </div>
      <div className="items-center w-96 lg:w-1/3 p-5 border border-[#ccc] rounded-lg h-fit flex self-center flex-col">
        <h2>Order Summary</h2>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Sub Total:</span>
          <span className="text-right">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Tax &#40;8%&#41;:</span>
          <span className="text-right">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="orderSummaryLabel">Shipping:</span>
          <span className="text-right">Free</span>
        </div>
        <div className="flex justify-between mb-2 w-full">
          <span className="font-bold">Total:</span>
          <span className="text-right">${grandTotal.toFixed(2)}</span>
        </div>
        <button className='checkout'>Checkout</button>
      </div>
    </div></div>
    </div>
  );
};

export default Cart;
