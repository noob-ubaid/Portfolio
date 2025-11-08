import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
const Project = ({ project }) => {
  const {
    name,
    liveLink,
    clientGithubLink,
    serverGithubLink,
    img,
    teamProject,
    techStack,
    features,
    description,
  } = project;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  // Image animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Content animation
  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.8,
      },
    },
  };

  // Item animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Tech stack animation
  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.1,
      y: -2,
      backgroundColor: "var(--main)",
      color: "white",
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      backgroundColor: "var(--main)",
      borderColor: "var(--main)",
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Modal animations
  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col p-6 md:p-8 gap-6 md:gap-8 lg:flex-row items-stretch bg-white/5 backdrop-blur-sm border border-main/30 rounded-2xl overflow-hidden hover:border-main/60 transition-all duration-500  shadow-lg hover:shadow-main/20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -8, scale: 1.01 }}
      >
        {/* Image Section */}
        <motion.div
          className="lg:w-[45%] overflow-hidden"
          variants={imageVariants}
          whileHover="hover"
        >
          <motion.img
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            src={img}
            alt={name}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="lg:w-[55%] flex flex-col justify-between"
          variants={contentVariants}
        >
          <div className="space-y-3">
            {/* Project Title */}
            <div className="flex items-center justify-between gap-4">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white"
                variants={itemVariants}
              >
                {name}
              </motion.h2>
              {teamProject && (
                <motion.span
                  className="px-4 py-2 bg-main/20 text-main rounded-full border border-main/30 backdrop-blur-sm font-medium text-sm"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  ⚡ Team Project
                </motion.span>
              )}
            </div>

            {/* Description */}
            <motion.p
              className="text-gray-300/80 leading-relaxed text-lg"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className=" px-3 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-main/20"
            variants={buttonVariants}
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center rounded-md gap-2 md:gap-4 w-full bg-main/90 hover:bg-main transition-colors duration-300 text-black py-3 font-medium flex-row-reverse justify-center"
              variants={buttonVariants}
            >
              <FaArrowRightLong />
              <span>View Details</span>
            </motion.button>

            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-md gap-2 md:gap-4 hover:bg-main/20 duration-300 w-full border border-main text-white py-3 font-medium flex-row-reverse justify-center"
              variants={buttonVariants}
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gray-900/95 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-main/30 shadow-2xl"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 text-gray-400 hover:text-main transition-colors duration-300 rounded-full hover:bg-main/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={28} />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 space-y-8">
                {/* Full Width Responsive Image */}
                <motion.div
                  className="rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-auto max-h-96 object-center bg-center bg-gray-800/50"
                  />
                </motion.div>

                {/* Project Header */}
                <motion.div
                  className="flex flex-row items-center justify-between gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="md:text-3xl text-2xl font-bold text-white">
                    {name}
                  </h2>
                  {teamProject && (
                    <span className="md:px-6 md:py-3 px-4 py-2 bg-main/20 w-fit text-main rounded-full border border-main/30 md:text-lg text-sm md:font-semibold">
                      ⚡Team Project
                    </span>
                  )}
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="md:text-2xl text-xl font-semibold text-white mb-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-300/80 leading-relaxed md:text-lg">
                    {description}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="md:text-2xl text-xl font-semibold text-white mb-6">
                    Key Features
                  </h3>
                  <div className="flex  flex-col gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 md:gap-4 md:p-4 p-2 bg-main/5 rounded-xl border border-main/20 hover:border-main/40 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{
                          x: 8,
                          backgroundColor: "var(--main)/10",
                          scale: 1.02,
                        }}
                      >
                        <p className="text-gray-300/80 md:text-lg text-base ">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="md:text-2xl text-xl font-semibold text-white mb-6">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-5 py-3 bg-main/10 text-main rounded-xl border border-main/20 backdrop-blur-sm font-medium text-base"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "var(--main)",
                          color: "white",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-main/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {clientGithubLink && (
                    <motion.a
                      href={clientGithubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-main/10 text-main rounded-xl font-semibold hover:bg-main hover:text-white transition-all duration-300 flex-1 justify-center border border-main/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} />
                      <span>Client Side Code</span>
                    </motion.a>
                  )}

                  {serverGithubLink && (
                    <motion.a
                      href={serverGithubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 bg-main/10 text-main rounded-xl font-semibold hover:bg-main hover:text-white transition-all duration-300 flex-1 justify-center border border-main/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} />
                      <span>Server Side Code</span>
                    </motion.a>
                  )}

                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-main text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-main/30 transition-all duration-300 flex-1 justify-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
