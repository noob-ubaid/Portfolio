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

          {/* Animated Vertical Slash Container with Enhanced Glow */}
          <div className="relative mx-8 flex items-center justify-center h-screen">
            {/* Main Slash - Using your main color */}
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
              }}
            />
            
            {/* Inner Glow - Using main color with opacity */}
            <motion.div
              className="w-3 bg-main/60 rounded-full absolute blur-sm"
              initial={{ scale: 0, rotate: 30 }}
              animate={{
                scale: showSlash ? 1 : 0,
                rotate: 30,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: 0.1,
              }}
              style={{
                transformOrigin: "center",
                height: "100vh",
              }}
            />
            
            {/* Outer Glow - Lighter opacity */}
            <motion.div
              className="w-6 bg-main/30 rounded-full absolute blur-lg"
              initial={{ scale: 0, rotate: 30 }}
              animate={{
                scale: showSlash ? 1 : 0,
                rotate: 30,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: 0.2,
              }}
              style={{
                transformOrigin: "center",
                height: "100vh",
              }}
            />
            
            {/* Pulsing Glow Effect */}
            <motion.div
              className="w-8 bg-main/20 rounded-full absolute blur-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: showSlash ? [1, 1.2, 1] : 0,
                opacity: showSlash ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.3,
              }}
              style={{
                transformOrigin: "center",
                height: "100vh",
                rotate: 30,
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

        {/* Background Glow Effects - Using your main color */}
        <motion.div
          className="absolute inset-0 bg-main/5 blur-3xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Additional Glow Particles */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-main rounded-full blur-md"
          animate={{
            scale: [0, 8, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;