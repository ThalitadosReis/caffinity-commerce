import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <section>
      <div className="bg-gray-600/70 rounded-3xl text-white p-9 grid grid-cols-1 md:grid-cols-4">
        <div className="flex items-center md:mx-auto">
          <img src={logo} className="w-auto h-28" alt="Logo" />
        </div>

        <div className="flex flex-col space-y-3 p-5">
          <h2 className="text-sm lg:text-md font-bold">Help & Information</h2>
          <ul className="text-sm text-white/70">
            <li>Help</li>
            <li>Track Order</li>
            <li>Delivery & Returns</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 p-5">
          <h2 className="text-sm lg:text-md font-bold">
            About Caffinity Coffee Co.
          </h2>
          <ul className="text-sm text-white/70">
            <li>About Us</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-3 p-5">
          <h2 className="text-sm lg:text-md font-bold">
            More from Caffinity Coffee Co.
          </h2>
          <ul className="text-sm text-white/70">
            <li>Gift Vouchers</li>
            <li>Black Friday</li>
          </ul>
        </div>
      </div>

      <div className="mx-9 p-4 flex flex-col md:flex-row justify-between md:items-center text-white/70 text-xs space-y-2">
        <span>Copyright © 2024 Caffinity Coffee Co. All rights reserved.</span>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <span>|</span>
          <a href="https://github.com/">Github</a>
        </div>
      </div>
    </section>
  );
}
