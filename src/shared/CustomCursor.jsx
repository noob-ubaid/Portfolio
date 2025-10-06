import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

const SmoothCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Layer follow speeds
  const innerX = useSpring(mouseX, { stiffness: 250, damping: 20 });
  const innerY = useSpring(mouseY, { stiffness: 250, damping: 20 });

  const circleX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const circleY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const outerX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const outerY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  // Ring velocity for dynamic ellipse
  const velocityX = useVelocity(circleX);
  const velocityY = useVelocity(circleY);

  // Transform velocity to ellipse scale (more stretch)
  const scaleX = useTransform(velocityX, [0, 1000], [1, 2]); // more horizontal stretch
  const scaleY = useTransform(velocityY, [0, 1000], [1, 0.5]); // more vertical squash

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer glow trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] w-16 h-16 rounded-full bg-main/30 opacity-30 blur-2xl pointer-events-none"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.5 : 0.3,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Middle circle / ring with dynamic ellipse */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-main/30 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX: scaleX,
          scaleY: scaleY,
        }}
        animate={{
          borderColor: isHovering ? "var(--main)" : "var(--main/30)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-main shadow-[0_0_8px_rgba(255,255,255,0.4)] pointer-events-none"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default SmoothCursor;
