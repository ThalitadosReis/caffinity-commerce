import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-600/70 rounded-3xl text-white text-sm p-9">
        <div className="md:mx-auto">
          <img src={logo} className="w-auto h-28" alt="Logo" />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          <h2 className="lg:text-md font-bold">Help & Information</h2>
          <ul className="text-white/70">
            <li>Help</li>
            <li>Track Order</li>
            <li>Delivery & Returns</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 my-2">
          <h2 className="lg:text-md font-bold">About Caffinity Coffee Co.</h2>
          <ul className="text-white/70">
            <li>About Us</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 my-2">
          <h2 className="lg:text-md font-bold">
            More from Caffinity Coffee Co.
          </h2>
          <ul className="text-white/70">
            <li>Gift Vouchers</li>
            <li>Black Friday</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center text-xs p-5 text-white/70">
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
