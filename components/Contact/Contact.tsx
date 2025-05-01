"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Skeleton } from "@/components/ui/skeleton";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_vs7ii27",
        "template_j16h7kn",
        form.current,
        "R5-PU5nVLE6bGHniG"
      )
      .then(
        () => {
          setLoading(false);
          setIsSuccess(true);
          form.current?.reset();
        },
        () => {
          setLoading(false);
          setIsSuccess(false);
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 1000);
  });
  return (
    <div className="w-full min-h-screen pt-44 container mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="px-8">
          <h1 className="text-4xl font-bold mb-2 mt-3">
            {loadingSkeleton ? (
              <Skeleton className="w-40 h-8 bg-gray-200" />
            ) : (
              "Contact"
            )}
          </h1>
          <div className="text-sm mb-8">
            {loadingSkeleton ? (
              <Skeleton className="w-60 h-6 bg-gray-200" />
            ) : (
              "Looking forward to hearing from you."
            )}
          </div>

          <div className="mb-6">
            <h2 className="font-semibold mb-1">
              {loadingSkeleton ? (
                <Skeleton className="w-24 h-6 bg-gray-200" />
              ) : (
                "Phone"
              )}
            </h2>
            <div className="text-sm">
              {loadingSkeleton ? (
                <Skeleton className="w-32 h-6 bg-gray-200" />
              ) : (
                "062-0758133"
              )}
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-1">
              {loadingSkeleton ? (
                <Skeleton className="w-24 h-6 bg-gray-200" />
              ) : (
                "Email"
              )}
            </h2>
            <div className="text-sm">
              {loadingSkeleton ? (
                <Skeleton className="w-48 h-6 bg-gray-200" />
              ) : (
                "kittipong.wong00@gmail.com"
              )}
            </div>
          </div>
        </div>
        <div className="p-6 rounded-sm">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">
                  {loadingSkeleton ? (
                    <Skeleton className="w-24 h-6 bg-gray-200" />
                  ) : (
                    "First Name *"
                  )}
                </label>
                {loadingSkeleton ? (
                  <Skeleton className="w-full h-12 bg-gray-200" />
                ) : (
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 border-black border rounded-lg"
                    required
                    disabled={loadingSkeleton}
                  />
                )}
              </div>
              <div>
                <label className="block text-sm mb-1">
                  {loadingSkeleton ? (
                    <Skeleton className="w-24 h-6 bg-gray-200" />
                  ) : (
                    "Last Name *"
                  )}
                </label>
                {loadingSkeleton ? (
                  <Skeleton className="w-full h-12 bg-gray-200" />
                ) : (
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 border-black border rounded-lg"
                    required
                    disabled={loadingSkeleton}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">
                  {loadingSkeleton ? (
                    <Skeleton className="w-24 h-6 bg-gray-200" />
                  ) : (
                    "Email *"
                  )}
                </label>
                {loadingSkeleton ? (
                  <Skeleton className="w-full h-12 bg-gray-200" />
                ) : (
                  <input
                    name="from_email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 border-black border rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loadingSkeleton}
                  />
                )}
              </div>
              <div>
                <label className="block text-sm mb-1">
                  {loadingSkeleton ? (
                    <Skeleton className="w-24 h-6 bg-gray-200" />
                  ) : (
                    "Subject"
                  )}
                </label>
                {loadingSkeleton ? (
                  <Skeleton className="w-full h-12 bg-gray-200" />
                ) : (
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 border-black border rounded-lg"
                    disabled={loadingSkeleton}
                  />
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">
                {loadingSkeleton ? (
                  <Skeleton className="w-24 h-6 bg-gray-200" />
                ) : (
                  "Message"
                )}
              </label>
              {loadingSkeleton ? (
                <Skeleton className="w-full h-28 bg-gray-200" />
              ) : (
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="w-full p-2 border-black border rounded-lg h-24"
                  disabled={loadingSkeleton}
                />
              )}
            </div>
            <input
              type="hidden"
              name="name"
              value={`${firstName} ${lastName}`}
            />
            <input type="hidden" name="title" value={subject} />
            <input type="hidden" name="to_email" value={email} />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            {loadingSkeleton ? (
              <Skeleton className="w-full h-14 rounded-full bg-gray-200" />
            ) : (
              <button
                type="submit"
                className="w-full bg-yellow-500 text-center py-3 rounded-full font-medium hover:bg-yellow-600 transition border-black border cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  "Submit"
                )}
              </button>
            )}
          </form>

          {/* Display success or failure message */}
          {isSuccess === true && (
            <p className="mt-4 text-green-500">Message sent successfully!</p>
          )}
          {isSuccess === false && (
            <p className="mt-4 text-red-500">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
