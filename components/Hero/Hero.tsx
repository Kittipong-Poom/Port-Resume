"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { Skeleton } from "@/components/ui/skeleton";
const Hero = () => {
  const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 200);
  }, []);
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 py-8 xl:pt-0 md:pt-0 pt-24">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-12 max-w-6xl w-full">
          {/* รูปโปรไฟล์ */}
          {loadingSkeleton ? (
            <Skeleton className="md:w-[500px] md:h-[500px] rounded-full bg-gray-200" />
          ) : (
            <div className="flex md:justify-end justify-center">
              <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/uniform.jpg"
                  alt="hero"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          )}
          {/* ข้อความ */}
          <div className="flex flex-col items-center md:items-start text-left md:text-left">
            <h1 className="text-7xl font-montserrat md:text-7xl font-bold tracking-tight text-left w-full text-gray-800 mb-6 mt-6">
              {loadingSkeleton ? (
                <Skeleton className="w-24 h-14 bg-gray-200" />
              ) : (
                " Hello"
              )}
            </h1>
            <h2 className="text-xl font-inter  text-black w-full text-left">
              {loadingSkeleton ? (
                <Skeleton className="w-48 h-12 bg-gray-200" />
              ) : (
                " A Bit About Me"
              )}
            </h2>
            <span className="text-gray-600 text-base md:text-base leading-relaxed max-w-md mb-8 mt-2 font-medium">
              {loadingSkeleton ? (
                <Skeleton className="w-[500px] h-36 bg-gray-200" />
              ) : (
                `Software Engineer with hands-on experience in Full-Stack development. Experienced in building Responsive
                  Web Applications and supporting real-world systems used in production. Skilled in collaborating 
                  with cross-functional teams to deliver reliable and user-focused solutions.
                  `
              )}
            </span>
            {/* ปุ่ม 3 ปุ่ม */}
            {loadingSkeleton ? (
              <Skeleton className="w-32 h-32 bg-gray-200 rounded-full" />
            ) : (
              <div className="flex justify-center md:justify-start w-full gap-4 flex-wrap">
                {navLinks.map(({ label, color, href }) => (
                  <Link href={href} key={label}>
                    <div
                      className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center font-bold text-sm md:text-base border border-black hover:bg-white duration-300 ${color}`}
                    >
                      {label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t  border-gray-300 md:w-full w-full "></div>
    </div>
  );
};

export default Hero;
