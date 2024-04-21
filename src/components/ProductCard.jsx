import { useState } from "react";
import ProductModal from "./ProductModal";

export default function ProductCard({
  product,
  handleLikeClick,
  isProductLiked,
  handleAddToCart,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div key={product.id} className="flex flex-col relative">
      <div className="bg-stone-200 rounded-3xl">
        <img
          className="w-full h-full object-cover"
          src={product.imgSrc}
          alt={product.productName}
        />
        <button
          className="absolute top-2 right-3 p-2"
          onClick={() => handleLikeClick(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isProductLiked(product.id) ? "#FF6262" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke={isProductLiked(product.id) ? "#FF6262" : "currentColor"}
            className="w-7 h-7 hover:fill-[#FF6262] hover:stroke-[#FF6262]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <div className="my-5 space-y-2">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="font-primary text-xl">{product.productName}</h2>
          <p className="flex items-start gap-1 font-primary text-2xl">
            <span className="font-secondary text-xs">From</span>
            {`$${product.price}`}
          </p>
        </div>
        <button
          className="bg-stone-200 rounded-full py-2 px-5 shadow hover:shadow-lg ease-linear transition-all duration-150"
          onClick={openModal}
        >
          Quick Add
        </button>
        {showModal && (
          <ProductModal
            product={product}
            handleAddToCart={handleAddToCart}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}
