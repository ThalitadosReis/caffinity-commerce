export default function About() {
  return (
    <div className="h-[400px] flex flex-col md:flex-row items-center space-x-5">
      <div className="md:w-7/12 h-full flex flex-col space-y-5 md:justify-between p-5">
        <div className="md:my-auto">
          <h1 className="uppercase font-primary text-6xl text-balance text-black">
            About Us
          </h1>
          <p className="text-sm text-black/40 text-balance mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base text-black/60 text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="md:block hidden overflow-hidden rounded-3xl md:w-5/12 h-full">
        <img
          src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full"
          alt="Coffee Mockup"
        />
        <div className="bg-yellow w-52 rounded-3xl"></div>
      </div>
    </div>
  );
}
