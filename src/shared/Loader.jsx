import { AnimatePresence,motion } from "framer-motion";
import React, { useState } from "react";

const Loader = () => {
      const [showLine, setShowLine] = useState(false);
  return (
    <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Main loader container */}
          <div className="relative flex items-center justify-center">
            
            {/* Opening Bracket */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-cyan-400 z-20"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -50 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              onAnimationComplete={() => setShowLine(true)}
            >
              &lt;
            </motion.div>

            {/* Animated Line */}
            <div className="relative mx-4 w-32 md:w-48">
              <motion.div
                className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: showLine ? 1 : 0 }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  transformOrigin: "center",
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.6)"
                }}
              />
            </div>

            {/* Closing Bracket */}
            <motion.div
              className="text-6xl md:text-8xl font-bold text-cyan-400 z-20"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
            >
              /&gt;
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-cyan-400 text-lg font-light tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              LOADING...
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
              ease: "easeInOut"
            }}
          />
        </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
