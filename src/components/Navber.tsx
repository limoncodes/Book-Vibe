"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiMenu,
  FiX,
  FiHome,
  FiBookOpen,
  FiList,
  FiBook,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";

const Navber = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "Books",
      path: "/book",
      icon: <FiBookOpen />,
    },
    {
      name: "Listed Books",
      path: "/listed",
      icon: <FiList />,
    },
    {
      name: "Pages to Read",
      path: "/pagesRead",
      icon: <FiBook />,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-18 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Book<span className="text-[#23BE0A]">Vibe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "bg-[#23BE0A] text-white shadow-sm"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]"
                    }`}
                  >
                    <span className="text-lg">
                      {link.icon}
                    </span>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex items-center gap-2 rounded-lg bg-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fa609]">
              <FiLogIn className="text-lg" />
              Sign In
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#59C6D2] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#43afbb]">
              <FiUserPlus className="text-lg" />
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">

            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive(link.path)
                        ? "bg-[#23BE0A] text-white"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]"
                    }`}
                  >
                    <span className="text-xl">
                      {link.icon}
                    </span>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#23BE0A] px-4 py-3 text-sm font-semibold text-white">
                <FiLogIn />
                Sign In
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg bg-[#59C6D2] px-4 py-3 text-sm font-semibold text-white">
                <FiUserPlus />
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navber;