import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen pt-44 container mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Contact information */}
        <div className="px-8">
          <h1 className="text-4xl font-bold mb-2 mt-3">Contact</h1>
          <p className="text-sm mb-8">Looking forward to hearing from you.</p>

          <div className="mb-6">
            <h2 className="font-semibold mb-1">Phone</h2>
            <p className="text-sm">123-456-7890</p>
          </div>

          <div>
            <h2 className="font-semibold mb-1">Email</h2>
            <p className="text-sm">info@mysite.com</p>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="p-6 rounded-sm">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">First Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border-black border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Last Name *</label>
                <input
                  type="text"
                  className="w-full p-2 border-black border rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full p-2 border-black border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border-black border rounded-lg"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full p-2  border-black border rounded-lg h-24" />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-center py-3 rounded-full font-medium hover:bg-yellow-600 transition border-black border cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
