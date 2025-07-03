import React, { useEffect, useLayoutEffect, useRef } from "react";
import photo from "../Photoes/pic.jpeg";
import homeB from "./icons/home-50 black.png";
import custW from "./icons/customer-50 white.png";
import bagB from "./icons/briefcase-50 black.png";
import monitorB from "./icons/monitor-50 black.png";
import sentB from "./icons/sent-50 black.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page2({ scrollToSection }) {
  const sectionRef = useRef(null);
  const sidebarRef = useRef(null);
  const headingRef = useRef(null);
  const aboutParaRef = useRef(null);
  const sectionRefs = useRef([]);

  const leftsideBar = useRef(null);
  const headline = useRef(null);
  const whatdo = useRef(null);

  sectionRefs.current = [];

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.from(sidebarRef.current, { x: -200, opacity: 0, duration: 1 })
        .from(leftsideBar.current, { x: -200, opacity: 0, duration: 1 })
        .from(
          headingRef.current,
          { scale: 0.8, opacity: 0, duration: 1 },
          "-=0.6"
        )
        .from(
          headline.current,
          { scale: 0.8, opacity: 0, duration: 1 },
          "-=0.6"
        )
        .from(
          aboutParaRef.current,
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
         .from(
          whatdo.current,
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.5"
        )
        .from(
          sectionRefs.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-screen min-h-screen flex md:flex-row gap-5 overflow-hidden relative"
    >
      {/* Sidebar (Hidden on small devices) */}
      <div
        ref={sidebarRef}
        className="hidden md:flex w-[15%] h-screen flex-col"
      >
        <div className="w-full h-[20%]">
          <img className="w-full h-full object-top" src={photo} alt="Alok" />
        </div>
        <div className="font-[hiThere] w-full h-full flex flex-col items-center gap-5 bg-[rgb(245,204,76)]">
          <p className="text-4xl pr-3">.</p>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("home")}
            className="font-[hiThere] text-2xl cursor-pointer"
          >
            Home
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("about")}
            className="font-[hiThere] text-4xl text-white cursor-pointer"
          >
            About Me
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("resume")}
            className="font-[hiThere] text-2xl cursor-pointer"
          >
            Resume
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("projects")}
            className="font-[hiThere] text-2xl cursor-pointer"
          >
            Projects
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("contact")}
            className="font-[hiThere] text-2xl cursor-pointer"
          >
            Contact
          </h2>
        </div>
      </div>
      {/* left sidebar */}
      <div ref={leftsideBar} className="w-[10%]  mt-50 flex md:absolute md:z-[-999]">
        <div className="w-full h-[50%] bg-[rgb(245,204,76)] flex flex-col items-center gap-10 pt-8 rounded-2xl p-2">
          <img onClick={() => scrollToSection("home")} src={homeB} alt="Home" />
          <img onClick={() => scrollToSection("about")} src={custW} alt="Customer" />
          <img onClick={() => scrollToSection("resume")} src={bagB} alt="Bag" />
          <img onClick={() => scrollToSection("projects")} src={monitorB} alt="Monitor" />
          <img onClick={() => scrollToSection("contact")} src={sentB} alt="Send" />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-[90%] md:w-[85%] min-h-screen flex flex-col gap-5 px-4 md:px-8 py-6">
        <div className="font-[hiThere] w-full flex items-center justify-center">
          <h1
            ref={headingRef}
            className="text-4xl md:text-7xl px-4 md:px-20 py-6 border-2 border-dotted border-black text-[#FF6B00] text-center"
          >
            ABOUT ME
          </h1>
        </div>

        <h2 ref={headline} className="text-base md:text-xl text-center md:text-left">
          I'm <span className="font-[hiThere] text-[#007BFF]">Alok Kumar Bhakta,</span>{" "}
          Frontend Developer | Passionate Frontend Developer | Turning Ideas
          into Responsive Web Experiences
        </h2>

        <div className="w-full max-w-[1000px]">
          <p 
            ref={aboutParaRef}
            className="font-serif text-sm md:text-[18px] leading-relaxed"
          >
            I’m a motivated and detail-oriented frontend developer with a strong
            foundation in HTML, CSS, JavaScript, and basic React.js. Currently
            pursuing a B.Tech in Computer Science (GPA: 8.3), I thrive on
            building responsive, user-friendly web interfaces that blend
            functionality with clean design. Through interactive projects like
            web-based games and responsive sites, I’ve honed my skills and
            creativity. I’m eager to contribute to real-world projects and
            continuously learn modern web technologies to grow as a professional
            in the tech industry.
          </p>
        </div>

        <h2 ref={whatdo} className="font-[hiThere] text-xl md:text-2xl mt-4">What I Do ?</h2>

        <div className="w-full flex flex-wrap gap-6">
          <div ref={addToRefs} className="w-full md:w-[30%]">
            <h1 className="font-[hiThere]">
              1. Develop Responsive Web Interfaces:
            </h1>
            <p className="font-serif">
              I design and build user-friendly, mobile-first websites using
              HTML, CSS, JavaScript, and React.js that adapt smoothly across
              devices.
            </p>
          </div>
          <div ref={addToRefs} className="w-full md:w-[30%]">
            <h1 className="font-[hiThere]">
              2. Create Interactive Web Applications:
            </h1>
            <p className="font-serif">
              I've built games like Find Your Name and Bubbles Game, showcasing
              my ability to use logic, DOM manipulation, and event handling to
              create engaging user experiences.
            </p>
          </div>
          <div ref={addToRefs} className="w-full md:w-[30%]">
            <h1 className="font-[hiThere]">
              3. Continuously Learn & Apply Modern Tech:
            </h1>
            <p className="font-serif">
              With knowledge of Tailwind CSS, Sass, and a drive to learn, I'm
              actively improving my frontend skills and applying them in
              real-world projects hosted on platforms like GitHub and Netlify.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Page2;
