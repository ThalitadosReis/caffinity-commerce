import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"; // Import ProductCard component
import img1 from "../assets/img1.png";

export default function Popular() {
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

  // products list
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
    <section className="bg-white rounded-3xl p-9 space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
        <h1 className="uppercase font-primary text-5xl text-balance">
          New Arrivals
        </h1>
        <p className="text-sm text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="justify-start md:justify-self-end">
          <Link
            to="/all-products"
            className="flex gap-2 custom-button text-bold"
          >
            All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 content-center text-sm gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleLikeClick={handleLikeClick}
            isProductLiked={isProductLiked}
          />
        ))}
      </div>
    </section>
  );
}
