import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "../Photoes/pic.jpeg";
import homeB from "./icons/home-50 black.png";
import custB from "./icons/customer-50 black.png";
import bagB from "./icons/briefcase-50 black.png";
import monitorW from "./icons/monitor-50 white.png";
import sentB from "./icons/sent-50 black.png";
import windows from "/src/pages/images/windowsUi.png";
import findName from "/src/pages/images/FindName.png";
import Bubbles from "/src/pages/images/BubbulesGame.png";
import res1 from "/src/pages/images/Res1.png";
import res2 from "/src/pages/images/Res2.png";
import colGene from "/src/pages/images/ColorGredient.png";
import Aichat from "/src/pages/images/AiChat.png";
import { imageGen, imageGallery, ytThumbnail } from "./images/Images";

gsap.registerPlugin(ScrollTrigger);

function Page4({ scrollToSection }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const sidebarRef = useRef(null);
  const projectRefs = useRef([]);

  const leftsideBar = useRef(null);

  projectRefs.current = [];

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(sidebarRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftsideBar.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(headingRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(projectRefs.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projectData = [
    {
      title: "Full Stack Zero-Gpt",
      img: Aichat,
      live: "https://zero-gpt-frontend.vercel.app/",
      github: "https://github.com/alokbhakta/Zero-Gpt-Backend",
    },
    {
      title: "YT Thumbnail Download",
      img: ytThumbnail,
      live: "https://yt-thumbnail-downloder.netlify.app/",
      github: "https://github.com/alokbhakta/YT-Thumbnail-Downloader",
    },
    {
      title: "Images Gallery",
      img: imageGallery,
      live: "https://find-imagein-gallery.netlify.app/",
      github: "https://github.com/alokbhakta/Image-Gallery",
    },
    {
      title: "Avatar Images Generation",
      img: imageGen,
      live: "https://calm-taiyaki-ec1466.netlify.app/",
      github: "https://github.com/alokbhakta/Avatar-image-generation",
    },
    {
      title: "Colour Gradient Generate",
      img: colGene,
      live: "https://colour-gradient-generator.netlify.app/",
      github: "https://github.com/alokbhakta/Generate-Colour-Gradient",
    },
    {
      title: "Windows 10 Ui/Ux Operating system",
      img: windows,
      live: "https://prismatic-croissant-c31a26.netlify.app/",
      github: "https://github.com/alokbhakta/window-ui-project",
    },
    {
      title: "Find Your Name Game",
      img: findName,
      live: "https://superlative-youtiao-504436.netlify.app/",
      github: "https://github.com/alokbhakta/Find-your-name",
    },
    {
      title: "Bubbles Game",
      img: Bubbles,
      live: "https://cosmic-pothos-fbfe49.netlify.app/",
      github: "https://github.com/alokbhakta/bubbles_game",
    },
    {
      title: "Website 1 Ui",
      img: res1,
      live: "https://marvelous-queijadas-1afa68.netlify.app/",
      github: "https://github.com/alokbhakta/Responsive_website_",
    },
    {
      title: "Website 2 Ui",
      img: res2,
      live: "https://ornate-twilight-2ac17a.netlify.app/",
      github: "https://github.com/alokbhakta/ResponsiveWebsite2",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-screen min-h-screen flex md:flex-row overflow-hidden"
    >
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="hidden md:flex w-[15%] h-screen flex-col"
      >
        <div className="w-full h-[20%]">
          <img className="w-full h-full object-top" src={photo} alt="Alok" />
        </div>
        <div className="font-[hiThere] w-full h-full flex flex-col items-center gap-4 bg-[rgb(245,204,76)] p-4">
          <p className="text-4xl pr-3">.</p>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("home")} className="text-2xl cursor-pointer">Home</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("about")} className="text-2xl cursor-pointer">About Me</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("resume")} className="text-2xl cursor-pointer">Resume</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("projects")} className="text-4xl text-white cursor-pointer">Projects</h2>
          <span className="rotate-90">. . . .</span>
          <h2 onClick={() => scrollToSection("contact")} className="text-2xl cursor-pointer">Contact</h2>
        </div>
      </div>
      {/* left sidebar */}
                  <div ref={leftsideBar} className="w-[10%] h-[300px] mt-50 flex md:absolute md:z-[-999]">
                    <div className="w-full bg-[rgb(245,204,76)] flex flex-col items-center justify-around rounded-2xl p-2">
                      <img onClick={() => scrollToSection("home")} src={homeB} alt="Home" />
                      <img onClick={() => scrollToSection("about")} src={custB} alt="Customer" />
                      <img onClick={() => scrollToSection("resume")} src={bagB} alt="Bag" />
                      <img onClick={() => scrollToSection("projects")} src={monitorW} alt="Monitor" />
                      <img onClick={() => scrollToSection("contact")} src={sentB} alt="Send" />
                    </div>
                  </div>

      {/* Main Section */}
      <div className="w-[90%] md:w-[85%] flex flex-col gap-6 px-4 py-6 overflow-hidden">
        {/* Heading */}
        <div className="w-full flex justify-center items-center">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-7xl font-[hiThere] border-2 border-dotted px-6 py-4 border-black text-[#FF6B00] text-center"
          >
            PROJECTS
          </h1>
        </div>

        {/* Project List */}
        <div className="w-full h-[78vh] overflow-y-auto flex flex-wrap gap-6 justify-center">
          {projectData.map((project, index) => (
            <div
              key={index}
              ref={addToProjectRefs}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[24%] flex flex-col gap-3 bg-gray-50 p-3 rounded-xl shadow-md"
            >
              <h1 className="font-[hiThere] text-lg">{project.title}</h1>
              <div className="w-full">
                <img className="w-full h-40 object-cover rounded-md" src={project.img} alt={project.title} />
              </div>
              <div className="flex justify-center mt-2">
                <button
                  onClick={() => window.open(project.live, "_blank")}
                  className="bg-yellow-500 px-3 py-1 rounded-lg text-white font-bold cursor-pointer"
                >
                  Live Link
                </button>
                {/* <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="bg-yellow-500 px-3 py-1 rounded-lg text-white font-bold"
                >
                  GitHub
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page4;
