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
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiAxios,
  SiReactrouter,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, skill: "HTML", icon: "FaHtml5", color: "#E34F26" },
    { id: 2, skill: "CSS", icon: "FaCss3Alt", color: "#1572B6" },
    { id: 3, skill: "JavaScript", icon: "FaJsSquare", color: "#F7DF1E" },
    { id: 4, skill: "React JS", icon: "FaReact", color: "#61DAFB" },
    { id: 5, skill: "Next JS", icon: "SiNextdotjs", color: "#fff" },
    { id: 6, skill: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { id: 7, skill: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { id: 8, skill: "TanStack Query", icon: "SiReactquery", color: "#FF4154" },
    { id: 9, skill: "Express JS", icon: "SiExpress", color: "#F7F7F7" },
    { id: 10, skill: "Node JS", icon: "FaNodeJs", color: "#339933" },
    { id: 11, skill: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { id: 12, skill: "React Router", icon: "SiReactrouter", color: "#CA4245" },
    { id: 13, skill: "Git", icon: "FaGitAlt", color: "#F05032" },
    { id: 14, skill: "GitHub", icon: "FaGithub", color: "#FFFFFF" },
  ];

  const icons = {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    SiRedux,
    TbBrandFramerMotion,
    SiReactquery,
    SiExpress,
    SiMongodb,
    SiReactrouter,
    SiTailwindcss,
    SiFirebase,
    SiJsonwebtokens,
    SiAxios,
    SiNextdotjs,
    SiTypescript,
  };

  // Container animation (staggered children)
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Each skill card animation
  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div id="skills">
      <Container>
        <Title title="Skills" />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300/70 max-w-3xl mx-auto mb-8 md:mb-14 text-center"
        >
          I not only work with these technologies but excel in using them with
          best practices to deliver high-quality results. I have been working
          with all these skills to build most of my projects.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {skills.map((skill) => {
            const IconComponent = icons[skill.icon];
            return (
              <motion.div
                variants={item}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  boxShadow: `0 0px 20px ${skill.color}`,
                }}
                className="rounded-xl"
                whileTap={{ scale: 0.95 }}
                key={skill.id}
              >
                <motion.div className="flex flex-col items-center justify-center bg-black/10 border hover:border-none border-gray-700 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-main/60">
                  {IconComponent ? (
                    <IconComponent size={45} color={skill.color} />
                  ) : (
                    <p className="text-red-500">Missing: {skill.icon}</p>
                  )}
                  <p className="mt-3 text-center font-medium text-base sm:text-lg text-gray-200/80">
                    {skill.skill}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </div>
  );
};

export default Skills;
