"use client";
import { ChevronUp } from "lucide-react";
import React, { useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
