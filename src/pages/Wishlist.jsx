import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <section className="space-y-9">
      <h1 className="uppercase font-primary text-5xl text-balance text-white">
        Your Items
        <br />
        <span className="text-yellow">All in one place</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl p-9">
          <div>
            <h1 className="uppercase font-primary text-3xl text-balance">
              Liked items
            </h1>
            <p className="text-sm text-black/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="justify-self-start mt-5 lg:justify-self-end lg:mt-0">
            <Link to="/liked-products" className="custom-button">
              (0) Items
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
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-stone-600 rounded-3xl p-9 text-white">
          <div>
            <h1 className="uppercase font-primary text-3xl text-balance">
              Owned Items
            </h1>
            <p className="text-sm text-white/70">
              Buy something again (and again)
            </p>
          </div>
          <div className="justify-self-start mt-5 lg:justify-self-end lg:mt-0">
            <Link to="/all-products" className="custom-button">
              (0) Items
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
      </div>
    </section>
  );
}
