import ProductCard from "../components/ProductCard";

function AllProducts({ products, handleLikeClick, isProductLiked }) {
  return (
    <section className="bg-white rounded-3xl p-9 space-y-9">
        <h1 className="uppercase font-primary text-5xl text-balance">
          All products
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
    </section>
  );
}

export default AllProducts;
