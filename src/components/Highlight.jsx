import img1 from "../assets/img1.png";

export default function Highlight() {
  const products = [
    {
      id: 1,
      imgSrc: img1,
      productName: "Product 1",
      price: 35,
    },
    {
      id: 2,
      imgSrc: img1,
      productName: "Product 2",
      price: 40,
    },
    {
      id: 3,
      imgSrc: img1,
      productName: "Product 3",
      price: 42,
    },
    {
      id: 4,
      imgSrc: img1,
      productName: "Product 4",
      price: 37,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-9 space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
        <h1 className="uppercase font-primary text-6xl text-balance">Deals</h1>
        <p className="text-sm text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="justify-start md:justify-self-end">
          <button className="flex gap-2 custom-button text-bold">
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
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 content-center text-sm gap-5">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative flex flex-col space-y-2">
              <div className="bg-stone-200 p-6 rounded-3xl relative">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={product.imgSrc}
                  alt={product.productName}
                />
                <button className="absolute top-2 right-2 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
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
              <div className="flex justify-between items-start bg-gray-200 p-4 rounded-3xl">
                <div>
                  <p className="text-sm">{product.productName}</p>
                  <span className="font-bold text-lg">{`$${product.price}`}</span>
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
        ))}
      </div>
    </div>
  );
}
