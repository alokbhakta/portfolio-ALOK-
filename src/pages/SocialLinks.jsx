import React, { forwardRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialLinks = forwardRef((props, ref) => {
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={50} />,
      url: "https://www.linkedin.com/in/alok-bhakta-7b3a21209/",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={50} />,
      url: "https://github.com/alokbhakta",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={50} />,
      url: "https://www.instagram.com/alokbhakta02/",
    },
     {
      name: "Gmail",
      icon: <SiGmail size={50} />,
      url: "mailto:alokbhakta2018@gmail.com", // Replace with your Gmail
    },
  ];

  return (
    <div ref={ref} className="flex gap-6 justify-start">
      {socialMedia.map((media, index) => (
        <a
          key={index}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-yellow-500 transition duration-300"
          title={`Visit my ${media.name}`}
        >
          {media.icon}
        </a>
      ))}
    </div>
  );
});

export default SocialLinks;
