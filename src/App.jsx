import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import productsData from "../db.json";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";
import Wishlist from "./pages/Wishlist";
import LikedProducts from "./pages/LikedProducts";
import Cart from "./pages/Cart";

const products = productsData;

export default function App() {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle Liked Products
  const handleLikeClick = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      if (prevLikedProducts.includes(productId)) {
        return prevLikedProducts.filter((id) => id !== productId);
      } else {
        return [...prevLikedProducts, productId];
      }
    });
  };

  const isProductLiked = (productId) => likedProducts.includes(productId);

  // Handle Items in Cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setTotalPrice(totalPrice + product.price);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setTotalPrice(totalPrice + product.price);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);

    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="container mx-auto space-y-5">
      <Navbar likedProducts={likedProducts} cartItems={cartItems} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              products={products}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          exact
          path="/all-products"
          element={
            <AllProducts
              products={products}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          exact
          path="/wishlist"
          element={
            <Wishlist
              likedProducts={likedProducts}
              setLikedProducts={setLikedProducts}
            />
          }
        />
        <Route
          exact
          path="/liked-products"
          element={
            <LikedProducts
              likedProducts={likedProducts}
              products={products}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              totalPrice={totalPrice}
              handleQuantityChange={handleQuantityChange}
              handleRemoveFromCart={handleRemoveFromCart}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
