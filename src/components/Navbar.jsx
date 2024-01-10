import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-200">
      <div className="container mx-auto py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          {/* brand logo */}
          <a
            className="flex items-center gap-1 text-gray-700 text-l font-bold font-montserrat md:text-xl"
            href="#"
          >
            <img
              className="w-10 h-10"
              src="/src/assets/coffee-bag.svg"
              alt="Brand Icon"
            />
            Caffinity
          </a>

          {/* toggle menu */}
          <button
            type="button"
            className="md:hidden"
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

        {/* navigation links */}
        <ul
          className={`md:flex md:gap-5 mx-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-sm hover:text-gray-500">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="text-sm hover:text-gray-500">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Category
            </a>
          </li>
          <li className="text-sm hover:text-gray-500">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Collections
            </a>
          </li>
          <li className="text-sm hover:text-gray-500">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-5">
          {/* cart */}
          <a className="hover:text-gray-500" href="#">
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

          {/* profil */}
          <div className="relative">
            <button
              id="dropdownInformationButton"
              data-dropdown-toggle="dropdownInformation"
              className="h-10 w-10 hover:ring-4 ring-gray-700/30 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
              onClick={toggleDropdown}
            />

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full text-sm w-40 overflow-hidden divide-y divide-gray-30 rounded-lg shadow bg-offwhite">
                <div className="container py-3 text-gray-900">
                  <div>Jane Doe</div>
                  <div>jane@doe.com</div>
                </div>
                <ul
                  className="text-gray-700 "
                  aria-labelledby="dropdownInformationButton"
                >
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 gap-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                    >
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
                          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 gap-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                    >
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
                          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 gap-1 hover:bg-gray-100 dark:hover:bg-gray-400 dark:hover:text-white"
                    >
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
                      Wishlist
                    </a>
                  </li>
                </ul>
                <div>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 gap-1 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-400 hover:text-white"
                  >
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
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
