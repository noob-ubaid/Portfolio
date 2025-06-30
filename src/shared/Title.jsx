import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";
const Title = ({ title }) => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.11)}
      initial="hidden"
      whileInView="show"
      className="text-4xl md:text-5xl text-main text-center font-semibold pt-24 pb-10 md:pt-24 md:pb-14"
    >
      {title}
    </motion.h2>
  );
};

export default Title;
