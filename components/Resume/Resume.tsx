import React from "react";
import { education } from "@/data/data";
const ResumeLayout = () => {
  return (
    <div className="min-h-screen max-w-7xl container mx-auto pt-32 ">
      {/* Header with name and navigation */}

      {/* Main content with two columns */}
      <div className="flex flex-col ">
        {/* Resume Title Section */}
        <div className="grid grid-cols-2 ">
          <div className=" md:p-12 p-6">
            <h1 className="text-4xl font-semibold text-black">Resume</h1>
          </div>
          <div className="md:p-12 p-6"></div>
        </div>

        {/* Work Experience Section */}

        <div className="grid md:grid-cols-2 grid-cols-1 relative">
          {/* Left side - Work Experience with blue background */}
          <div className="md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">
              Work
              <br />
              Experience
            </h2>
          </div>

          {/* Right side - Timeline */}
          <div className="md:p-12 p-6">
            {/* Job 1 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row mb-2">
                <div className="text-sm text-gray-600 md:w-2/8">
                  2035 - Present
                </div>
                <div className="md:w-4/5">
                  <h3 className="font-bold text-gray-800">Editor</h3>
                </div>
              </div>
              <div>
                <p className="text-sm md:ml-32">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click "Edit Text" or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>

            {/* Job 2 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row mb-2">
                <div className="w-2/8 text-sm text-gray-600">2035 - 2035</div>
                <div className="md:w-4/5">
                  <h3 className="font-bold text-gray-800">Writer at Large</h3>
                </div>
              </div>
              <div>
                <p className="text-sm md:ml-32 ">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click "Edit Text" or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>

            {/* Job 3 */}
            <div className="">
              <div className="flex flex-col md:flex-row  mb-2">
                <div className="w-2/8 text-sm text-gray-600">2035 - 2035</div>
                <div className="md:w-4/5">
                  <h3 className="font-bold text-gray-800">Intern</h3>
                </div>
              </div>
              <div>
                <p className="text-sm md:ml-32 w-[300px]">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click "Edit Text" or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 md:w-[1750px] w-[600px] absolute bottom-1 -left-56 "></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 relative">
          {/* Left side - Education Header */}
          <div className="md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">Education</h2>
          </div>

          {/* Right side - Timeline */}
          <div className="md:p-12 p-6">
            {education.map((edu) => (
              <div className="mb-16" key={edu.id}>
                <div className="flex flex-col md:flex-row mb-2">
                  <div className="w-2/8 text-sm text-gray-600">{edu.year}</div>
                  <div className="w-4/5">
                    <h3 className="font-bold text-gray-800">
                      {edu.title} | {edu.degree}
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="text-sm md:ml-32 w-[300px]">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Border Line */}
          <div className="border-b border-gray-300 md:w-[1750px] w-[600px] absolute bottom-9 -left-56"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  relative">
          {/* Left side - Work Experience with blue background */}
          <div className=" md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">
              Skills <br />& Expertise
            </h2>
          </div>

          {/* Right side - Timeline */}
          <div className="md:p-12 p-6">
            {/* Job 1 */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row mb-2">
                <div className="w-2/8 text-sm text-gray-600">
                  2035 - Present
                </div>
                <div className="w-4/5">
                  <h3 className="font-bold text-gray-800">
                    Establishment Name | Master’s Degree
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-sm md:ml-32 w-[300px]">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just click "Edit Text" or double click me to add
                  your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
