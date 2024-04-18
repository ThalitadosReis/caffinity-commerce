export default function About() {
  return (
    <section className="h-[400px] flex flex-col md:flex-row items-center">
      <div className="md:w-6/12 h-full flex flex-col space-y-5 p-5">
        <div className="md:my-auto text-white text-balance">
          <h1 className="uppercase font-primary text-5xl mb-3">About Us</h1>
          <p className="text-sm text-white/40 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="md:w-6/12 h-full hidden md:block overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="object-cover w-full h-full"
          alt="Coffee Image Mockup"
        />
      </div>
    </section>
  );
}
