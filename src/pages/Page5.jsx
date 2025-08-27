import React, { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "../Photoes/pic.jpeg";
import homeB from "./icons/home-50 black.png";
import custB from "./icons/customer-50 black.png";
import bagB from "./icons/briefcase-50 black.png";
import monitorB from "./icons/monitor-50 black.png";
import sentW from "./icons/sent-50 white.png";
import SocialLinks from "./SocialLinks";

gsap.registerPlugin(ScrollTrigger);

function Page5({ scrollToSection }) {
  const pageRef = useRef(null);
  const sidebarRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const socialRef = useRef(null);

  const leftsideBar = useRef(null);

  const textRef = useRef(null);


  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(sidebarRef.current, {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: pageRef.current,
  //         start: "top 80%",
  //       },
  //     });

  //     gsap.from(leftsideBar.current, {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: pageRef.current,
  //         start: "top 80%",
  //       },
  //     });

  //     gsap.from(headingRef.current, {
  //       scale: 0.8,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "back.out(1.7)",
  //       scrollTrigger: {
  //         trigger: pageRef.current,
  //         start: "top 80%",
  //       },
  //     });
  //     // Typing Effect for textRef
  //     const text =
  //       "Thank you for visiting my portfolio! I'm actively looking for exciting opportunities in frontend development and UI/UX design. If you're a recruiter, hiring manager, or someone looking to collaborate on a project, I’d love to hear from you. Feel free to connect with me through my social platforms below. I regularly check my messages and respond promptly. Whether it’s a job offer, internship opportunity, freelance project, or just professional networking—I’m always open to meaningful connections.";

  //     textRef.current.innerText = "";

  //     text.split("").forEach((char, i) => {
  //       gsap.to(
  //         {},
  //         {
  //           duration: 0.01, // typing speed (smaller = faster)
  //           onComplete: () => {
  //             textRef.current.innerHTML += char;
  //           },
  //         },
  //         "+=0" // keeps typing smooth
  //       );
  //     });


  //     gsap.from(socialRef.current?.children || [], {
  //       opacity: 0,
  //       y: 20,
  //       duration: 1,
  //       stagger: 0.2,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: socialRef.current,
  //         start: "top 85%",
  //       },
  //     });
  //   }, pageRef);

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top 80%",
        
      },
    });

    tl.from(sidebarRef.current, { x: -100, opacity: 0, duration: 1 })
      .from(leftsideBar.current, { x: -100, opacity: 0, duration: 1 }, "-=0.7")
      .from(headingRef.current, { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.5");

    // Typing Effect for textRef
    const text =
      "Thank you for visiting my portfolio! I am actively seeking opportunities in Frontend Development, Backend Development, and Full-Stack Engineering. Whether you’re a recruiter, hiring manager, or collaborator, I’d be glad to connect. You can reach me through my social platforms below—I regularly check messages and respond promptly. Be it a full-time role, internship, freelance project, or professional collaboration, I am always open to meaningful opportunities and creating impactful digital solutions.";

    textRef.current.innerText = "";

    text.split("").forEach((char, i) => {
      tl.to(
        {},
        {
          duration: 0.01,
          onComplete: () => {
            textRef.current.innerHTML += char;
          },
        },
        "+=0"
      );
    });

    tl.fromTo(
  socialRef.current.children,
  { opacity: 0, y: -20 },
  { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power2.out" }
);
  }, pageRef);

  return () => ctx.revert();
}, []);

  return (
    <div
      ref={pageRef}
      className="w-full min-h-screen flex md:flex-row overflow-hidden"
    >
      {/* Sidebar - only shows on md and above */}
      <aside
        ref={sidebarRef}
        className="hidden md:flex w-full md:w-[15%] h-auto md:h-screen flex-col"
      >
        <div className="w-full h-[200px] md:h-[20%]">
          <img className="w-full h-full object-top" src={photo} alt="Alok" />
        </div>
        <div className="font-[hiThere] w-full h-full flex flex-col items-center gap-5 bg-[rgb(245,204,76)] p-4">
          <p className="text-4xl">.</p>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("home")}
            className="text-xl md:text-2xl cursor-pointer"
          >
            Home
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("about")}
            className="text-xl md:text-2xl cursor-pointer"
          >
            About Me
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("resume")}
            className="text-xl md:text-2xl cursor-pointer"
          >
            Resume
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("projects")}
            className="text-xl md:text-2xl cursor-pointer"
          >
            Projects
          </h2>
          <span className="rotate-90">. . . .</span>
          <h2
            onClick={() => scrollToSection("contact")}
            className="text-2xl md:text-4xl text-white cursor-pointer"
          >
            Contact
          </h2>
        </div>
      </aside>
      {/* left sidebar */}
      <div
        ref={leftsideBar}
        className="w-[10%] h-[300px] mt-50 flex md:absolute md:z-[-999]"
      >
        <div className="w-full bg-[rgb(245,204,76)] flex flex-col items-center justify-around rounded-2xl p-2">
          <img onClick={() => scrollToSection("home")} src={homeB} alt="Home" />
          <img
            onClick={() => scrollToSection("about")}
            src={custB}
            alt="Customer"
          />
          <img onClick={() => scrollToSection("resume")} src={bagB} alt="Bag" />
          <img
            onClick={() => scrollToSection("projects")}
            src={monitorB}
            alt="Monitor"
          />
          <img
            onClick={() => scrollToSection("contact")}
            src={sentW}
            alt="Send"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="w-[90%] md:w-[85%] flex flex-col px-4 py-8 gap-8">
        <div className="flex justify-center items-center">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-5xl md:text-6xl font-[hiThere] border-2 border-dotted px-6 py-4 border-black text-[#FF6B00] text-center"
          >
            CONTACT ME
          </h1>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl">
          Feel <span className="font-[hiThere]">Free</span> to contact me!
        </h1>

        <p
          ref={textRef}
          // ref={paraRef}
          className="text-base h-[275px] sm:text-lg md:text-xl"
        >
          Thank you for visiting my portfolio! I am actively seeking
          opportunities in Frontend Development, Backend Development, and
          Full-Stack Engineering. Whether you’re a recruiter, hiring manager, or
          collaborator, I’d be glad to connect. You can reach me through my
          social platforms below—I regularly check messages and respond
          promptly. Be it a full-time role, internship, freelance project, or
          professional collaboration, I am always open to meaningful
          opportunities and creating impactful digital solutions.
        </p>

        <h1 className="text-lg pt-5 sm:text-xl md:text-2xl font-semibold">
          You can find me on these platforms:
        </h1>

        <div>
          <SocialLinks ref={socialRef} />
        </div>
      </main>
    </div>
  );
}

export default Page5;
