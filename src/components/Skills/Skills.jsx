import React from "react";
import Title from "../../shared/Title";
import Container from "../../shared/Container";
import { motion } from "framer-motion";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiReactquery,
  SiRedux,
  SiGreensock,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiAxios,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { fadeIn } from "../../shared/Variants";
const Skills = () => {
  const skills = [
    { id: 1, skill: "HTML", icon: "FaHtml5", color: "#E34F26" },
    { id: 2, skill: "CSS", icon: "FaCss3Alt", color: "#1572B6" },
    { id: 13, skill: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { id: 3, skill: "JavaScript", icon: "FaJsSquare", color: "#F7DF1E" },
    { id: 4, skill: "React JS", icon: "FaReact", color: "#61DAFB" },
    { id: 5, skill: "TanStack Query", icon: "SiReactquery", color: "#FF4154" },
    { id: 6, skill: "React Redux", icon: "SiRedux", color: "#764ABC" },
    {
      id: 7,
      skill: "Framer Motion",
      icon: "TbBrandFramerMotion",
      color: "#0055FF",
    },
    { id: 8, skill: "GSAP", icon: "SiGreensock", color: "#88CE02" },
    { id: 9, skill: "Express JS", icon: "SiExpress", color: "#F7F7F7" },
    { id: 10, skill: "Node JS", icon: "FaNodeJs", color: "#339933" },
    { id: 11, skill: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { id: 12, skill: "React Router", icon: "SiReactrouter", color: "#CA4245" },

    { id: 14, skill: "Git", icon: "FaGitAlt", color: "#F05032" },
    { id: 15, skill: "GitHub", icon: "FaGithub", color: "#FFFFFF" },
    { id: 16, skill: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { id: 17, skill: "JWT", icon: "SiJsonwebtokens", color: "#fff" },
    { id: 18, skill: "Axios", icon: "SiAxios", color: "#5A29E4" },
  ];

  const icons = {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    SiReactquery,
    SiRedux,
    TbBrandFramerMotion,
    SiGreensock,
    SiExpress,
    SiMongodb,
    SiReactrouter,
    SiTailwindcss,
    SiFirebase,
    SiJsonwebtokens,
    SiAxios,
  };

  return (
    <div id="skills">
      <Container>
        <Title title="Skills" />
        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn("down", 0.24)}
          className="text-gray-300/70 max-w-3xl mx-auto mb-8 md:mb-14 text-center"
        >
          I not only work with these technologies but excellent in using them
          with best practices to deliver high-quality results, I have been
          working with all these skills to build most of the projects
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-x-8 md:gap-x-14 gap-y-16">
          {skills.map((skill, index) => {
            const IconComponent = icons[skill.icon];
            return (
              <motion.div
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                key={skill.id}
                className="flex flex-col items-center justify-center transition-transform hover:scale-110 duration-300"
              >
                {IconComponent ? (
                  <IconComponent size={40} color={skill.color} />
                ) : (
                  <p className="text-red-500">Missing: {skill.icon}</p>
                )}
                <p className="mt-2 text-center font-medium text-lg text-gray-200/70">
                  {skill.skill}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
