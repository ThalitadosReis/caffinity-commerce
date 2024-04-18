import CartList from "../components/CartList";

export default function Cart({
  cartItems,
  totalPrice,
  handleQuantityChange,
  handleRemoveFromCart,
  handleLikeClick,
  isProductLiked
}) {
  return (
    <section className="space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl p-9 space-y-5">
          <h1 className="uppercase font-primary text-5xl text-balance">
            Your bag ({cartItems.reduce((total, item) => total + item.quantity, 0)} {cartItems.length === 1 ? "item" : "items"})
          </h1>
          <div className="text-sm space-y-5">
            {cartItems.map((product) => (
              <CartList
                key={product.id}
                product={product}
                handleQuantityChange={handleQuantityChange}
                handleRemoveFromCart={handleRemoveFromCart}
                handleLikeClick={handleLikeClick}
                isProductLiked={isProductLiked}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-stone-600 rounded-3xl p-9 text-white">
          <h1 className="uppercase font-primary text-5xl text-balance">
            Total
          </h1>
          <p className="text-3xl mt-4">${totalPrice}</p>
        </div>
      </div>
    </section>
  );
}
