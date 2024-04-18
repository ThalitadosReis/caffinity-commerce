import { Routes, Route } from "react-router-dom";
import productsData from "../db.json";

import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import LikedProducts from "./pages/LikedProducts.jsx";
import Cart from "./pages/Cart.jsx";

import { useLikedProducts, useCartItems } from "./services/Handlers.jsx";

const products = productsData;

export default function App() {
  const { likedProducts, handleLikeClick, isProductLiked, setLikedProducts } = useLikedProducts();

  const { cartItems, totalPrice, handleAddToCart, handleQuantityChange, handleRemoveFromCart } = useCartItems();

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
