import React, { useState, useEffect } from 'react';
import { PiStudentLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ scrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`flex justify-between items-center px-6 py-4 bg-[#2d2d2d] border-b border-[#444] sticky top-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo */}
      <div className="flex items-center gap-4">
        <PiStudentLight className="text-white text-3xl" />
       <label htmlFor=""> <h2 className="text-white text-sm font-bold tracking-wider uppercase">SmartPrep</h2></label>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
      <div className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-[#2d2d2d] md:bg-transparent ${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 md:gap-4 py-5 md:py-0 z-40`}>
        <ul className="flex flex-col md:flex-row gap-6 md:gap-4 list-none items-center">
          <li><button onClick={() => { scrollToSection(refs.heroRef); setMenuOpen(false); }} className="text-white text-base hover:text-[#d86129] transition duration-300">Home</button></li>
          <li><button onClick={() => { scrollToSection(refs.groupStudyRef); setMenuOpen(false); }} className="text-white text-base hover:text-[#d86129] transition duration-300">Services</button></li>
          <li><button onClick={() => { scrollToSection(refs.notesRef); setMenuOpen(false); }} className="text-white text-base hover:text-[#d86129] transition duration-300">Notes</button></li>
          <li><button onClick={() => { scrollToSection(refs.contactRef); setMenuOpen(false); }} className="text-white text-base hover:text-[#d86129] transition duration-300">Contact</button></li>
        </ul>
      </div>

      {/* Login Button */}
      <Link to="/login">
  <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
    Login
  </button>
</Link>

    </nav>
  );
};

export default Navbar;