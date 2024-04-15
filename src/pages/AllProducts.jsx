import ProductCard from "../components/ProductCard";

function AllProducts({ products, handleLikeClick, isProductLiked }) {
  return (
    <div className="container mx-auto space-y-5 text-white text-base">
      <h1 className="uppercase font-primary text-5xl text-balance">
        All Products
      </h1>
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
    </div>
  );
}

export default AllProducts;
