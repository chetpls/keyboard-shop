import "../../styles/HomePage.css"
import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";
import {Link } from "react-router-dom";

function Footer() {
    return (
      <div className="footerSection">
        <div className="quickLinks">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">About Us</Link>
        <Link to="/">Contact Us</Link>
        </div>
        <div className="customerService">
          <h4>Customer Service</h4>
          <Link to="/">FAQ</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Shipping Info</Link>
        </div>
        <div className="socialMedia">
          <h4>Social Media</h4>
          <Link to="/"><FaHeadset /></Link>
          <Link to="/"><FaHeadset /></Link>
          <Link to="/"><FaHeadset /></Link>
          <Link to="/"><FaHeadset /></Link>
        </div>
        <div className="legalLinks">
          <h4>Legal Links</h4>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    );
}

export  default Footer;