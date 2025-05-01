"use client";
import React, { useEffect, useState } from "react";
import { education, skills, internWorkExperience } from "@/data/resume";
import { Skeleton } from "@/components/ui/skeleton";
const ResumeLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);
  return (
    <div className="min-h-screen max-w-7xl container mx-auto pt-32 ">
      {/* Header with name and navigation */}

      {/* Main content with two columns */}
      <div className="flex flex-col ">
        {/* Resume Title Section */}
        {isLoading ? (
          <Skeleton className="w-[300px] h-[100px] rounded-xl bg-gray-200 mb-6" />
        ) : (
          <div className="grid grid-cols-2 ">
            <div className=" md:p-12 p-6">
              <h1 className="text-4xl font-semibold text-black">Resume</h1>
            </div>
            <div className="md:p-12 p-6"></div>
          </div>
        )}

        {/* Work Experience Section */}

        <div className="grid md:grid-cols-2 grid-cols-1 relative">
          {/* Left side - Work Experience with blue background */}
          {isLoading ? (
            <Skeleton className="w-[300px] h-[100px] rounded-xl bg-gray-200 mb-6" />
          ) : (
            <div className="md:p-12 p-6">
              <h2 className="text-2xl font-bold text-black">
                Work
                <br />
                Experience
              </h2>
            </div>
          )}
          {/* Right side - Timeline */}

          {isLoading ? (
            <Skeleton className="w-[500px] h-[200px] rounded-xl bg-gray-200 mb-6" />
          ) : (
            <div className="md:p-12 p-6 ">
              {internWorkExperience.map((exp) => {
                return (
                  <div className="mb-12" key={exp.id}>
                    <div className="grid md:grid-cols-12 mb-2 w-[550px]">
                      {/* Year section - take up 3 columns and align right */}
                      <div className="text-sm text-gray-600 md:col-span-3 md:text-left ">
                        {exp.year.split(" - ")[0]} - {exp.year.split(" - ")[1]}
                      </div>
                      {/* Content section - take up 9 columns */}
                      <div className="md:col-span-9">
                        <h3 className="font-bold text-gray-800">
                          {exp.title} ({exp.company})
                        </h3>
                        <p>{exp.position}</p>
                        <p className="text-sm mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="border-b border-gray-300 md:w-[1750px] w-[600px] absolute bottom-1 -left-56 "></div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 relative">
          {/* Left side - Education Header */}
          {isLoading ? (
            <Skeleton className="w-[300px] h-[100px] rounded-xl bg-gray-200 mb-6" />
          ) : (
            <div className="md:p-12 p-6">
              <h2 className="text-2xl font-bold text-black">Education</h2>
            </div>
          )}
          {/* Right side - Timeline */}
          {isLoading ? (
            <Skeleton className="w-[500px] h-[100px] rounded-xl bg-gray-200 mb-12" />
          ) : (
            <div className="md:p-12 p-6">
              {education.map((edu) => (
                <div className="mb-16" key={edu.id}>
                  <div className="grid md:grid-cols-12 mb-2">
                    {/* Year section - take up 3 columns and align right */}
                    <div className="text-sm text-gray-600 md:col-span-3 md:text-left md:pr-8">
                      {edu.year}
                    </div>
                    {/* Content section - take up 9 columns */}
                    <div className="md:col-span-9">
                      <h3 className="font-bold text-gray-800">
                        {edu.title} | {edu.degree}
                      </h3>
                      <p className="text-sm mt-2 w-[300px]">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Bottom Border Line */}
          <div className="border-b border-gray-300 md:w-[1750px] w-[600px] absolute bottom-9 -left-56"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1  relative">
          {/* Left side - Work Experience with blue background */}
          {isLoading ? (
            <Skeleton className="w-[300px] h-[100px] rounded-xl bg-gray-200 mb-6" />
          ) : (
            <div className=" md:p-12 p-6">
              <h2 className="text-2xl font-bold text-black">Skills & Tools</h2>
            </div>
          )}
          {/* Right side - Timeline */}
          <div className="md:p-12 p-6">
            {isLoading ? (
              <Skeleton className="w-[500px]  h-[400px] rounded-xl bg-gray-200" />
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => {
                  return (
                    <div
                      key={skill.id}
                      className="flex flex-col md:flex-row mb-2 "
                    >
                      <div className="w-2/8 text-sm text-gray-600"></div>
                      <div className="w-2/5 ml-0 md:ml-[70px]">
                        <ul className="font-bold text-gray-800">
                          {skill.title}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
