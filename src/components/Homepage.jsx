import coffeeMockup from "../assets/mockup.png";

export default function Homepage() {
  return (
    <div aria-label="Website Homepage">
      {/* banner section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 py-9">
        <div className="lg:w-5/12">
          <h1 className="uppercase font-heading text-5xl md:text-6xl">
            The best coffee scene you have ever seen.
          </h1>
          <p className="text-base md:text-lg mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="custom-button mt-8">Shop now</button>
        </div>
        <div className="lg:w-7/12 lg:block hidden">
          <img
            src={coffeeMockup}
            className="max-w-full h-full"
            alt="Coffee Mockup"
          />
        </div>
      </div>
      {/* about section */}
      <div className="bg-silver text-black">
        <div className="container mx-auto py-12">
          <h2 className="border-l-4 px-5 uppercase font-heading text-3xl mb-4">
            What makes Caffinity so special?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 text-base">
            <div>
              <div className="bg-yellow rounded-full max-w-fit p-4 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5">Organic Beans</h3>
              <p>
                Our coffee is made from the finest organic beans, carefully
                sourced to provide you with a rich and flavorful experience.
              </p>
            </div>
            <div>
              <div className="bg-caramel rounded-full max-w-fit p-4 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5">Fair Trade</h3>
              <p>
                We are committed to fair trade practices, ensuring that our
                coffee is ethically sourced and benefits the farmers and
                communities involved in its production.
              </p>
            </div>
            <div>
              <div className="bg-yellow rounded-full max-w-fit p-4 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-5">Perfect Processing</h3>
              <p>
                Our coffee goes through a meticulous processing method to
                maintain its quality, resulting in a cup that is consistently
                delicious.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a href="/about-us" className="custom-button mt-8">
              About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
