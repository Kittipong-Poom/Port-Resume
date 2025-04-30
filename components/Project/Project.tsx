import React from "react";
import Image from "next/image";
const Project = () => {
  return (
    <div className="min-h-screen max-w-7xl container mx-auto pt-32 ">
      <div className="flex flex-col ">
        {/* Resume Title Section */}

        <div className=" md:p-12 p-6 grid grid-cols-1">
          <h1 className="text-4xl font-semibold text-black">Projects</h1>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 ">
          {/* Left side - Work Experience with blue background */}
          <div className="md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">Project Name 01</h2>
            <div className="mb-16">
              <div>
                <p className="text-sm w-[450px] mt-4">
                  I&#39;m a paragraph. Click here to add your own text and edit
                  me. It&#39;s easy. Just click &quot;Edit Text&quot; or double
                  click me to add your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Timeline */}
          <div className="md:p-12 p-6 w-[500px] h-[500px]">
            {/* Job 1 */}
            <Image
              src="/images/catmeme.jpg"
              alt="hero"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          {/* Left side - Work Experience with blue background */}
          <div className="md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">Project Name 01</h2>
            <div className="mb-16">
              <div>
                <p className="text-sm w-[450px] mt-4">
                  I&#39;m a paragraph. Click here to add your own text and edit
                  me. It&#39;s easy. Just click &quot;Edit Text&quot; or double
                  click me to add your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Timeline */}
          <div className="md:p-12 p-6 w-[500px] h-[500px]">
            {/* Job 1 */}
            <Image
              src="/images/catmeme.jpg"
              alt="hero"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          {/* Left side - Work Experience with blue background */}
          <div className="md:p-12 p-6">
            <h2 className="text-2xl font-bold text-black">Project Name 01</h2>
            <div className="mb-16">
              <div>
                <p className="text-sm w-[450px] mt-4">
                  I&#39;m a paragraph. Click here to add your own text and edit
                  me. It&#39;s easy. Just click &quot;Edit Text&quot; or double
                  click me to add your own content and make changes to the font.
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Timeline */}
          <div className="md:p-12 p-6 w-[500px] h-[500px]">
            {/* Job 1 */}
            <Image
              src="/images/catmeme.jpg"
              alt="hero"
              width={300}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
