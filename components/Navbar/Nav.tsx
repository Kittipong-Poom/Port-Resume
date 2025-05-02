"use client";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constant/constant";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className="relative z-50">
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-sm font-light ">
        {/* ซ้าย */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></div>
          <Link href="/" className="font-bold text-2xl">
            Kittipong-Wong
          </Link>
        </div>

        {/* ขวา */}
        <div className="hidden md:flex items-center text-gray-700 mr-12">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 text-base font-medium ${
                  pathname === link.href
                    ? "text-yellow-600"
                    : "hover:text-yellow-600"
                }`}
              >
                {link.label}
              </Link>
              {index !== navLinks.length - 1 && (
                <span className="mx-2 text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ปุ่มเมนูมือถือ */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && <MobileNav onClose={() => setIsMobileOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
