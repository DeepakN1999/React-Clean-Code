import React, { useState } from "react"
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  const [cart, setCart] = useState([]);
  // Function to add items to the cart

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    // Update the cart state to an empty array
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetails/:id" element={<ProductDetails addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;