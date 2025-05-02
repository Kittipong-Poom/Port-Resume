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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const openImageGroup = (images: string[]) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsImageLoading(false);
    }, 400);
  }, []);
  return (
    <div className="min-h-screen max-w-7xl container mx-auto pt-32 ">
      <div className="flex flex-col ">
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

                  <div className="mb-16">
                    <div>
                      <p className="text-sm md:w-[450px] w-[350px] mt-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex space-x-4 mt-6">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition "
                        >
                          View on GitHub <FaGithub className="ml-2 w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center bg-emerald-600 text-white text-sm px-4 py-2 rounded hover:bg-emerald-500 transition"
                        >
                          Live Demo <GrView className="ml-2 w-5 h-5" />
                        </a>
                      )}
                      {project.title ===
                        "HRIS(Human Resource Information System)" && (
                        <div className="grid md:grid-cols-2 grid-cols-2 gap-2 mt-6 ">
                          <button
                            onClick={() =>
                              openImageGroup(
                                project?.imageGroups?.userManual || []
                              )
                            }
                            className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
                          >
                            User Manual
                          </button>
                          <button
                            onClick={() =>
                              openImageGroup(project?.imageGroups?.wi || [])
                            }
                            className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
                          >
                            WI
                          </button>
                          <button
                            onClick={() =>
                              openImageGroup(
                                project?.imageGroups?.announcement || []
                              )
                            }
                            className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
                          >
                            Announcement System
                          </button>
                          <button
                            onClick={() =>
                              openImageGroup(
                                project?.imageGroups?.permission || []
                              )
                            }
                            className="bg-gray-900 text-white text-sm px-4 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
                          >
                            Permission
                          </button>
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
              {/* เนื้อหา Swiper */}
              <div className="p-4">
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
                      <div className="flex items-center justify-center h-[70vh]">
                        <img
                          src={img}
                          alt={`Image ${index + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
