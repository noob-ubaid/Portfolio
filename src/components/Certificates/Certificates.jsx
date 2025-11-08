import React, { useState } from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import img1 from "/certificate1.png";
import img2 from "/certificate2.png";
import pdf1 from "/habluprogrammer.pdf";
import pdf2 from "/programminghero.pdf";

const certificates = [
  {
    id: 1,
    img: img2,
    title: "Complete Web Development",
    description:
      "Completed the Complete Web Development course at Programming Hero, gaining hands-on experience as a Full Stack Developer. I built real-world projects using HTML, CSS, Tailwind CSS, and JavaScript, and advanced into modern frameworks and technologies including React.js, Next.js, Node.js, Express.js, and MongoDB. This journey strengthened my ability to develop both frontend and backend applications, manage databases, and build fully functional, responsive, and scalable web applications with confidence.",
    data: "Awarded certificate in August 2025",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Framer Motion",
    ],
    certificate: pdf2,
  },
  {
    id: 2,
    img: img1,
    title: "The Journey of Frontend Web Development",
    description:
      "Completed The Journey of Frontend Web Development course at Hablu Programmer, gaining hands-on experience building responsive and user-friendly websites with HTML, CSS, and JavaScript. I strengthened my coding skills through real projects and learned essential developer tools, version control, and debugging techniques to confidently handle real-world frontend challenges.",
    data: "Awarded certificate in December 2024",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Tanstack Query",
      "Framer Motion",
    ],
    certificate: pdf1,
  },
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // animations (same pattern as your Project component)
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1, x: -100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 25 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.05,
      y: -2,
      backgroundColor: "var(--main)",
      borderColor: "var(--main)",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div id="certificate" className="overflow-x-hidden">
      <Container>
        <Title title="Certificates" />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300/70 max-w-4xl mx-auto text-center mb-12"
        >
          I believe in continuous learning to sharpen and strengthen my web
          development skills. Here are some certifications that represent my
          progress and dedication.
        </motion.p>

        {certificates.map((course) => (
          <motion.div
            key={course.id}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="flex flex-col p-4 md:p-8 gap-6 md:gap-8 lg:flex-row items-stretch bg-white/5 backdrop-blur-sm border border-main/30 rounded-2xl overflow-hidden hover:border-main/60 transition-all duration-500 shadow-lg hover:shadow-main/20 mb-12"
          >
            {/* Image */}
            <motion.div
              className="lg:w-[45%] overflow-hidden"
              variants={imageVariants}
            >
              <motion.img
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                src={course.img}
                alt={course.title}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:w-[55%] flex flex-col justify-between"
              variants={containerVariants}
            >
              <div className="space-y-4">
                <motion.h2 className="text-2xl md:text-3xl font-bold text-white">
                  {course.title}
                </motion.h2>
                <motion.p className="text-gray-300/80 leading-relaxed text-lg">
                  {course.description}
                </motion.p>
                <motion.p className="text-gray-400 italic">
                  {course.data}
                </motion.p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {course.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-main/20"
                variants={buttonVariants}
              >
                <motion.button
                  onClick={() => setSelectedCertificate(course)}
                  className="flex items-center rounded-md gap-2 md:gap-4 w-full bg-main/90 hover:bg-main transition-colors duration-300 text-black py-3 font-medium flex-row-reverse justify-center"
                  variants={buttonVariants}
                >
                  <FaExternalLinkAlt />
                  <span>View Certificate</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                className="bg-gray-900/95 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-main/30 shadow-2xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <motion.button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-3 text-gray-400 hover:text-main transition-colors duration-300 rounded-full hover:bg-main/10"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes size={26} />
                  </motion.button>
                </div>

                <motion.img
                  src={selectedCertificate.img}
                  alt={selectedCertificate.title}
                  className="w-full h-auto rounded-2xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                />

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedCertificate.title}
                </h2>
                <p className="text-gray-300/80 leading-relaxed mb-4">
                  {selectedCertificate.description}
                </p>
                <p className="text-gray-400 italic mb-6">
                  {selectedCertificate.data}
                </p>
                <h3 className="md:text-2xl text-xl md:font-semibold font-medium text-white mb-6">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-4">
                  {selectedCertificate.skills.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className=" px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={selectedCertificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-6 justify-center gap-3 bg-main/10 border border-main/30 text-white hover:bg-main/30 hover:text-white transition-all duration-300 py-4 rounded-xl font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt />
                  <span>Open PDF Certificate</span>
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Certificates;
