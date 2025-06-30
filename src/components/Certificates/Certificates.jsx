import React from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import img from "/certificate.png";
import pdf from "/pdf.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
const Certificates = () => {
  const skill = [
    "HTML",
    "CSS",
    "Tailwind css",
    "JavaScript",
    "React js",
    "React Router",
    "Tanstack Query",
    "GSAP",
    "Framer Motion",
  ];
  return (
    <div id="certificate">
      <Container>
        <Title title="Certificate" />
        <motion.p
          variants={fadeIn("right", 0.15)}
          initial="hidden"
          whileInView="show"
          className="text-gray-300/70 max-w-4xl mx-auto text-center"
        >
          I believe in continuous learning to sharpen and strengthen my web
          development skills, building a solid foundation for my career, and
          here is a certification I’ve proudly earned so far as part of my
          growth journey.
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          whileInView="show"
          className="flex items-center flex-col mt-6 md:mt-10 lg:flex-row border border-main/40 p-4 md:p-8 rounded-md gap-8 md:gap-12"
        >
          <div className="flex-1">
            <img
              className="rounded-md md:h-[400px]  h-auto object-cover w-auto "
              src={img}
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-gray-300">
              Frontend Web Development
            </h2>
            <p className="text-gray-300/70">
              Completed a frontend web development course at Hablu Programmer,
              gaining hands-on experience building responsive and user-friendly
              websites with HTML, CSS, and JavaScript. I strengthened my coding
              skills through real projects and learned essential developer
              tools, version control, and debugging techniques to confidently
              handle real-world frontend challenges.
            </p>
            <p className="text-gray-300/70">
              Awarded certificate in December 2024
            </p>
            <div className="flex items-center flex-wrap gap-4">
              {skill.map((tech) => (
                <span
                  key={tech}
                  className="text-black rounded-full cursor-pointer bg-main px-2 py-1 md:px-3 md:py-1.5 text-sm
               border border-transparent
               hover:border-main/40 hover:text-gray-300 hover:bg-transparent duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={pdf}
              className="bg-main/20 hover:bg-gray-800 mt-2 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
              target="_blank"
            >
              View Certificate
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Certificates;
