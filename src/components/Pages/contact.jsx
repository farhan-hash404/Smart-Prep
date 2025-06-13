import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaEnvelope,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-green-500 p-4">
      
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">📞 Get in Touch</h1>

      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Section - Contact Info */}
          <div className="md:w-2/5 bg-gradient-to-b from-amber-500 to-orange-300 p-5 md:p-6 text-white">
            <div className="flex flex-col h-full">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Get in Touch</h2>
                <p className="text-xs md:text-sm opacity-90 mb-4">
                  Have questions or suggestions? We'd love to hear from you.
                </p>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <div className="p-1.5 bg-amber-600 rounded-full">
                  <FaEnvelope className="text-white text-xs md:text-sm" />
                </div>
                <span className="text-xs md:text-sm">contact@example.com</span>
              </div>

              <div className="mt-auto">
                <h3 className="font-semibold mb-2 text-xs md:text-sm">Connect with us</h3>
                <div className="flex space-x-2">
                  <a
                    href="https://www.linkedin.com/in/muhammad-farhan-5164a227a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-amber-600 rounded-full hover:bg-amber-700 transition"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-xs md:text-sm" />
                  </a>
                  <a
                    href="https://github.com/farhan-hash404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-gray-800 rounded-full hover:bg-black transition"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xs md:text-sm" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-amber-700 rounded-full hover:bg-amber-800 transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xs md:text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/farhan_wzr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 bg-pink-600 rounded-full hover:bg-pink-700 transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xs md:text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="md:w-3/5 p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Send us a message</h2>
            <form className="space-y-2 md:space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full px-3 py-1.5 text-xs md:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-2 text-xs md:text-sm rounded-lg hover:bg-amber-700 transition duration-300 font-medium flex items-center justify-center space-x-1.5"
              >
                <FaPaperPlane className="text-xs" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
