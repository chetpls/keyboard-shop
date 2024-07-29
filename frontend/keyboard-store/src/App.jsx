import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/CartContext";
import CartPage from "./components/Shop/CartPage";
import Footer from "./components/Footer";


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
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
