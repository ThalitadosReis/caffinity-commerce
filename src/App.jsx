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

  return (
    <div className="container mx-auto space-y-5">
      <Navbar likedProducts={likedProducts} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Homepage
              products={products}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
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
            />
          }
        />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}
