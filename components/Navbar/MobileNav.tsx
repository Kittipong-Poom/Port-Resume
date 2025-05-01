"use client";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { X } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
type Props = {
  onClose: () => void;
};

const MobileNav = ({ onClose }: Props) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 bg-white z-50 p-6 flex flex-col gap-4"
      >
        <div className="flex justify-end items-center mb-6 ">
          <button onClick={onClose}>
            <X className="w-8 h-8 cursor-pointer" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 justify-center items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={`text-2xl hover:text-yellow-600 transition font-light ${
                  pathname === link.href
                    ? "text-yellow-600"
                    : "hover:text-yellow-600"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
