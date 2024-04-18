import ProductCard from "../components/ProductCard";

export default function LikedProducts({
  likedProducts,
  products,
  handleLikeClick,
  isProductLiked,
  handleAddToCart
}) {
  const likedItems = products.filter((product) =>
    likedProducts.includes(product.id)
  );

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="bg-white rounded-3xl p-9 space-y-9">
      <div>
        <button
          className="flex items-center gap-2 text-sm back-button hover:underline"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <h1 className="uppercase font-primary text-5xl text-balance">
          Liked Items
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 content-center text-sm gap-5">
        {likedItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleLikeClick={handleLikeClick}
            isProductLiked={isProductLiked}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
