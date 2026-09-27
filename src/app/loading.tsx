const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-5">

        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-black" />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Loading Books
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Please wait a moment...
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;