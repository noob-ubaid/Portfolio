import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Loader = () => {
  const [showSlash, setShowSlash] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Main loader container */}
        <div className="relative flex items-center justify-center">
          {/* Opening Bracket */}
          <motion.div
            className="text-7xl md:text-8xl font-bold text-main z-20"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: -60 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            onAnimationComplete={() => setShowSlash(true)}
          >
            <MdKeyboardArrowLeft />
          </motion.div>

          {/* Animated Vertical Slash Container */}
          <div className="relative mx-8 flex items-center justify-center h-screen">
            <motion.div
              className="w-2 bg-main rounded-full absolute"
              initial={{ scale: 0, rotate: 30 }}
              animate={{
                scale: showSlash ? 1 : 0,
                rotate: 30,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              style={{
                transformOrigin: "center",
                height: "100vh",
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.7)",
              }}
            />
          </div>

          {/* Closing Bracket */}
          <motion.div
            className="text-7xl md:text-8xl font-bold text-main z-20"
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 60 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <MdKeyboardArrowRight />
          </motion.div>
        </div>

        {/* Background Glow Effects */}
        <motion.div
          className="absolute inset-0 bg-cyan-500/5 blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
