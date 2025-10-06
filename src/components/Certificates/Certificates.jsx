import React from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import img1 from "/certificate1.png";
import img2 from "/certificate2.png";
import pdf1 from "/habluprogrammer.pdf";
import pdf2 from "/programminghero.pdf";
import { motion } from "framer-motion";

const courses = [
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
      "Tailwind css",
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
      "Completed The Journey of Frontend Web Development course at Hablu Programmer,gaining hands-on experience building responsive and user-friendly websites with HTML, CSS, and JavaScript. I strengthened my coding skills through real projects and learned essential developer tools, version control, and debugging techniques to confidently handle real-world frontend challenges.",
    data: "Awarded certificate in December 2024",
    skills: [
      "HTML",
      "CSS",
      "Tailwind css",
      "JavaScript",
      "React js",
      "React Router",
      "Tanstack Query",
      "Framer Motion",
    ],
    certificate: pdf1,
  },
];

// Parent container (stagger children)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// Fade + slide (vertical)
const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Image slide variant (custom direction: -1 => from left, 1 => from right)
const imageVariant = {
  hidden: (dir) => ({ opacity: 0, x: dir * 100 }),
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Skill badge animation
const badgeVariant = {
  hidden: { opacity: 0, scale: 0 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: [0, -5, 5, 0],
    transition: { delay: i * 0.08, duration: 0.55 },
  }),
};

const Certificates = () => {
  return (
    // Prevent any temporary horizontal overflow from transforms
    <div id="certificate" className="overflow-x-hidden">
      <Container>
        <Title title="Certificate" />

        {/* Intro text */}
        <motion.p
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-300/70 max-w-4xl mx-auto text-center"
        >
          I believe in continuous learning to sharpen and strengthen my web
          development skills, building a solid foundation for my career, and
          here is a certification I’ve proudly earned so far as part of my
          growth journey.
        </motion.p>

        {courses.map((course, idx) => (
          <motion.div
            key={course.id}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center flex-col mt-6 md:mt-10 lg:flex-row border border-main/40 p-4 md:p-8 rounded-md gap-8 md:gap-12 bg-black/20"
          >
            {/* Image with controlled slide; min-w-0 prevents flex overflow */}
            <motion.div
              className="flex-1 min-w-0 overflow-hidden rounded-md"
              variants={imageVariant}
              custom={idx % 2 === 0 ? -1 : 1}
            >
              <motion.img
                // responsive image classes: never exceed container width on small screens
                className="block w-full max-w-[610px] md:h-[420px] h-auto object-cover mx-auto rounded-md"
                src={course.img}
                alt={course.title}
                // hover moves vertically and scales (avoids horizontal shift)
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.35)",
                }}
                transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
              />
            </motion.div>

            {/* Text Section; min-w-0 so text doesn't force overflow */}
            <motion.div
              className="flex-1 min-w-0 flex flex-col gap-4"
              variants={container}
            >
              <motion.h2
                className="text-3xl font-semibold text-gray-300"
                variants={fadeSlide}
              >
                {course.title}
              </motion.h2>

              <motion.p className="text-gray-300/70" variants={fadeSlide}>
                {course.description}
              </motion.p>

              <motion.p className="text-gray-300/70" variants={fadeSlide}>
                {course.data}
              </motion.p>

              {/* Skills */}
              <motion.div
                className="flex items-center flex-wrap gap-4"
                variants={container}
              >
                {course.skills.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="text-black rounded-full cursor-pointer bg-main px-2 py-1 md:px-3 md:py-1.5 text-sm
                     border border-transparent hover:border-main/40 hover:text-gray-300 hover:bg-transparent duration-300"
                    custom={i}
                    variants={badgeVariant}
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Button with glowing pulse */}
              <motion.a
                href={course.certificate}
                className="bg-main/20 hover:bg-gray-800 mt-2 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
                target="_blank"
                variants={fadeSlide}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.35)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(0,255,200,0)",
                    "0 0 18px rgba(0,255,200,0.45)",
                    "0 0 0px rgba(0,255,200,0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2.6 }}
              >
                View Certificate
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
};

export default Certificates;
