import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";
import {Link } from "react-router-dom";

function Footer() {
    return (
      <div className="relative text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-20 pt-32 pb-20 bg-[#141414] justify-center gap-y-5">
        <div className="flex flex-col gap-3 ">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <Link className="text-gray-400" to="/">Home</Link>
        <Link className="text-gray-400" to="/shop">Shop</Link>
        <Link className="text-gray-400" to="/">About Us</Link>
        <Link className="text-gray-400" to="/">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold">Customer Service</h4>
          <Link className="text-gray-400" to="/">FAQ</Link>
          <Link className="text-gray-400" to="/">Returns</Link>
          <Link className="text-gray-400" to="/">Shipping Info</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold"> Social Media</h4>
          <Link className="text-gray-400" to="/"><FaHeadset /></Link>
          <Link className="text-gray-400" to="/"><FaHeadset /></Link>
          <Link className="text-gray-400" to="/"><FaHeadset /></Link>
          <Link className="text-gray-400" to="/"><FaHeadset /></Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold">Legal Links</h4>
          <Link className="text-gray-400" to="/">Privacy Policy</Link>
          <Link className="text-gray-400" to="/">Terms of Service</Link>
        </div>
      </div>    

    );
}

export  default Footer;