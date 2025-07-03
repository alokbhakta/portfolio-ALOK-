import React, { useLayoutEffect, useRef } from "react";
import photo from "../Photoes/pic.jpeg";
import homeB from "./icons/home-50 black.png";
import custB from "./icons/customer-50 black.png";
import bagW from "./icons/briefcase-50 white.png";
import monitorB from "./icons/monitor-50 black.png";
import sentB from "./icons/sent-50 black.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page3({ scrollToSection }) {
  const pageRef = useRef(null);
  const sidebarRef = useRef(null);
  const headingRef = useRef(null);
  const eduBlocksRef = useRef([]);
  const techRef = useRef(null);

  const leftsideBar = useRef(null);
  const edu = useRef(null);
  const tech = useRef(null);

  eduBlocksRef.current = [];

  const addToEduRefs = (el) => {
    if (el && !eduBlocksRef.current.includes(el)) {
      eduBlocksRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
        },
      });

      tl.from(sidebarRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(leftsideBar.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(headingRef.current, {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        }, "-=0.5")
        .from(edu.current, {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        }, "-=0.5")
        .from(eduBlocksRef.current, {
          y: 50,
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        }, "-=0.3")
        .from(tech.current, {
          y: 50,
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.2,
        }, "-=0.3")
        .from(techRef.current, {
          opacity: 0,
          letterSpacing: "-0.3em",
          duration: 1.2,
          ease: "power2.out",
        }, "-=0.4");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="w-screen min-h-screen flex md:flex-row gap-4 overflow-hidden">
      {/* Sidebar (hidden on small screens) */}
      <div ref={sidebarRef} className="hidden md:flex w-[15%] h-screen flex-col">
        <div className="w-full h-[20%]">
          <img className="w-full h-full object-top" src={photo} alt="Alok" />
        </div>
        <div className="font-[hiThere] w-full h-full flex flex-col items-center gap-5 bg-[rgb(245,204,76)] p-4">
          <p className="text-4xl pr-3">.</p>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("home")} className="font-[hiThere] text-2xl cursor-pointer">Home</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("about")} className="font-[hiThere] text-2xl cursor-pointer">About Me</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("resume")} className="font-[hiThere] text-4xl text-white cursor-pointer">Resume</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("projects")} className="font-[hiThere] text-2xl cursor-pointer">Projects</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("contact")} className="font-[hiThere] text-2xl cursor-pointer">Contact</h2>
        </div>
      </div>
      {/* left sidebar */}
            <div ref={leftsideBar} className="w-[10%] h-[300px]  mt-50 flex md:absolute md:z-[-999]">
              <div className="w-full bg-[rgb(245,204,76)] flex flex-col items-center justify-around rounded-2xl p-2">
                <img onClick={() => scrollToSection("home")} src={homeB} alt="Home" />
                <img onClick={() => scrollToSection("about")} src={custB} alt="Customer" />
                <img onClick={() => scrollToSection("resume")} src={bagW} alt="Bag" />
                <img onClick={() => scrollToSection("projects")} src={monitorB} alt="Monitor" />
                <img onClick={() => scrollToSection("contact")} src={sentB} alt="Send" />
              </div>
            </div>

      {/* Main Content */}
      <div className="w-[90%] md:w-[85%] flex flex-col gap-6 px-4 py-6">
        <div className="w-full flex justify-center items-center">
          <h1
            ref={headingRef}
            className="font-[hiThere] text-4xl md:text-6xl border-2 border-dotted px-4 md:px-[50px] py-4 border-black text-[#FF6B00] text-center"
          >
            RESUME
          </h1>
        </div>

        <div ref={edu} className="flex flex-col gap-5">
          <h1 className="font-[hiThere] text-xl md:text-3xl">EDUCATION</h1>

          <div className="flex flex-wrap gap-6">
            <div ref={addToEduRefs} className="w-full md:w-[32%]">
              <h2 className="font-[hiThere] text-lg">Delhi Technical Campus, GGSIPU (2021–2025)</h2>
              <p className="font-serif">B.Tech in CSE (GPA: 8.3/10)</p>
            </div>
            <div ref={addToEduRefs} className="w-full md:w-[32%]">
              <h2 className="font-[hiThere] text-lg">Plato Public School (2020–2021)</h2>
              <p className="font-serif">Class 12th (77%)</p>
            </div>
            <div ref={addToEduRefs} className="w-full md:w-[32%]">
              <h2 className="font-[hiThere] text-lg">Plato Public School (2018–2019)</h2>
              <p className="font-serif">Class 10th (80%)</p>
            </div>
          </div>

          <h1 ref={tech} className="font-[hiThere] text-xl md:text-3xl mt-8">TECHNICAL SKILLS</h1>
          <h2 ref={techRef} className="font-[hiThere] text-base md:text-xl tracking-wide">
            C, C++, HTML, CSS, JavaScript, Sass, Tailwind, React.js, MySQL
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Page3;
