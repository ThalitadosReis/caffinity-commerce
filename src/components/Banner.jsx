export default function Banner() {
  return (
    <section className="md:h-[500px] flex flex-col md:flex-row items-center space-x-5">
      <div className="md:w-5/12 h-full flex flex-col md:justify-between text-white bg-stone-600 rounded-3xl p-9">
        <div className="md:my-auto text-balance space-y-5">
          <h1 className="uppercase font-primary text-4xl md:text-5xl">
            The best coffee scene you have ever seen.
          </h1>
          <p className="text-base md:text-sm text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="custom-button">
            Explore More
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white/70">
            Kaisten, <strong>Switzerland</strong>
          </span>
        </div>
      </div>
      <div className="md:w-7/12 h-full relative md:block hidden rounded-3xl overflow-hidden">
        <img
          src="https://images.squarespace-cdn.com/content/v1/54fb5e8de4b07795ac9ff693/1580586844476-5VUJFCGJ4BKQWZ64RYE8/worker%2Bcoffee%2Bpackaging.jpg"
          className="object-cover h-full"
          alt="Coffee Image Mockup"
        />
        <div className="absolute top-5 right-5 flex items-center justify-center">
          <svg viewBox="0 0 100 100" width="70" className="rotate-animation">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="uppercase text-sm">
              <textPath xlinkHref="#circle">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="5s"
                  repeatCount="indefinite"
                />
                Explore More . Explore More .
              </textPath>
            </text>
          </svg>
          
          <button className="absolute bg-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
