import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  const { name, liveLink, githubLink, img, techStack, features, description } =
    project;

  // Parent container
  const container = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // For staggered fade/slide
  const fadeSlide = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Features animation
  const featureVariant = {
    hidden: { opacity: 0, x: -20 },
    show: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
    }),
  };

  // Badge animation
  const badgeVariant = {
    hidden: { opacity: 0, scale: 0 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: [0, -5, 5, 0],
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      className="flex items-center flex-col lg:flex-row border border-main/40 p-4 md:p-8 rounded-md gap-8 md:gap-12 bg-black/20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Image with sliding entrance */}
      <motion.div
        className="flex-1 overflow-hidden rounded-md"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          className="rounded-md md:h-[400px] h-auto object-cover w-auto"
          src={img}
          alt=""
          whileHover={{ scale: 1.08, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div className="flex-1 flex flex-col gap-4" variants={container}>
        {/* Title with word stagger */}
        <motion.h2 className="text-3xl font-semibold text-gray-300 flex flex-wrap gap-1">
          {name.split(" ").map((word, i) => (
            <motion.span key={i} variants={fadeSlide} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Description */}
        <motion.p className="text-gray-300/70" variants={fadeSlide}>
          {description}
        </motion.p>

        {/* Features */}
        <motion.ul className="list-disc list-inside pl-2">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="text-gray-300/70"
              custom={i}
              variants={featureVariant}
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* Tech Stack */}
        <motion.div className="flex items-center flex-wrap gap-4">
          {techStack.map((tech, i) => (
            <motion.span
              key={i}
              className="text-black rounded-full cursor-pointer bg-main px-2 py-1 md:px-3 md:py-1.5 text-sm border border-transparent
              hover:border-main/40 hover:text-gray-300 hover:bg-transparent duration-300"
              custom={i}
              variants={badgeVariant}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <div className="flex items-center gap-3 md:gap-10 mt-2">
          <motion.a
            href={githubLink}
            className="bg-main/20 hover:bg-gray-800 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
            target="_blank"
            variants={fadeSlide}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.4)",
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaGithub size={20} /> Github link
          </motion.a>

          <motion.a
            href={liveLink}
            className="bg-main/20 hover:bg-gray-800 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
            target="_blank"
            variants={fadeSlide}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(0,255,200,0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(0,255,200,0)",
                "0 0 20px rgba(0,255,200,0.5)",
                "0 0 0px rgba(0,255,200,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <FaExternalLinkAlt size={17} /> Live link
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
