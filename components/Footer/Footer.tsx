import React from "react";
import { LinkedinIcon, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className=" h-36  ">
      <div className="border-b border-gray-300 md:w-full w-full"></div>
      <div className="grid md:grid-cols-4 grid-cols-1 p-6 md:p-0 gap-4 md:py-6 text-sm items-center  container mx-auto">
        {/* Phone Section */}
        <div className="col-span-1">
          <h1 className=" text-xl font-semibold">Phone</h1>
          <p>062-0758133</p>
        </div>

        {/* Email Section */}
        <div className="col-span-1 ">
          <p className="text-xl font-semibold">Email</p>
          <p>kittipong.wong00@gmail.com</p>
        </div>

        {/* Follow Me Section */}
        <div className="col-span-1  flex flex-col ">
          <p className="text-xl font-semibold">Follow Me</p>
          <div className="flex space-x-4 mt-1">
            <div>
              <a
                href="https://www.linkedin.com/in/kittipong-wongsaditsayanon-0aa5a8323/?trk=opento_sprofile_details"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-5 h-5 text-black cursor-pointer" />
              </a>
            </div>

            <div>
              <a
                href="https://github.com/Kittipong-Poom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-black cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="col-span-1 md:text-right text-left text-[12px] font-light w-[350px] text-gray-400">
          <p>© 2035 By Kittipong Wong.</p>
          <p>Powered and secured by Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
