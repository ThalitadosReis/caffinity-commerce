import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";

import img1 from "./assets/img1.png";

export default function App() {
  // Define the products list
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

  const products = [
    {
      id: 1,
      imgSrc: img1,
      productName: "Product 1",
      price: 35,
    },
    {
      id: 2,
      imgSrc: img1,
      productName: "Product 2",
      price: 40,
    },
    {
      id: 3,
      imgSrc: img1,
      productName: "Product 3",
      price: 42,
    },
    {
      id: 4,
      imgSrc: img1,
      productName: "Product 4",
      price: 37,
    },
  ];

  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/all-products" element={<AllProducts products={products} handleLikeClick={handleLikeClick} isProductLiked={isProductLiked} />} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}
