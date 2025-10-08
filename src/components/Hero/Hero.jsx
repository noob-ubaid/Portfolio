import React from "react";
import Container from "../../shared/Container";
import { FaFacebookSquare } from "react-icons/fa";
import profile from "/Profile.jpg";
import resume from "/Resume_of_Ubaidur_Rahman.pdf";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Virtues from "../Virtues/Virtues";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
import { FlipWords } from "../../shared/FlipWords";
const Hero = () => {
  const words = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
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
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/ubaidur.rahman.881781?rdid=KvGRqC7VQ5zQm27c&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FXDbMmv5i%2F#",
      icon: FaFacebookSquare,
    },
  ];
  return (
    <div id="home">
      <Container>
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-12 py-16 md:py-28 ">
          <div className="flex-1 flex items-center md:items-start justify-center gap-4 md:gap-6 flex-col">
            <motion.h2
              variants={fadeIn("down", 0.11)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              id="hey"
              className="md:text-4xl text-3xl hero-text font-semibold text-gray-300"
            >
              Hey, I'm
            </motion.h2>
            <motion.h1
              variants={fadeIn("up", 0.13)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              id="name"
              className=" font-bold hero-text text-3xl md:text-4xl lg:text-5xl text-main"
            >
              Ubaidur Rahman
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:text-4xl hero-text text-xl text-gray-300 font-semibold"
            >
              I'm a <FlipWords words={words} />
             
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.27)}
              initial="hidden"
              viewport={{ once: true }}
              whileInView="show"
              className="hero-text text-gray-300/70"
            >
              I’m a passionate MERN Stack Developer with a focus on building
              clean, responsive web applications. I love turning ideas into
              real-world projects and continuously sharpening my skills to
              create user-friendly digital experiences.
            </motion.p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    variants={fadeIn("up", `0.${index}`)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    key={link.id}
                  >
                    <div className="bg-gray-700 p-2 rounded-full animate-wiggle hover:animate-none hover:bg-main/80 duration-300 hover:scale-[1.1] shadow-[0px_0px_17px_var(--color-main)]  transition-all">
                      <Tooltip
                        slotProps={{
                          tooltip: {
                            sx: {
                              color: "#000",
                              backgroundColor: "#04ecf0",
                              fontSize: "0.875rem",
                              borderRadius: "0.375rem",
                              px: 1,
                              py: 0.5,
                            },
                          },
                          arrow: {
                            sx: {
                              color: "#04ecf0",
                            },
                          },
                        }}
                        title={link.name}
                        placement="top"
                        arrow
                      >
                        <a
                          href={link.url}
                          rel="noopener noreferrer"
                          aria-label={link.name}
                          target="_blank"
                          className="text-2xl"
                        >
                          <IconComponent />
                        </a>
                      </Tooltip>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <a
                href={resume}
                download="Resume_of_Ubaidur_Rahman.pdf"
                className="bg-main hover:bg-main/80 text-black px-6 py-2 rounded-md font-semibold transition-colors duration-300 mt-4 inline-flex items-center gap-2"
              >
                <FaArrowDown className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <motion.img
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-full select-none md:h-[400px] md:w-[400px] shadow-[0px_0px_55px_var(--color-main)] h-[320px] w-[320px] object-cover bg-center"
              src={profile}
              alt=""
            />
          </div>
        </div>
        {/* marquee  */}
        <Virtues />
      </Container>
    </div>
  );
};

export default Hero;
