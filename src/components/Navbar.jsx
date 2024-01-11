export default function Navbar() {
  return (
    <nav data-x-data="{ isOpen: false }" aria-label="Website Navbar">
      <div className="border-b bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-3">
          <div className="flex items-center justify-between gap-x-4">
            <a className="flex cursor-pointer items-center gap-x-1">
              <img
                className="object-cover w-10"
                src="/src/assets/coffee-bag.svg"
                alt="logo"
              />
              <span className="text-lg text-gray-700">Caffinity</span>
            </a>
            <ul className="flex items-center gap-x-3">
              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
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
                </a>
              </li>

              <li>
                <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="mx-auto max-w-screen-xl px-4 py-4">
          <div className="flex items-center justify-between gap-x-8">
            <form className="flex-grow rounded-full relative flex items-center gap-x-1 bg-white w-max">
              <label className="w-full">
                <input
                  className="w-full rounded-full px-4 py-2 pr-10 text-sm font-medium outline-0 ring-gray-400 focus:ring-2"
                  type="text"
                  placeholder="Search"
                />
              </label>
              <button className="absolute right-3">
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
            <ul className="flex items-center gap-x-6">
              <li className="hidden md:block">
                <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  All Products
                </a>
              </li>
              <li className="hidden md:block">
                <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  Roasted Coffee
                </a>
              </li>
              <li className="hidden md:block">
                <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  Collections
                </a>
              </li>
              <li className="hidden md:block">
                <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center gap-x-4 md:hidden">
                <button
                  onClick={() => {
                    const dropdown = document.getElementById("dropdown");
                    dropdown.classList.toggle("h-[180px]");
                  }}
                  className="block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70"
                >
                  <svg
                    data-x-ref="menu"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    data-x-ref="close"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="hidden h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="dropdown"
          className="uppercase duration-900 h-0 overflow-y-hidden transition-all md:hidden"
        >
          <hr />
          <ul className="mx-auto max-w-screen-xl px-4 py-4">
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900/70 hover:text-gray-50">
                All Products
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900/70 hover:text-gray-50">
                Rosted Coffee
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900/70 hover:text-gray-50">
                Collections
              </a>
            </li>
            <li>
              <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900/70 hover:text-gray-50">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
