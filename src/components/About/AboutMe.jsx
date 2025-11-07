import React, { useEffect, useRef, useState } from "react";
import Container from "../../shared/Container";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/animation.json";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../../shared/Title";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const magneticRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const storyCards = [
    {
      emoji: "👨‍💻",
      title: "Who I Am",
      content:
        "I'm Ubaidur Rahman, a 17-year-old passionate MERN Stack Developer from Bangladesh who loves creating modern, interactive web applications that provide real value to users.",
    },
    {
      emoji: "🚀",
      title: "My Journey",
      content:
        "I started learning web development with HTML, CSS, and JavaScript, then explored React and Node.js — eventually mastering the full MERN Stack through consistent self-learning and projects.",
    },
    {
      emoji: "💡",
      title: "What I Do",
      content:
        "I build responsive, user-friendly, and full-stack applications using MongoDB, Express, React, and Node.js. I enjoy solving problems and turning ideas into real-world digital products.",
    },
    {
      emoji: "⚽",
      title: "Beyond the Screen",
      content:
        "Outside of coding, I enjoy playing Cricket with my friends, exploring new ideas, watching tech content, and keeping up with new tools and trends in modern web development.",
    },
  ];

  useEffect(() => {
    const magnetic = magneticRef.current;
    if (!magnetic) return;

    const xTo = gsap.quickTo(magnetic, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    magnetic.addEventListener("mousemove", mouseMove);
    magnetic.addEventListener("mouseleave", mouseLeave);

    return () => {
      magnetic.removeEventListener("mousemove", mouseMove);
      magnetic.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".typewriter-text",
        { width: "0%" },
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        }
      )
        .from(
          ".floating-orb",
          {
            scale: 0,
            rotation: 180,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=1"
        )
        .from(
          ".story-card",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          ".tech-bubble",
          {
            scale: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );

      gsap.to(".floating-orb", {
        y: 20,
        rotation: 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate story cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % storyCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const techBubbles = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "GSAP",
    "Framer",
  ];

  return (
    <div id="about" ref={sectionRef} className="relative overflow-hidden p-1.5">
      <Container>
        <Title title="About Me" />

        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row-reverse">
          {/* Interactive Story Cards - Improved layout */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {storyCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="story-card relative group cursor-pointer"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setActiveCard(index)}
                >
                  <div
                    className={`p-5 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                      activeCard === index
                        ? "bg-white/10 border-cyan-400 scale-[1.01] shadow-lg shadow-cyan-400/20"
                        : "bg-white/5 border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl flex-shrink-0">{card.emoji}</div>
                      <h3 className="text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-gray-300/80 text-sm leading-relaxed">
                      {card.content}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeCard === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl border-2 m-1 border-cyan-400 shadow-lg shadow-cyan-400/30"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tech Bubbles */}
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {techBubbles.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-bubble px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Magnetic Lottie Animation - Fixed sizing */}
          <motion.div
            ref={magneticRef}
            className="lottie-container flex flex-1 w-full max-w-[400px] lg:max-w-[450px] items-center justify-center relative mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ filter: "blur(12px)", opacity: 0.6 }}
              />

              <div className="relative bg-gray-900 rounded-full p-3">
                <Lottie
                  animationData={codingAnimation}
                  className="md:h-[350px] md:w-[350px] h-[280px] w-[280px]"
                  loop={true}
                />
              </div>

              {/* Floating code elements - Improved positioning */}
              <motion.div
                className="absolute -top-2 -right-2 px-2 py-1 bg-cyan-400 text-gray-900 rounded-full text-xs font-mono font-bold"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {"</>"}
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 px-2 py-1 bg-purple-400 text-white rounded-full text-xs font-mono font-bold"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                {"{}"}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {storyCards.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCard === index ? "bg-cyan-400 scale-125" : "bg-white/30"
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
