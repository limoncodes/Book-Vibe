const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row">
        <h2 className="text-xl font-bold text-gray-900">
          Book<span className="text-green-500">Vibe</span>
        </h2>

        <p className="text-sm text-gray-500">
          © 2026 Limon Codes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;