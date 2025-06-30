import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
const Virtues = () => {
  const virtues = [
    { name: "Fast Learner" },
    { name: "Hard Worker" },
    { name: "Consistency" },
    { name: "Growth Mindset" },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-4 bg-gray-700 rounded-md"
    >
      <Marquee speed={100} pauseOnHover gradient={false}>
        <div className="flex items-center gap-16 md:gap-56">
          {virtues.map((virtue, index) => (
            <p
              key={index}
              className="text-xl font-semibold text-gray-300 px-4 py-2 rounded-lg"
            >
              {virtue.name}
            </p>
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default Virtues;
