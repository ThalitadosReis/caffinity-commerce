import { useState } from "react";

export function useLikedProducts() {
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

  return { likedProducts, handleLikeClick, isProductLiked };
}

export function useCartItems() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const updateTotalPrice = (updatedCartItems) => {
    const newTotalPrice = updatedCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    updateTotalPrice(updatedCartItems);
  };

  return {
    cartItems,
    totalPrice,
    handleAddToCart,
    handleQuantityChange,
    handleRemoveFromCart,
    updateTotalPrice,
  };
}