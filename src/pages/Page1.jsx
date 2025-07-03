import React, { useEffect, useRef } from "react";
import photo from "../Photoes/pic.jpeg";
import { gsap } from "gsap";

function Page1({ scrollToSection }) {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const tagRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  const textRef = useRef(null);
  useEffect(() => {
    const text = textRef.current.innerText;
    let chars = text.split("");
    let timeline = gsap.timeline({ delay: 2 });

    // Clear content first
    textRef.current.innerText = "";
    chars.forEach((char, i) => {
      timeline.to(textRef.current, {
        duration: 0.05,
        onComplete: () => {
          textRef.current.innerHTML += char;
        },
      });
    });
  }, []);

  useEffect(() => {
    const runAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heading1Ref.current, { y: -50, opacity: 0, duration: 1 })
        .from(heading2Ref.current, { y: -50, opacity: 0, duration: 1 }, "-=0.5")
        .from(tagRef.current, { x: -50, opacity: 0, scale: 0.5, duration: 1 }, "-=0.4")
        .from(imageRef.current, {
          opacity: 0,
          scale: 0.5,
          x: 100,
          duration: 1.9,
          ease: "power4.out",
        }, "-=0.3")
        .from(paraRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(btnRef.current, { scale: 0.2, opacity: 0, duration: 2, delay: 12.5 }, "-=1");
        
    };

    if (document.readyState === "complete") {
      runAnimation();
    } else {
      window.addEventListener("load", runAnimation);
    }

    return () => window.removeEventListener("load", runAnimation);
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
          ref={tagRef}
          className="w-full max-w-[400px] bg-[#FF6B00] rounded-xl"
        >
          <h2 className="font-[hiThere] text-white text-base md:text-lg pl-4 py-2">
            FRONTEND DEVELOPER & UI/UX
          </h2>
        </div>

        <div ref={paraRef} className="w-full h-[114px] max-w-[600px]">
          <p ref={textRef} className="font-serif text-sm md:text-base leading-relaxed">
            Enthusiastic and detail-oriented frontend developer with a strong
            foundation in HTML, CSS, JavaScript and React.js. Passionate about
            building responsive and user-friendly websites. Eager to apply my
            skills to real-world projects and continue learning modern web
            technologies.
          </p>
        </div>

        <div>
          <button
          onClick={() => scrollToSection("about")}
            ref={btnRef}
            className="bg-yellow-500 px-4 py-2 rounded-2xl text-white font-bold cursor-pointer relative z-10 mt-6"
          >
            MORE ABOUT ME
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[40%] h-[500px] md:h-screen pr-4 flex items-center justify-center">
        <img
          ref={imageRef}
          className="rounded-xl object-cover w-[70%] md:w-[90%] max-h-[80vh]"
          src={photo}
          alt="Alok"
        />
      </div>
    </div>
  );
}

export default Page1;
