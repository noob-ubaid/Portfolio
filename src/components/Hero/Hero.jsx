import React from "react";
import Container from "../../shared/Container";
import { Typewriter } from "react-simple-typewriter";
import profile from "/Profile.jpg";
import resume from "/Resume_of_Ubaidur_Rahman.pdf";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
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
    {
      id: 3,
      name: "Email",
      url: "https://github.com/noob-ubaid",
      icon: MdOutlineMailOutline,
    },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-12 my-16 md:my-24">
        <div className="flex-1 flex items-center md:items-start justify-center gap-6 flex-col">
          <h2 className="text-4xl font-semibold text-gray-300">Hey, I'm</h2>
          <h1 className=" font-bold text-4xl md:text-5xl text-main">
            Ubaidur Rahman
          </h1>
          <p className="md:text-4xl text-3xl text-gray-300 font-semibold">
            I'm a
            <span className="ml-3 text-main">
              <Typewriter
                words={[
                  "MERN Stack developer",
                  "Frontend developer",
                  "Backend developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className=" text-gray-300/70">
            I’m a passionate MERN Stack Developer with a focus on building
            clean, responsive web applications. I love turning ideas into
            real-world projects and continuously sharpening my skills to create
            user-friendly digital experiences.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  href={link.url}
                  key={link.id}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  target="_blank"
                  className="text-2xl bg-gray-700 p-2 rounded-full animate-wiggle hover:animate-none hover:bg-main/80 duration-300 hover:scale-[1.1] shadow-[0px_0px_17px_var(--color-main)]  transition-all"
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
          <a
            href={resume}
            download="Ubaidur_Rahman_Resume.pdf"
            className="bg-main hover:bg-main/80 text-black px-6 py-2 rounded-md font-semibold transition-colors duration-300 mt-4 inline-flex items-center gap-2"
          >
            <FaArrowDown className="w-5 h-5" />
            Download Resume
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            className="rounded-full md:h-[400px] md:w-[400px] shadow-[0px_0px_35px_var(--color-main)] h-[330px] w-[330px] object-cover bg-top"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
