export default function LikedProducts() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="bg-white rounded-3xl p-9 space-y-9">
      <div>
        <h1 className="uppercase font-primary text-5xl text-balance">
          Liked Items
        </h1>
        <button
          className="flex items-center gap-2 text-sm back-button hover:underline"
          onClick={goBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </section>
  );
}
