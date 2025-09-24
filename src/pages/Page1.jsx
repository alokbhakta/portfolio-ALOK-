import React, { useEffect, useRef } from "react";
import photo from "../Photoes/pic.jpeg";
import { gsap } from "gsap";

function Page1({ scrollToSection }) {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const tagdiv = useRef(null);
  const tagRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  const textRef = useRef(null);
 
  useEffect(() => {
    const runAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heading1Ref.current, { y: -50, opacity: 0, duration: 1 })
        .from(heading2Ref.current, { y: -50, opacity: 0, duration: 1 }, "-=0.5")
        .from(
          tagdiv.current,
          { x: -50, opacity: 0, scale: 0.5, duration: 1 },
          "-=0.4"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.5,
            x: 100,
            duration: 1.9,
            ease: "power4.out",
          },
          "-=0.3"
        );

      // Typing Effect for textRef
      const text =
        "Enthusiastic Full-Stack Developer with expertise in JavaScript, C++, and modern web technologies. Skilled in building responsive applications using HTML, CSS, Sass, React.js, GSAP, and proficient in backend development with Node.js, Express.js, REST APIs, WebSockets, and authentication (JWT, Passport.js). Experienced with MongoDB, Redis, Git/GitHub, Docker, Kubernetes, Postman, and eager to apply skills to impactful real-world projects while continuously learning the latest trends.";;

      textRef.current.innerText = "";

      text
        .split("")
        .forEach((char, i) => {
          tl.to(
            {},
            {
              duration: 0.01, // typing speed (smaller = faster)
              onComplete: () => {
                textRef.current.innerHTML += char;
              },
            },
            "+=0" // keeps typing smooth
          );
        })

        tl.from(
          btnRef.current,
          { scale: 0.2, opacity: 0, duration: 1 },
          "=0.2"
        );
    };

    if (document.readyState === "complete") {
      runAnimation();
    } else {
      window.addEventListener("load", runAnimation);
    }

    return () => window.removeEventListener("load", runAnimation);
  }, []);

  useEffect(() => {
    const titles = [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack(MERN) Developer",
    ];

    const tl = gsap.timeline({ repeat: -1 }); // infinite repeat

    titles.forEach((title) => {
      tl.to(tagRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          tagRef.current.innerHTML = title; // change text when hidden
        },
      })
        .to(tagRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .to(tagRef.current, { duration: 1.5 }); // hold before next change
    });
  }, []);

  // Magnet effect
  useEffect(() => {
    const btn = btnRef.current;
    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 150;

      if (distance < maxDistance) {
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          ease: "power3.out",
          duration: 0.3,
        });
      } else {
        gsap.to(btn, { x: 0, y: 0, ease: "power3.out", duration: 0.3 });
      }
    };

    const onMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, ease: "power3.out", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white flex flex-col md:flex-row overflow-hidden relative">
      {/* Left Content */}
      <div className="w-full md:w-[60%] flex flex-col gap-5 pt-10 px-6 md:pt-[9%] md:pl-[12%]">
        <h1
          ref={heading1Ref}
          className="font-[hiThere] text-3xl md:text-5xl tracking-tight"
        >
          HI THERE!
        </h1>

        <h1
          ref={heading2Ref}
          className="text-5xl md:text-7xl tracking-tight font-[hiThere]"
        >
          I'M{" "}
          <span className="font-[inline] text-[#007BFF] tracking-normal font-light">
            ALOK
          </span>
        </h1>

        <div
          ref={tagdiv}
          className="w-full max-w-[320px] bg-[#FF6B00] rounded-xl"
        >
          <h2 ref={tagRef} className="font-[hiThere] text-white text-xl md:text-xl pl-4 py-2">
            FULL STACK(MERN) DEVELOPER
          </h2>
        </div>

        <div ref={paraRef} className="w-full h-[228px] max-w-[600px]">
          <p
            ref={textRef}
            className="font-serif text-sm md:text-base leading-relaxed"
          >
            Enthusiastic Full-Stack Developer with expertise in <b>JavaScript</b>,<b> C++</b>,
            and modern web technologies. Skilled in building responsive
            applications using <b>HTML</b>, <b> CSS</b>, <b> Sass</b>, <b> React.js</b>, <b> GSAP</b>, and proficient
            in backend development with <b>Node.js</b>, <b>Express.js</b>, <b>REST APIs</b>,
            <b> WebSockets</b>, and <b> Authentication</b> (JWT, Passport.js). Experienced with
            <b> MongoDB</b>, <b> Redis</b>, <b> Git/GitHub</b>, <b> Docker</b>, <b> Kubernetes</b>, <b> Postman</b>, and eager
            to apply skills to impactful real-world projects while continuously
            learning the latest trends.
          </p>
        </div>

        <div>
          <button
            onClick={() => scrollToSection("about")}
            ref={btnRef}
            className="bg-yellow-500 px-4 py-2 rounded-2xl text-white font-bold cursor-pointer relative z-10 mt-3"
          >
            MORE ABOUT ME
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[40%] h-[400px] md:h-screen pr-4 flex items-center justify-center">
        <img
          ref={imageRef}
          className="rounded-xl object-cover w-[300px] md:w-[500px]"
          src={photo}
          alt="Alok"
        />
      </div>
    </div>
  );
}

export default Page1;
