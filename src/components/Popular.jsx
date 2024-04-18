import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Popular({ products, handleLikeClick, isProductLiked }) {
  return (
    <section className="bg-white rounded-3xl p-9 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-sm">
        <h1 className="uppercase font-primary text-5xl text-balance">
          Last Arrivals
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="justify-start md:justify-self-end">
          <Link
            to="/all-products"
            className="gap-2 custom-button"
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleLikeClick={handleLikeClick}
              isProductLiked={isProductLiked}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  );
}

export default Popular;