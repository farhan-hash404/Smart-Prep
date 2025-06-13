import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer({ scrollToSection, refs }) {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About SmartPrep</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              At SmartPrep, we're dedicated to empowering students and lifelong learners with the tools and support they need to succeed.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">Email: farhan43509@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +92 334 91-84-114</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection(refs.heroRef)} 
                  className="hover:text-white cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(refs.notesRef)} 
                  className="hover:text-white cursor-pointer"
                >
                  Notes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(refs.groupStudyRef)} 
                  className="hover:text-white cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection(refs.contactRef)} 
                  className="hover:text-white cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/muhammad-farhan-5164a227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://github.com/farhan-hash404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/farhan_wzr?igsh=MTd6end3N254bWRuNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 border-t border-gray-700 pt-5">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SmartPrep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;