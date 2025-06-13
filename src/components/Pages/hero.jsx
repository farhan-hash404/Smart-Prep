import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const notesRef = useRef(null);

  const scrollToNotes = () => {
    notesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="w-full bg-orange-200 min-h-screen flex items-center justify-center pt-4 md:pt-8 px-4 md:px-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">

          {/* Text Section */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-3 md:mb-5">
              Welcome to <span className="text-orange-600">Smarter Learning</span><br />
              and a Brighter Future
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-5 md:mb-7">
              Empowering students with smart tools, collaborative learning, and AI-driven study solutions — all in one place.
            </p>
            <div className="flex justify-center md:justify-start">
              <button 
                onClick={scrollToNotes}
                className="bg-green-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                Explore Now 
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:max-w-md">
            <img
              src="./src/assets/1.png"
              alt="Smart learning illustration"
              className="w-full h-auto object-cover aspect-video rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-300"
            />
          </div>
        </div>
      </section>

      <div ref={notesRef}>
      </div>
    </>
  );
};

export default Home;