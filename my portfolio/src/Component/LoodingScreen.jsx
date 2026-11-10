const LoodingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-white md:text-8xl">
          नमस्ते
        </h1>

        <p className="mt-5 text-sm tracking-[5px] text-red-500 md:text-base">
          WELCOME TO MY PORTFOLIO
        </p>

        <div
          className="mt-10 h-12 w-12 animate-spin rounded-full border-4 border-gray-800 border-t-red-500"
          role="status"
          aria-label="Loading"
        />

        <p className="mt-5 animate-pulse text-xs tracking-[4px] text-gray-400">
          LOADING...
        </p>

        <p className="mt-12 text-xs tracking-widest text-gray-600">
          KAUSHAL KAURAV
        </p>
      </div>
    </div>
  );
};

export default LoodingScreen;
