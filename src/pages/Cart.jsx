import { Link } from "react-router-dom";
import CartList from "../components/CartList";

export default function Cart({
  cartItems,
  totalPrice,
  handleQuantityChange,
  handleRemoveFromCart,
  handleLikeClick,
  isProductLiked,
}) {
  const deliveryFee = totalPrice < 50 ? 5 : 0;
  const totalWithDelivery = totalPrice + deliveryFee;

  return (
    <section className="space-y-5">
      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl p-9">
          <h1 className="uppercase font-primary text-4xl lg:text-5xl text-center">
            Your bag is empty
          </h1>
          <Link to="/all-products" className="w-max custom-button mx-auto">
            Continue Shopping
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 items-baseline space-y-5 md:gap-5">
          <div className="bg-white rounded-3xl p-9 space-y-5 col-span-2">
            <h1 className="uppercase font-primary text-4xl lg:text-5xl text-balance">
              Your bag (
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
              {cartItems.length === 1 ? " item" : " items"})
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
          <div className="grid bg-yellow rounded-3xl text-sm lg:text-base p-9 gap-5">
            <h1 className="uppercase font-primary text-4xl lg:text-5xl text-balance">
              Total
            </h1>
            <div className="flex justify-between">
              <p className="">Subtotal</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>${deliveryFee}</p>
            </div>
            <hr className="border-black" />
            <div className="flex justify-between font-semibold">
              <p className="">Total (VAT included)</p>
              <p>${totalWithDelivery}</p>
            </div>

            <p className="text-xs">
              {deliveryFee > 0
                ? "If your bag is over $50 you will qualify for free shipping. For Plus members, it's always free."
                : "You have free delivery!"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
