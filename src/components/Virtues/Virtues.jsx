import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
import { FaBolt, FaFire, FaChartLine, FaSeedling } from "react-icons/fa";

const Virtues = () => {
  const virtues = [
    { name: "Fast Learner", icon: <FaBolt /> },
    { name: "Hard Worker", icon: <FaFire /> },
    { name: "Consistency", icon: <FaChartLine /> },
    { name: "Growth Mindset", icon: <FaSeedling /> },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-5 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-main/20"
    >
      <Marquee speed={90} pauseOnHover gradient={false}>
        <div className="flex items-center gap-12 md:gap-32">
          {virtues.map((virtue, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="p-2 bg-main/20 rounded-full group-hover:bg-main/30 transition-colors duration-300">
                <div className="text-main text-lg">{virtue.icon}</div>
              </div>
              <span className="text-xl font-bold text-gray-200 group-hover:text-main transition-colors duration-300">
                {virtue.name}
              </span>
              <div className="w-2 h-2 bg-main rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default Virtues;
