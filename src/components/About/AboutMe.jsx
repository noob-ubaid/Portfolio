import React from "react";
import Container from "../../shared/Container";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/animation.json";
import { fadeIn } from "../../shared/Variants";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div id="about">
      <Container>
        <motion.h2
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-main text-center font-semibold pt-24  md:pt-24"
        >
          About Me
        </motion.h2>
        <div className="flex items-center justify-between gap-12 flex-col-reverse lg:flex-row-reverse">
          <div className="flex-1 flex-col flex items-center justify-center gap-4">
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" text-gray-300/70"
            >
              Hi, I’m Ubaidur Rahman, a 17-year-old web developer. I started my
              development journey by building small frontend projects with HTML,
              CSS, and JavaScript, later moving into the MERN stack to build
              dynamic web apps. I enjoy creating user-friendly interfaces and
              solving real-world problems through code.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" text-gray-300/70"
            >
              I love frontend development and making designs interactive, but I
              also enjoy building full-stack apps and working with APIs to
              create complete products.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" text-gray-300/70"
            >
              Outside programming, I enjoy playing football, exploring tech
              content, and sketching simple art to refresh my mind.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className=" text-gray-300/70"
            >
              I’m a curious learner who loves building practical solutions and
              sharing knowledge while continuously improving as a developer.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-1 w-full  items-center justify-center"
          >
            <Lottie
              animationData={codingAnimation}
              className="md:h-[450px] md:w-[450px] h-[270px] w-[270px]"
              loop={true}
            />
          </motion.div>
        </div>
        <div className="bg-main blur-[200px] hidden md:block  size-36 absolute top-[1350px] right-2"></div>
        <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[2550px] right-6"></div>
        <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[3150px] left-6"></div>
        <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[3650px] right-6"></div>
        <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[4450px] left-6"></div>
        <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[4950px] right-6"></div>
      </Container>
    </div>
  );
};

export default AboutMe;
