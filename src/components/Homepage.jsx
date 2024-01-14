import coffeeMockup from "../assets/mockup.png";

export default function Homepage() {
  return (
    <div className="bg-cyan-50" aria-label="Website Banner">
      <div className="container mx-auto max-w-screen">
        <div className="flex flex-col lg:flex-row items-center px-5 py-9">
          <div className="lg:w-5/12">
            <h1 className="uppercase font-heading text-5xl md:text-6xl mb-6 text-cyan-900">
              The best coffee scene you have ever seen.
            </h1>
            <p className="text-cyan-900 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="uppercase text-base font-bold mt-8 py-4 px-12 text-white bg-cyan-950 hover:bg-cyan-800">
              Shop now
            </button>
          </div>
          <div className="lg:w-7/12 lg:block hidden relative">
            <img
              src={coffeeMockup}
              className="max-w-full h-auto md:max-w-full md:h-full"
              alt="Coffee Mockup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
