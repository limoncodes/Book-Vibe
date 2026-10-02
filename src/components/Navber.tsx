
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
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md animate-[navEnter_0.5s_ease-out]">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar */}
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group text-2xl font-bold tracking-tight text-gray-900 transition-transform duration-300 hover:scale-105"
          >
            Book<span className="text-[#23BE0A] transition-colors duration-300 group-hover:text-[#1fa609]">Vibe</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-2">

              {links.map((link, index) => (
                <li
                  key={link.path}
                  className="animate-[navItem_0.5s_ease-out_both]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Link
                    href={link.path}
                    className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                      isActive(link.path)
                        ? "bg-[#23BE0A] text-white shadow-md shadow-green-200"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]"
                    }`}
                  >
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]">
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

            <button className="group flex items-center gap-2 rounded-lg bg-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa609] hover:shadow-lg hover:shadow-green-200 active:scale-95">
              <FiLogIn className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
              Sign In
            </button>

            <button className="group flex items-center gap-2 rounded-lg bg-[#59C6D2] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#43afbb] hover:shadow-lg hover:shadow-cyan-200 active:scale-95">
              <FiUserPlus className="text-lg transition-transform duration-300 group-hover:scale-110" />
              Sign Up
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-700 transition-all duration-300 hover:rotate-6 hover:bg-gray-100 active:scale-90 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="block transition-transform duration-300">
              {menuOpen ? <FiX /> : <FiMenu />}
            </span>
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="overflow-hidden">

            <div className="border-t border-gray-100 py-4">

              {/* Mobile Links */}
              <ul className="flex flex-col gap-2">

                {links.map((link, index) => (
                  <li
                    key={link.path}
                    className={`transition-all duration-500 ${
                      menuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-3 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 70}ms`
                        : "0ms",
                    }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      tabIndex={menuOpen ? 0 : -1}
                      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:translate-x-1 ${
                        isActive(link.path)
                          ? "bg-[#23BE0A] text-white shadow-sm"
                          : "text-gray-600 hover:bg-green-50 hover:text-[#23BE0A]"
                      }`}
                    >
                      <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                        {link.icon}
                      </span>

                      {link.name}
                    </Link>
                  </li>
                ))}

              </ul>

              {/* Mobile Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">

                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#23BE0A] px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa609] hover:shadow-md active:scale-95">
                  <FiLogIn className="text-lg" />
                  Sign In
                </button>

                <button className="flex items-center justify-center gap-2 rounded-lg bg-[#59C6D2] px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#43afbb] hover:shadow-md active:scale-95">
                  <FiUserPlus className="text-lg" />
                  Sign Up
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navber;