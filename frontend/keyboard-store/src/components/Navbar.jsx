import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from './CartContext';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  const cartItemCount = cart.length;
  return (

    <nav className='absolute w-full px-10 py-5 z-20'>
      <div className='flex flex-row justify-between'>
        <h3 className='text-xl font-semibold'>KYBRD</h3>
        <div className='flex flex-row gap-9 bg-white px-5 rounded-2xl text-lg font-semibold '>
          <Link to="/">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/">ABOUT</Link>
          <Link to="/">CONTACT</Link>
        </div>
        <Link className='flex flex-row text-white items-center gap-1 bg-black px-5 rounded-2xl text-lg' to="/cart"><FaCartPlus />({cartItemCount})</Link>
      </div>
    </nav>
  );
  //   <div className="header">
  //       <h3>REKEY</h3>
  //       <nav>
  //       <Link to="/">Home</Link>
  //       <Link to="/shop">Shop</Link>
  //       <Link to="/">About Us</Link>
  //       <Link to="/">Contact Us</Link>
  //       </nav>
  //       <div className="rightHeader">
  //           <Link to="/cart"><FaCartPlus />({cartItemCount})</Link>
  //       </div>
  //   </div>
  // );
};

export default Navbar;
