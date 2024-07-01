import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from './CartContext';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  const cartItemCount = cart.length;
  return (
    <div className="header">
        <h3>REKEY</h3>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
        </nav>
        <div className="rightHeader">
            <Link to="/cart"><FaCartPlus />({cartItemCount})</Link>
        </div>
    </div>
  );
};

export default Navbar;
