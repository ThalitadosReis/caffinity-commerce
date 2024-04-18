export default function ProductCard({
  product,
  handleLikeClick,
  isProductLiked,
}) {
  return (
    <div key={product.id} className="flex flex-col">
      <div className="flex flex-col relative">
        <div className="bg-stone-200 rounded-3xl">
          <img
            className="w-full h-full object-cover"
            src={product.imgSrc}
            alt={product.productName}
          />
          <button
            className="absolute top-2 right-2 p-2"
            onClick={() => handleLikeClick(product.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isProductLiked(product.id) ? "#FF6262" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke={isProductLiked(product.id) ? "#FF6262" : "currentColor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-start p-5">
          <div>
            <p className="text-sm">{product.productName}</p>
            <span className="font-bold text-base">{`$${product.price}`}</span>
          </div>
          <button className="bg-yellow rounded-xl p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
