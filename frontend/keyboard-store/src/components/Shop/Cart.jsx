import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import OrderSummary from "./OrderSummary";


const Cart = () => {
  const { cart, removeFromCart, } = useContext(CartContext);

  return (
    <div className="flex min-h-screen bg-[#141414] p-5 text-green">
      <div className="flex flex-col w-full px-10 pt-20 gap-5">
        <h2 className="text-center text-5xl uppercase font-bold">
          Shopping Cart
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 box-border">
          <div className="flex flex-col lg:w-4/6 gap-4">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-row items-center justify-between border-b-[#ddd]"
                >
                  <img
                    className="w-44 mr-4 rounded-3xl"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="flex justify-between w-full items-center relative">
                    <div className="flex flex-col justify-between h-40 w-full">
                      <p className="text-2xl font-semibold">{product.name}</p>
                      <p className="text-base text-gray-400">Category: <span className="text-white">{product.type}</span> </p>
                      <p className="text-base text-gray-400">Quantity: <span className="text-white">{product.quantity}</span></p>
                      <button
                        className="w-24 text-xs bg-green font-semibold px-3 py-2 hover:bg-black text-black rounded-3xl"
                        onClick={() => removeFromCart(product._id)}
                      >
                        <h3 glitch="REMOVE">REMOVE</h3>
                      </button>
                    </div>
                    <div className="right-0 bottom-2 lg:top-2 absolute">
                      <p>${product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
            <OrderSummary checkout={true}/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
