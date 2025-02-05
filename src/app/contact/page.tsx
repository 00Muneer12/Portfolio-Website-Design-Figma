import React from "react";

const Contact = () => {
  return (
    <section className="bg-slate-100 text-gray-900 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">Get in Touch</h1>
          <p className="mt-2 text-lg text-gray-600">
            Feel free to reach out. We would love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your Message..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gray-700">Contact Email:</p>
          <a
            href="mailto:gmugsk@email.com"
            className="text-blue-600 text-lg hover:underline"
          >
            gmugsk@email.com
          </a>

          <p className="mt-4 text-lg font-semibold text-gray-700">Address:</p>
          <p className="text-gray-600">Latifabad No. 09, Hyderabad</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
