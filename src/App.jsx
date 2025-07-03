import React, { useRef } from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll-to-section function
  const scrollToSection = (section) => {
    const map = {
      home: homeRef,
      about: aboutRef,
      resume: resumeRef,
      projects: projectsRef,
      contact: contactRef
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      
      <section ref={homeRef}><Page1 scrollToSection={scrollToSection} /></section>
      <hr className='opacity-[0.2] pb-5' />
      <section ref={aboutRef}><Page2 scrollToSection={scrollToSection} /></section>
      <hr className='opacity-[0.2] pb-5' />
      <section ref={resumeRef}><Page3 scrollToSection={scrollToSection} /></section>
      <hr className='opacity-[0.2] pb-5' />
      <section ref={projectsRef}><Page4 scrollToSection={scrollToSection} /></section>
      <hr className='opacity-[0.2] pb-5' />
      <section ref={contactRef}><Page5 scrollToSection={scrollToSection} /></section>
      
      

    </div>
    
  );
}

export default App;
