export default function CartList({
  product,
  handleQuantityChange,
  handleRemoveFromCart,
  handleLikeClick,
  isProductLiked,
}) {
  return (
    <div key={product.id} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center bg-stone-200 rounded-3xl p-5 text-black/70">
        <img
          src={product.imgSrc}
          alt={product.productName}
          className="h-36 object-cover md:col-span-1 mx-auto"
        />
        <div className="md:col-span-2 space-y-3">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">{product.productName}</p>
              <p>${product.price}</p>
            </div>
            <div className="">
              <select
                className="border rounded-xl p-2"
                value={product.quantity}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value))
                }
              >
                {[...Array(10).keys()].map((qty) => (
                  <option key={qty + 1} value={qty + 1}>
                    {qty + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr className="border-black" />
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start space-y-1">
              <button
                className="flex items-center justify-center gap-1"
                onClick={() => handleLikeClick(product.id)}
              >
                {isProductLiked(product.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isProductLiked(product.id) ? "#FF6262" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke={isProductLiked(product.id) ? "#FF6262" : "none"}
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                )}
                {isProductLiked(product.id)
                  ? "On Your Wishlist"
                  : "Add to Wishlist"}
              </button>
              <button
                className="flex items-center justify-center gap-1"
                onClick={() => handleRemoveFromCart(product.id)}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                Remove
              </button>
            </div>
            <p className="text-base font-semibold text-[#FF6262]">
              ${product.price * product.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
