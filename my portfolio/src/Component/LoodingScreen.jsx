const LoodingScreen = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">
          नमस्ते
        </h1>

        <p className="mt-5 text-red-500">
          KAUSHAL KAURAV
        </p>

        <p className="mt-5 animate-pulse text-gray-400">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default LoodingScreen;