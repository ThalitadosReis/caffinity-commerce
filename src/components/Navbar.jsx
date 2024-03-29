import logo from "../assets/logo.png";

export default function Navbar() {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("h-auto");
  };

  return (
    <nav className="container mx-auto py-5">
      <div className="flex items-center justify-between text-white">
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <a className="text-sm hover:text-white/70">Shop</a>
          </li>
          <li>
            <a className="text-sm hover:text-white/70">About</a>
          </li>
          <li>
            <a className="text-sm hover:text-white/70">Collections</a>
          </li>
        </ul>

        <a>
          <img className="object-cover w-20" src={logo} alt="logo" />
        </a>

        <ul className="hidden md:flex items-center gap-x-3">
          {/* search engine */}
          <li className="relative flex items-center">
            <div className="relative">
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-600 text-white px-4 py-2 rounded-3xl focus:outline-none text-xs pl-10"
              />
            </div>
          </li>

          {/* profile */}
          <li>
            <a className="text-sm font-normal hover:text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
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

          {/* wishlist */}
          <li>
            <a className="text-sm font-normal hover:text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
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

          {/* shopping bag */}
          <li>
            <a className="hover:text-white/70 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <div className="absolute -bottom-2 -right-1 h-4 w-4 bg-yellow rounded-full flex items-center justify-center text-xs text-black">
                1
              </div>
            </a>
          </li>
        </ul>

        {/* burger menu */}
        <ul className="flex items-center space-x-1 md:hidden">
          {/* search engine */}
          <li className="relative flex items-center">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-600 text-white px-2 py-2 rounded-3xl focus:outline-none text-xs pl-10"
            />
          </li>

          {/* profile */}
          <li>
            <a className="text-sm font-normal hover:text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
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

          {/* wishlist */}
          <li>
            <a className="text-sm font-normal hover:text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
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

          {/* shopping bag */}
          <li>
            <a className="hover:text-white/70 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <div className="absolute -bottom-2 -right-1 h-4 w-4 bg-yellow rounded-full flex items-center justify-center text-xs text-black">
                1
              </div>
            </a>
          </li>

          {/* burger menu */}
          <li className="flex items-center">
            <button
              onClick={toggleDropdown}
              className="block p-2 text-sm font-medium hover:border-white/70 hover:text-white/70"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {/* dropdown */}
      <div
        id="dropdown"
        className="duration-900 h-0 overflow-y-hidden transition-all md:hidden text-white"
      >
        <ul className="mx-auto max-w-screen-xl px-4">
          <li>
            <a className="block p-2 text-center text-sm hover:bg-yellow hover:text-black rounded-full">
              Shop
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm hover:bg-yellow hover:text-black rounded-full">
              About
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm hover:bg-yellow hover:text-black rounded-full">
              Collections
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
