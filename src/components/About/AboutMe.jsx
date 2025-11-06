// import React from "react";
// import Container from "../../shared/Container";
// import Lottie from "lottie-react";
// import codingAnimation from "../../assets/animation.json";
// import { fadeIn } from "../../shared/Variants";
// import { motion } from "framer-motion";
// const AboutMe = () => {
//   return (
//     <div id="about">
//       <Container>
//         <motion.h2
//           variants={fadeIn("up", 0.15)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl text-main text-center font-semibold pt-24  md:pt-24"
//         >
//           About Me
//         </motion.h2>
//         <div className="flex items-center justify-between gap-12 flex-col-reverse lg:flex-row-reverse">
//           <div className="flex-1 flex-col flex items-center justify-center gap-4">
//             <motion.p
//               variants={fadeIn("up", 0.15)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className=" text-gray-300/70"
//             >
//               Hi, I’m Ubaidur Rahman, a 17-year-old web developer. I started my
//               development journey by building small frontend projects with HTML,
//               CSS, and JavaScript, later moving into the MERN stack to build
//               dynamic web apps. I enjoy creating user-friendly interfaces and
//               solving real-world problems through code.
//             </motion.p>
//             <motion.p
//               variants={fadeIn("up", 0.15)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className=" text-gray-300/70"
//             >
//               I love frontend development and making designs interactive, but I
//               also enjoy building full-stack apps and working with APIs to
//               create complete products.
//             </motion.p>
//             <motion.p
//               variants={fadeIn("up", 0.15)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className=" text-gray-300/70"
//             >
//               Outside programming, I enjoy playing football, exploring tech
//               content, and sketching simple art to refresh my mind.
//             </motion.p>
//             <motion.p
//               variants={fadeIn("up", 0.15)}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               className=" text-gray-300/70"
//             >
//               I’m a curious learner who loves building practical solutions and
//               sharing knowledge while continuously improving as a developer.
//             </motion.p>
//           </div>

//           <motion.div
//             variants={fadeIn("up", 0.25)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="flex flex-1 w-full  items-center justify-center"
//           >
//             <Lottie
//               animationData={codingAnimation}
//               className="md:h-[450px] md:w-[450px] h-[270px] w-[270px]"
//               loop={true}
//             />
//           </motion.div>
//         </div>
//         <div className="bg-main blur-[200px] hidden md:block  size-36 absolute top-[1350px] right-2"></div>
//         <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[2550px] right-6"></div>
//         <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[3150px] left-6"></div>
//         <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[3650px] right-6"></div>
//         <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[4450px] left-6"></div>
//         <div className="bg-main blur-[200px] hidden md:block  size-28 absolute top-[4950px] right-6"></div>
//       </Container>
//     </div>
//   );
// };

// export default AboutMe;







import React, { useEffect, useRef, useState } from "react";
import Container from "../../shared/Container";
import Lottie from "lottie-react";
import codingAnimation from "../../assets/animation.json";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const magneticRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const storyCards = [
    {
      emoji: "🚀",
      title: "The Beginning",
      content: "Started with HTML, CSS, and JavaScript building small frontend projects that sparked my passion for web development."
    },
    {
      emoji: "⚡",
      title: "MERN Stack Journey",
      content: "Advanced to full-stack development with MongoDB, Express, React, and Node.js, creating dynamic web applications."
    },
    {
      emoji: "🎨",
      title: "Creative Expression",
      content: "Found love in crafting beautiful, user-friendly interfaces and making designs come alive with interactivity."
    },
    {
      emoji: "⚽",
      title: "Beyond Code",
      content: "When not coding, you'll find me playing football, exploring tech trends, or sketching to refresh my creativity."
    }
  ];

  // Magnetic cursor effect for Lottie
  useEffect(() => {
    const magnetic = magneticRef.current;
    if (!magnetic) return;

    const xTo = gsap.quickTo(magnetic, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magnetic, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

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

  // GSAP timeline for sequential animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title typewriter effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(".typewriter-text", 
        { width: "0%" },
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        }
      )
      .from(".floating-orb", {
        scale: 0,
        rotation: 180,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }, "-=1")
      .from(".story-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      }, "-=0.5")
      .from(".tech-bubble", {
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.3");

      // Continuous floating animation for orbs
      gsap.to(".floating-orb", {
        y: 20,
        rotation: 360,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
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

  const floatingOrbs = [
    { size: "w-4 h-4", color: "bg-purple-500", position: "top-20 left-10", delay: "delay-0" },
    { size: "w-6 h-6", color: "bg-cyan-400", position: "top-32 right-20", delay: "delay-300" },
    { size: "w-3 h-3", color: "bg-pink-500", position: "bottom-40 left-20", delay: "delay-700" },
    { size: "w-5 h-5", color: "bg-yellow-400", position: "bottom-20 right-12", delay: "delay-500" },
  ];

  const techBubbles = ["React", "Node.js", "MongoDB", "Express", "GSAP", "Framer"];

  return (
    <div id="about" ref={sectionRef} className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {floatingOrbs.map((orb, index) => (
          <div
            key={index}
            className={`floating-orb absolute ${orb.size} ${orb.color} ${orb.position} ${orb.delay} rounded-full blur-sm opacity-60`}
          />
        ))}
      </div>

      <Container>
        {/* Animated Title */}
        <div className="relative mb-16">
          <div className="typewriter-container inline-block">
            <h2 className="typewriter-text text-4xl md:text-6xl text-main text-center font-bold pt-24 md:pt-24 overflow-hidden whitespace-nowrap border-r-4 border-main">
              About Me
            </h2>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-main to-transparent rounded-full" />
        </div>

        <div className="flex items-center justify-between gap-12 flex-col-reverse lg:flex-row-reverse">
          {/* Interactive Story Cards */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {storyCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="story-card relative group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setActiveCard(index)}
                >
                  <div className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-500 ${
                    activeCard === index 
                      ? "bg-white/10 border-main scale-105 shadow-2xl shadow-main/20" 
                      : "bg-white/5 border-white/20 hover:bg-white/10"
                  }`}>
                    <div className="text-3xl mb-3">{card.emoji}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-300/80 text-sm leading-relaxed">{card.content}</p>
                  </div>
                  
                  {/* Active indicator */}
                  {activeCard === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-2xl border-2 border-main shadow-2xl shadow-main/30"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Tech Bubbles */}
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {techBubbles.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-bubble px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-main/20 hover:border-main transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Magnetic Lottie Animation */}
          <motion.div
            ref={magneticRef}
            className="lottie-container flex flex-1 w-full items-center justify-center relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-main to-cyan-400"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ filter: "blur(10px)", opacity: 0.7 }}
              />
              
              <div className="relative bg-gray-900 rounded-full p-4">
                <Lottie
                  animationData={codingAnimation}
                  className="md:h-[400px] md:w-[400px] h-[250px] w-[250px]"
                  loop={true}
                />
              </div>

              {/* Floating code elements */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1 bg-main text-white rounded-full text-sm font-mono"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {"</>"}
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-1 bg-cyan-400 text-gray-900 rounded-full text-sm font-mono"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                {"{}"}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {storyCards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCard === index ? "bg-main scale-125" : "bg-white/30"
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;