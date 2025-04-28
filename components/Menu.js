"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    "About Us",
    "Programs & Admissions",
    "Academics",
    "Hospital Services",
    "Research",
    "IQAC",
    "Student Corner",
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item}
            href="#"
            className="text-gray-700 text-base 2xl:text-lg hover:text-primary transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-40">
          <div className="container1 px-28 py-3">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-700 text-lg hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
