import React from 'react';
import Cart from './Cart';
import Footer from '../Home/Footer';
import "../../styles/Cart.css";

const CartPage = () => {
  return (
    <div className="cartPage">
      <h2>Shopping Cart</h2>
        <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
