import React, { useContext } from 'react';
import { CartContext } from '../CartContext';


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product._id} className="cartItem">
            <img src={product.image} alt={product.name} />
            <div>
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => removeFromCart(product._id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
