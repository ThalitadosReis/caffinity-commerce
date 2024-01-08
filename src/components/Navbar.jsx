import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto py-4 md:flex md:justify-between md:items-center">
        {/* Logo and Toggle Icon */}
        <div className="flex items-center justify-between">
          <a
            className="flex gap-1 text-gray-800 text-l font-bold font-montserrat md:text-2xl hover:text-gray-700"
            href="#"
          >
            <img
              className="w-7 h-7"
              src="/src/assets/coffee.svg"
              alt="Brand Icon"
            />
            Caffinity
          </a>

          {/* Toggle Menu */}
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`md:flex mx-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <a
              className="my-1 text-md text-gray-700 font-sm hover:text-amber-500 active:text-white md:mx-4 md:my-0"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="my-1 text-md text-gray-700 font-sm hover:text-amber-500 active:text-white md:mx-4 md:my-0"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Category
            </a>
          </li>
          <li>
            <a
              className="my-1 text-md text-gray-700 font-sm hover:text-amber-500 active:text-white md:mx-4 md:my-0"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Collections
            </a>
          </li>
          <li>
            <a
              className="my-1 text-md text-gray-700 font-sm hover:text-amber-500 active:text-white md:mx-4 md:my-0"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Icons */}
        <div className="hidden md:flex items-center space-x-5">
          {/* Like */}
          <a className="hover:text-amber-500" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
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
          {/* Cart */}
          <a className="hover:text-amber-500" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </a>

          {/* Login / Register */}
          <a className="hover:text-amber-500" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
