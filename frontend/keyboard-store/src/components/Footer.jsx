import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {Link } from "react-router-dom";

function Footer() {
    return (
      <div className="relative text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-20 pt-40 pb-20 bg-[#141414] justify-center gap-y-5 uppercase">
        <div className="flex flex-col gap-3 ">
          <h4 className="text-lg font-bold text-green ">Quick Links</h4>
          <Link className="text-gray-400" to="/" glitch="HOME">Home</Link>
        <Link className="text-gray-400" to="/shop" glitch="SHOP">Shop</Link>
        <Link className="text-gray-400" to="/about" glitch="ABOUT">About</Link>
        <Link className="text-gray-400" to="/contact" glitch="CONTACT">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-green">Customer Service</h4>
          <Link className="text-gray-400" to="/" glitch="FAQ">FAQ</Link>
          <Link className="text-gray-400" to="/" glitch="RETURNS">Returns</Link>
          <Link className="text-gray-400" to="/" glitch="SHIPPING">Shipping</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-green"> Social Media</h4>
          <Link className="text-gray-400" to="/" glitch="INSTAGRAM"><FaInstagram /></Link>
          <Link className="text-gray-400" to="/" glitch="FACEBOOK"><FaFacebook /></Link>
          <Link className="text-gray-400" to="/" glitch="TWITTER"><FaTwitter /></Link>
          <Link className="text-gray-400" to="/" glitch="YOUTUBE"><FaYoutube /></Link>
        </div>
        <div className="flex flex-col gap-3 text-green">
          <h4 className="text-lg font-bold">Legal Links</h4>
          <Link className="text-gray-400" to="/" glitch="Privacy Policy">Privacy Policy</Link>
          <Link className="text-gray-400" to="/" glitch="Terms of Service">Terms of Service</Link>
        </div>
      </div>    

    );
}

export  default Footer;