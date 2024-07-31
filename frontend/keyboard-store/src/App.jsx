import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ShopPage from "./components/Shop/ShopPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/Shop/CartContext";
import Cart from "./components/Shop/Cart";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import ProductPage from "./components/Product/ProductPage";
import Checkout from "./components/Shop/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />

          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/:id" element={<ProductPage/>} />
              <Route path="/checkout" element={<Checkout/>} />  
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
