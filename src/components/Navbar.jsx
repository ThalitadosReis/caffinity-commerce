export default function Navbar() {
  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("h-[250px]");
  };

  return (
    <nav data-x-data="{ isOpen: false }" aria-label="Website Navbar">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-x-4">
          <ul className="hidden md:flex items-center gap-x-6">
            <li>
              <a className="text-sm font-normal text-gray-900 hover:text-gray-900/70">
                Shop
              </a>
            </li>
            <li>
              <a className="text-sm font-medium text-gray-900 hover:text-gray-900/70">
                About
              </a>
            </li>
            <li>
              <a className="text-sm font-medium text-gray-900 hover:text-gray-900/70">
                Collections
              </a>
            </li>
          </ul>

          <a className="flex items-center gap-x-1">
            <img
              className="object-cover w-20"
              src="/src/assets/logo.png"
              alt="logo"
            />
          </a>

          <ul className="hidden md:flex items-center gap-x-6">
            <li>
              <a className="text-sm font-normal text-gray-900 hover:text-gray-900/70">
                My Account
              </a>
            </li>
            <li>
              <a className="text-sm font-medium text-gray-900 hover:text-gray-900/70">
                Wishlist
              </a>
            </li>
            <li>
              <a className="text-sm font-medium text-gray-900 hover:text-gray-900/70">
                Cart (0)
              </a>
            </li>
          </ul>

          {/* burger menu */}
          <ul className="flex items-center gap-x-6 md:hidden">
            <li className="flex items-center gap-x-4">
              <button
                onClick={toggleDropdown}
                className="block p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70"
              >
                <svg
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
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* dropdown */}
      <div
        id="dropdown"
        className="duration-900 h-0 overflow-y-hidden transition-all md:hidden"
      >
        <ul className="mx-auto max-w-screen-xl px-4">
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              Shop
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              About
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              Collections
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              My Account
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              Wishlist
            </a>
          </li>
          <li>
            <a className="block p-2 text-center text-sm font-medium hover:bg-eerie hover:text-white">
              Cart (0)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
