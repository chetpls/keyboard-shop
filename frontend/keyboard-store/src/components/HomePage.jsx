import { FaShippingFast, FaUndoAlt, FaHeadset, FaLock } from "react-icons/fa";
import "../styles/HomePage.css";
import HeroSection from "./Home/HeroSection";
import FeaturedProducts from "./Home/FeaturedProducts";
import Newsletter from "./Home/Newsletter";
import Footer from "./Home/Footer";
import Benefits from "./Home/Benefits";

// function HeroSection() {
//   return (
//     <div className="heroSection">
//       <h1>
//         Discover the Perfect <br /> Keyboard for You
//       </h1>
//       <h3>
//         From Mechanical to Wireless,
//         <br /> Find Your Ideal Typing Experience
//       </h3>
//       <button id="shopNow">Shop Now</button>
//       <div className="heroImg">
//       </div>
//     </div>
//   );
// }

// function FeaturedProducts() {
//   return (
//     <div className="featuredSection">
//       <h2>Featured Products</h2>
//       <div className="productGrid">
//         <div className="productCard">
//           <img
//             className="productImg"
//             src="https://atlas-content-cdn.pixelsquid.com/stock-images/computer-keyboard-black-4oV6zQ7-600.jpg"
//             alt="test"
//           />
//           <div className="productCardHeader">
//             <p className="productName">Product name</p>
//             <p className="productPrice">$199</p>
//           </div>
//           <div className="productCardFooter">
//             <p className="category">Category: <span>Linear</span></p>
//             <button id="addToCart">+ Add to cart</button>
//           </div>
//         </div>
//         <div className="productCard">
//           <img
//             className="productImg"
//             src="https://atlas-content-cdn.pixelsquid.com/stock-images/computer-keyboard-black-4oV6zQ7-600.jpg"
//             alt="test"
//           />
//           <div className="productCardHeader">
//             <p className="productName">Product name</p>
//             <p className="productPrice">$199</p>
//           </div>
//           <div className="productCardFooter">
//             <p className="category">Category: <span>Linear</span></p>
//             <button id="addToCart">+ Add to cart</button>
//           </div>
//         </div>
//         <div className="productCard">
//           <img
//             className="productImg"
//             src="https://atlas-content-cdn.pixelsquid.com/stock-images/computer-keyboard-black-4oV6zQ7-600.jpg"
//             alt="test"
//           />
//           <div className="productCardHeader">
//             <p className="productName">Product name</p>
//             <p className="productPrice">$199</p>
//           </div>
//           <div className="productCardFooter">
//             <p className="category">Category: <span>Linear</span></p>
//             <button id="addToCart">+ Add to cart</button>
//           </div>
//         </div>
//         <div className="productCard">
//           <img
//             className="productImg"
//             src="https://atlas-content-cdn.pixelsquid.com/stock-images/computer-keyboard-black-4oV6zQ7-600.jpg"
//             alt="test"
//           />
//           <div className="productCardHeader">
//             <p className="productName">Product name</p>
//             <p className="productPrice">$199</p>
//           </div>
//           <div className="productCardFooter">
//             <p className="category">Category: <span>Linear</span></p>
//             <button id="addToCart">+ Add to cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Benefits() {
//   return (
//     <div className="benefitsSection">
//       <h2>Why Shop With Us?</h2>
//       <div className="benefitCards">
//       <div className="benefitCard">
//         <FaShippingFast size={150} />
//         <p>Free Shipping</p>
//       </div>
//       <div className="benefitCard">
//         <FaUndoAlt size={150}/>
//         <p>30-Day Returns</p>
//       </div>
//       <div className="benefitCard">
//         <FaHeadset size={150}/>
//         <p>24/7 Customer Support</p>
//       </div>
//       <div className="benefitCard">
//         <FaLock size={150}/>
//         <p>Secure Payments</p>
//       </div>
//       </div>
//     </div>
//   );
// }

// function Newsletter() {
//   return (
//     <div className="newsletterSection">
//       <h2>NEWSLETTER</h2>
//       <h4>Subscribe and get 20% off your first purchase.</h4>
//       <form>
//         <input type="email" placeholder="Your Email" />
//         <input class="button" type="submit" value={"Send"} />
//       </form>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div className="footerSection">
//       <div className="quickLinks">
//         <h4>Quick Links</h4>
//         <p>home</p>
//         <p>shop</p>
//         <p>about us</p>
//         <p>contact us</p>
//       </div>
//       <div className="customerService">
//         <h4>Customer Service</h4>
//         <p>FAQ</p>
//         <p>Returns</p>
//         <p>Shipping Info</p>
//       </div>
//       <div className="socialMedia">
//         <h4>Social Media</h4>
//         <FaHeadset />
//         <FaHeadset />
//         <FaHeadset />
//         <FaHeadset />
//       </div>
//       <div className="legalLinks">
//         <h4>Legal Links</h4>
//         <p>Privacy Policy</p>
//         <p>Terms of Service</p>
//       </div>
//     </div>
//   );
// }

function HomePage() {
  return (
    <div className="homePage">
      <HeroSection></HeroSection>
      <FeaturedProducts></FeaturedProducts>
      <Benefits></Benefits>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
