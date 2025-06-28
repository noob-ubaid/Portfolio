import React from "react";
import Container from "../../shared/Container";
import { Typewriter } from "react-simple-typewriter";
import profile from "/edit.jpg"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
const Hero = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ubaidur-rahman01/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: FaLinkedin,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/UbaidurRah24983?t=dXrrCouR6TD9CaqpfD2DGQ&s=08",
      icon: FaTwitter,
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/noob-ubaid",
      icon: FaGithub,
    },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-12 my-16 md:my-24">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold text-gray-300">Hey, I'm</h2>
          <h1 className="my-4 font-bold text-4xl md:text-5xl text-main">
            Ubaidur Rahman
          </h1>
          <p className="text-4xl text-gray-300 font-semibold">
            I'm a
            <span className="ml-3 text-main">
              <Typewriter
                words={[
                  "MERN Stack developer",
                  "Frontend developer",
                  "Backend developer",
                ]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className="my-6 text-gray-300/70">
            I’m a passionate MERN Stack Developer with a focus on building
            clean, responsive web applications. I love turning ideas into
            real-world projects and continuously sharpening my skills to create
            user-friendly digital experiences.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  href={link.url}
                  key={link.id}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  target="_blank"
                  className="text-2xl bg-gray-700 p-2 rounded-full hover:bg-main/90 duration-300 hover:scale-[1.2] transition-all"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <img className="rounded-full" src={profile} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
