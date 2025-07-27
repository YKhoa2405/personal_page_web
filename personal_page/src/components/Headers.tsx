'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export default function Header() {
  const [active, setActive] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            current = item.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Đóng menu khi chọn 1 nav item
  const handleNavClick = (id: string) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black flex items-center md:justify-around justify-between px-4 md:px-0 bg-white">
      {/* Logo/title bên trái */}
        <Image src="/images/logoweb.png" alt="Logo" width={100} height={100} className="w-16 h-16 md:w-20 md:h-20" />
      {/* Hamburger button - chỉ hiện trên mobile, nằm bên phải */}
      <div className="flex items-center">
        <button
          className="md:hidden flex items-center px-3 py-2 border-2 border-black rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Nav - desktop */}
      <nav className="hidden md:flex flex-wrap gap-2 md:space-x-8 md:ml-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={
              (active === item.id
                ? "bg-primary-color text-white "
                : "text-black ") +
              "font-bold px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Nav - mobile dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b-2 border-black flex flex-col items-center shadow-lg animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={
                (active === item.id
                  ? "bg-primary-color text-white "
                  : "text-black ") +
                "font-bold w-full text-center px-4 py-3 border-b border-gray-200 last:border-b-0 transition-colors"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}