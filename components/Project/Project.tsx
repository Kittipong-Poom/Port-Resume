"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/resume";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { Skeleton } from "@/components/ui/skeleton";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Project = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenVideo, setIsOpenVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const openImageGroup = (images: string[]) => {
    setIsOpenVideo(null);
    setSelectedImages(images);
    setIsModalOpen(true);
  };
  const openVideo = (videoUrl: string) => {
    setIsOpenVideo(videoUrl);
    setSelectedImages([]);
    setIsModalOpen(true);
  };
  const renderButton = (
    href: string,
    text: string,
    icon: React.ReactNode,
    bgColor: string,
    hoverColor: string
  ) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center ${bgColor} ${hoverColor} text-white text-sm px-4 py-2 rounded transition`}
    >
      {text} {icon}
    </a>
  );
  const renderActionButton = (label: string, onClick: () => void) => (
    <button
      onClick={onClick}
      className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
    >
      {label}
    </button>
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsImageLoading(false);
    }, 400);
  }, []);
  return (
    <div className="min-h-screen max-w-7xl container mx-auto pt-32 ">
      <div className="flex flex-col gap-y-[80px]">
        {isLoading ? (
          <Skeleton className="w-[300px] h-[100px] rounded-xl bg-gray-200 mb-6" />
        ) : (
          <div className=" md:p-12 p-6 grid grid-cols-1">
            <h1 className="text-4xl font-semibold text-black">Projects</h1>
          </div>
        )}
        {projects.map((project) => {
          return (
            <div className="grid md:grid-cols-2 grid-cols-1 " key={project.id}>
              {isLoading ? (
                <Skeleton className="w-[500px] h-[300px] rounded-xl bg-gray-200" />
              ) : (
                <div className="md:p-12 p-6 ">
                  <h2 className="text-2xl font-bold text-black">
                    {project.title}{" "}
                  </h2>
                  <div className="flex flex-col text-start">
                    <p className="text-xl font-medium">{project.date}</p>
                    <p className="text-xl font-medium">{project.position}</p>
                  </div>

                  <div className="md:mb-16 ">
                    <div className="flex space-x-4 mt-4 md:mt-0 mb-4 md:hidden">
                      {project.github &&
                        renderButton(
                          project.github,
                          "View on GitHub",
                          <FaGithub className="ml-2 w-5 h-5" />,
                          "bg-gray-900",
                          "hover:bg-gray-700"
                        )}
                      {project.link &&
                        renderButton(
                          project.link,
                          "Live Demo",
                          <GrView className="ml-2 w-5 h-5" />,
                          "bg-emerald-600",
                          "hover:bg-emerald-500"
                        )}
                    </div>
                    <p className="text-sm md:w-[450px] w-[350px] md:mt-4">
                      {project.description}
                    </p>
                    <div className="hidden md:flex space-x-4 mt-6">
                      {project.github &&
                        renderButton(
                          project.github,
                          "View on GitHub",
                          <FaGithub className="ml-2 w-5 h-5" />,
                          "bg-gray-900",
                          "hover:bg-gray-700"
                        )}
                      {project.link &&
                        renderButton(
                          project.link,
                          "Live Demo",
                          <GrView className="ml-2 w-5 h-5" />,
                          "bg-emerald-600",
                          "hover:bg-emerald-500"
                        )}
                    </div>
                    <div className="md:flex space-x-4 mt-6 md:mt-0">
                      {project.title ===
                        "HRIS(Human Resource Information System)" && (
                        <div className="grid md:grid-cols-2 grid-cols-2 gap-2 ">
                          {renderActionButton("User Manual", () =>
                            openImageGroup(
                              project?.imageGroups?.userManual || []
                            )
                          )}
                          {renderActionButton("WI (Working method)", () =>
                            openImageGroup(project?.imageGroups?.wi || [])
                          )}
                          {renderActionButton("Announcement System", () =>
                            openImageGroup(
                              project?.imageGroups?.announcement || []
                            )
                          )}
                          {renderActionButton("Permission", () =>
                            openImageGroup(
                              project?.imageGroups?.permission || []
                            )
                          )}
                          {renderActionButton("Video", () =>
                            openVideo("images/projects/video/intern.mp4")
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {isImageLoading ? (
                <Skeleton className="w-[385px] h-[385px] md:w-[600px] md:h-[600px] rounded-xl bg-gray-200" />
              ) : (
                <div
                  onClick={() => {
                    setSelectedImage(project.images);
                    setIsOpen(true);
                  }}
                  className="md:p-12 p-6 w-[385px] h-[385px] md:w-[650px] md:h-[550px] overflow-hidden rounded-xl"
                >
                  <Image
                    src={project.images}
                    alt="hero"
                    width={2080}
                    height={2080}
                    className="w-auto h-auto object-cover object-top rounded-xl cursor-pointer"
                    priority
                    onLoadingComplete={() => setIsImageLoading(false)}
                  />
                </div>
              )}
              {isOpen && selectedImage && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                  <div className="relative max-w-3xl md:max-w-6xl rounded-xl w-full p-4">
                    <Image
                      src={selectedImage}
                      alt="Full view"
                      width={1800}
                      height={800}
                      className={`
                        w-full max-w-full rounded-xl shadow-lg object-contain 
                        ${
                          selectedImage === "/images/projects/ambulance.png"
                            ? "h-[800px] w-[600px]"
                            : selectedImage === "/images/projects/hris3.png"
                            ? "h-[600px] w-[600px]"
                            : selectedImage ===
                              "/images/projects/natrure-trip.png"
                            ? "h-[700px] w-[600px]"
                            : "h-[700px] w-[600px]"
                        }
                    `}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-2"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] md:max-w-[1600px] md:w-[1600px] md:max-h-[100vh] bg-white rounded-lg overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                {isOpenVideo ? (
                  // Video modal content
                  <div className="flex justify-center items-center">
                    <video
                      controls
                      autoPlay
                      width="100%"
                      height="auto"
                      className="rounded-lg"
                    >
                      <source src={isOpenVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                  >
                    {selectedImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-[90vh] md:w-[1500px] mx-auto container">
                          <TransformWrapper>
                            <TransformComponent>
                              <img
                                src={img}
                                alt={`Image ${index + 1}`}
                                className="max-h-full max-w-full object-contain"
                              />
                            </TransformComponent>
                          </TransformWrapper>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
