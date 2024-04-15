import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Wishlist from "./pages/Wishlist";
import productsData from "../db.json";

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
    <>
      <Navbar />

      <Routes>
        <Route exact path="/all-products" element={<AllProducts products={products} handleLikeClick={handleLikeClick} isProductLiked={isProductLiked} />} />
        <Route exact path="/wishlist" element={<Wishlist likedProducts={likedProducts} setLikedProducts={setLikedProducts} />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}
