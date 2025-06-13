import React, { useRef } from 'react';
import Hero from './hero';
import Notes from './notes';
import Services from './services';
import Contact from './contact';
import Footer from './footer';
import Navbar from '../navbar'; 

const Home = () => {
  const heroRef = useRef(null);
  const notesRef = useRef(null);
  const groupStudyRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ heroRef, notesRef, groupStudyRef, contactRef }}
      />

      <div ref={heroRef}>
        <Hero />
      </div>
     
      <div ref={groupStudyRef}>
        <Services />
      </div>
      <div ref={notesRef}>
        <Notes />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div ref={notesRef}>
      </div>
      <Footer 
        scrollToSection={scrollToSection}
        refs={{ heroRef, notesRef, groupStudyRef, contactRef }}
      />
    </>
  );
};

export default Home;