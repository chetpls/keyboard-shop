import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "./Shop/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-[#141414] text-white shadow-md z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h3 className="text-xl font-semibold ">KYBRD</h3>
        </div>
        <div className="hidden md:flex items-center space-x-4 font-semibold">
          <Link to="/" className="nav-link " glitch="HOME">HOME</Link>
          <Link to="/shop" className="nav-link " glitch="SHOP">SHOP</Link>
          <Link to="/about" className="nav-link " glitch="ABOUT">ABOUT</Link>
          <Link to="/contact" className="nav-link " glitch="CONTACT">CONTACT</Link>
          <Link
            className="flex flex-row text-black items-center gap-1   px-5 py-2 rounded-2xl text-lg bg-white hover:bg-green"
            to="/cart" 
          >
            <FaCartPlus />({cartItemCount})
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-green focus:outline-none focus:text-green "
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center font-semibold">
            <li >
              <Link to="/" className="nav-link py-2 " glitch="HOME" onClick={toggleMenu}>HOME</Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link py-2 " glitch="SHOP" onClick={toggleMenu}>SHOP</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link py-2 " glitch="ABOUT" onClick={toggleMenu}>ABOUT</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link py-2 " glitch="CONTACT" onClick={toggleMenu}>CONTACT</Link>
            </li>
            <li>
              <Link
                className="flex flex-row text-black items-center hover:text-green hover:bg-black justify-center gap-1 bg-green px-5 py-2 rounded-2xl text-lg"
                to="/cart"
                onClick={toggleMenu}
              >
                <FaCartPlus />({cartItemCount})
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
