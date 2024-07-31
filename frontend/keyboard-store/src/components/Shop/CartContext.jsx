import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item._id === product._id);
      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
        console.log('Updated cart with increased quantity:', updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        console.log('Added new product to cart:', updatedCart);
        return updatedCart;
      }
    });
  };

  const clearCart = () => {
    setCart([]);
    console.log('Cart cleared');
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item._id === productId);
      if (existingProductIndex !== -1) {
        const existingProduct = prevCart[existingProductIndex];
        if (existingProduct.quantity > 1) {
          const updatedCart = prevCart.map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity - 1 } : item
          );
          console.log('Decreased quantity in cart:', updatedCart);
          return updatedCart;
        } else {
          const newCart = prevCart.filter((item) => item._id !== productId);
          console.log('Removed product from cart:', newCart);
          return newCart;
        }
      }
      console.log('Product ID not found in cart');
      return prevCart;
    });
  };

  const total = useMemo(() => cart.reduce((sum, product) => sum + product.price * product.quantity, 0), [cart]);
  const tax = useMemo(() => total * 0.08, [total]);
  const grandTotal = useMemo(() => total + tax, [total, tax]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, tax, grandTotal }}>
      {children}
    </CartContext.Provider>
  );
};
