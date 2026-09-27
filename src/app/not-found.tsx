import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] px-6">
      <div className="relative w-full max-w-2xl text-center">

        {/* Floating Background Circles */}
        <div className="absolute left-10 top-10 h-16 w-16 animate-bounce rounded-full bg-blue-100 opacity-70" />

        <div className="absolute right-10 top-20 h-10 w-10 animate-pulse rounded-full bg-purple-100" />

        <div className="absolute bottom-10 left-20 h-8 w-8 animate-ping rounded-full bg-green-100" />

        {/* 404 */}
        <div className="relative">
          <h1 className="text-[140px] font-black leading-none tracking-tight text-gray-900 sm:text-[190px]">
            404
          </h1>

          {/* Moving Line */}
          <div className="mx-auto mt-[-15px] h-1 w-32 overflow-hidden rounded-full bg-gray-200">
            <div className="animate-slide h-full w-1/2 rounded-full bg-black" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-10">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Oops! The page you are looking for doesn&apos;t exist or
            may have been moved.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;