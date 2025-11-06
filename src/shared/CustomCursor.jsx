import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

const SmoothCursor = ({ scroll }) => {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Inner dot
  const innerX = useSpring(mouseX, { stiffness: 250, damping: 20 });
  const innerY = useSpring(mouseY, { stiffness: 250, damping: 20 });

  // Ring (middle)
  const circleX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const circleY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  // Outer glow
  const outerX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const outerY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  // Velocities
  const velocityX = useVelocity(circleX);
  const velocityY = useVelocity(circleY);

  // Derived speed and rotation
  const speed = useTransform([velocityX, velocityY], ([vx, vy]) => Math.sqrt(vx * vx + vy * vy));
  const rotation = useTransform([velocityX, velocityY], ([vx, vy]) => Math.atan2(vy, vx) * (180 / Math.PI));

  // Stretch factor (1 = circle, >1 = stretched)
  const stretch = useTransform(speed, [0, 1500], [1, 1.5]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      const offsetY = scroll?.scroll?.instance?.scroll?.y || 0;
      mouseY.set(e.clientY + offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverTargets = document.querySelectorAll("a, button, .hover-target");
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

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
  }, [mouseX, mouseY, scroll]);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] w-16 h-16 rounded-full bg-main/30 opacity-30 blur-2xl pointer-events-none"
        style={{ x: outerX, y: outerY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.5 : 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />

      {/* Middle ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-6 h-6 rounded-full border border-main/30 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.3)] pointer-events-none"
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX: stretch,
          scaleY: useTransform(stretch, (s) => 1 / s), // inverse to keep area similar
          rotate: rotation,
        }}
        animate={{ borderColor: isHovering ? "var(--main)" : "var(--main/30)" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-main shadow-[0_0_8px_rgba(255,255,255,0.4)] pointer-events-none"
        style={{ x: innerX, y: innerY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isHovering ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default SmoothCursor;
