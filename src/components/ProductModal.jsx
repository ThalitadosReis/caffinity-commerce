const ProductModal = ({ product, handleAddToCart, closeModal }) => {
  return (
    <div className="container flex items-center mx-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
      <div className="relative w-auto mx-auto max-w-3xl">
        <div className="relative flex flex-col w-full bg-white rounded-3xl">
          <div className="flex justify-end p-5">
            <button onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="relative grid md:grid-cols-2 p-5">
            <img
              className="w-1/2 h-full object-cover mx-auto"
              src={product.imgSrc}
              alt={product.productName}
            />
            <div className="flex md:justify-between md:flex-col p-5">
              <h1 className="font-primary text-4xl md:text-5xl">{product.productName}</h1>
              <p className="flex items-start gap-1 font-primary text-2xl">
                <span className="font-secondary text-xs">From</span>
                {`$${product.price}`}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end p-5 border-t border-solid border-stone-150">
            <button className="uppercase px-6 py-2 ease-linear transition-all duration-150" onClick={closeModal}>
              Close
            </button>
            <button
              className="uppercase flex gap-2 bg-yellow px-6 py-3 rounded-full ease-linear transition-all duration-150"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
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
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
