import React, { useEffect, useRef, useState } from "react";
import Container from "../../shared/Container";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../../shared/Title";
import { Send, User, Bot, Cpu, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  // AI Chatbot states
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const chatContainerRef = useRef(null);

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

  // Your information for the AI
  const developerInfo = {
    name: "Ubaidur Rahman",
    role: "MERN Stack Developer",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
    experience: "Self-taught developer with continuous learning",
    education: "Currently studying and building projects",
    location: "Bangladesh",
    age: "17 years old",
    hobbies: [
      "Coding",
      "Cricket",
      "Exploring new technologies",
      "Watching tech content",
    ],
    projects: [
      {
        name: "Portfolio Website",
        description:
          "Modern responsive portfolio built with React and modern animations",
        technologies: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
      },
      {
        name: "Full-stack Applications",
        description:
          "Various MERN stack applications with real-world functionality",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
      },
    ],
    availability: "Open to collaborations and learning opportunities",
    social: {
      github: "https://github.com/ubaidurrahman",
      linkedin: "https://linkedin.com/in/ubaidurrahman",
      portfolio: "https://ubaidurrahman.vercel.app",
    },
  };

  // Function to render text with clickable links
  const renderTextWithLinks = (text) => {
    if (!text) return null;

    const urlRegex = /(https?:\/\/[^\s]+[^\s.,)])(?=\s|$|[,.)])/g;
    const parts = text.split(/(https?:\/\/[^\s]+[^\s.,)])(?=\s|$|[,.)])/gi);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.match(urlRegex)) {
        const url = part.trim();
        let platformName = "Link";
        if (url.includes("github.com")) platformName = "GitHub";
        else if (url.includes("linkedin.com")) platformName = "LinkedIn";
        else if (url.includes("vercel.app") || url.includes("portfolio"))
          platformName = "Portfolio";

        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200 font-medium mx-1"
            onClick={(e) => e.stopPropagation()}
          >
            {platformName}
          </a>
        );
      }
      return part;
    });
  };

  // Fixed typing function - properly handles the name
  const typeMessage = async (message, messageId) => {
    setIsTyping(true);

    // Create the bot message with empty text initially
    const botMessage = {
      id: messageId,
      text: "",
      isBot: true,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, botMessage]);

    let displayedText = "";

    for (let i = 0; i < message.length; i++) {
      displayedText += message[i];

      // Update the message in state
      setChatMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, text: displayedText } : msg
        )
      );

      // Scroll to bottom
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }

      await new Promise((resolve) => setTimeout(resolve, 20));
    }

    setIsTyping(false);
  };

  // Initial bot message
  useEffect(() => {
    if (hasInitialized) return;

    const timer = setTimeout(() => {
      const initialMessage = `Hi! I'm Ubaidur's AI assistant. I can tell you about his skills, experience, projects, and more! What would you like to know about him?`;
      const initialMessageId = Date.now();

      typeMessage(initialMessage, initialMessageId).then(() => {
        setHasInitialized(true);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [hasInitialized]);

  // Scroll to bottom of chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading || isTyping) return;

    const userMessage = {
      id: Date.now(),
      text: userInput,
      isBot: false,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      // Generate AI response
      const botResponse = generateAIResponse(userInput);
      const botMessageId = Date.now() + 1;

      await typeMessage(botResponse, botMessageId);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      const errorResponse =
        "I'm sorry, I'm having trouble connecting right now. Please try again later!";
      const errorMessageId = Date.now() + 1;

      const errorMessage = {
        id: errorMessageId,
        text: errorResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("skill") ||
      message.includes("tech") ||
      message.includes("stack")
    ) {
      return `Ubaidur is proficient in the MERN stack including MongoDB, Express.js, React, and Node.js. He also works with ${developerInfo.skills.join(
        ", "
      )}. He's constantly learning new technologies to improve his skills.`;
    } else if (message.includes("project") || message.includes("work")) {
      return `Ubaidur has built several projects including his portfolio website and various full-stack applications. His projects showcase modern web development practices and responsive design. You can check his GitHub at ${developerInfo.social.github} for more details!`;
    } else if (
      message.includes("experience") ||
      message.includes("background")
    ) {
      return `Ubaidur is a self-taught developer who started with HTML, CSS, and JavaScript. He's been actively learning and building projects with the MERN stack, focusing on creating modern, interactive web applications.`;
    } else if (message.includes("age") || message.includes("old")) {
      return `Ubaidur is ${developerInfo.age} from ${developerInfo.location}. He's passionate about web development and constantly learning new technologies while building exciting projects.`;
    } else if (
      message.includes("hobby") ||
      message.includes("interest") ||
      message.includes("cricket")
    ) {
      return `Besides coding, Ubaidur enjoys ${developerInfo.hobbies.join(
        ", "
      )}. He loves playing Cricket with friends and exploring new tech trends in web development.`;
    } else if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("social")
    ) {
      return `You can connect with Ubaidur on GitHub (${
        developerInfo.social.github
      }), LinkedIn (${
        developerInfo.social.linkedin
      }), or check his portfolio (${
        developerInfo.social.portfolio
      }). He's ${developerInfo.availability.toLowerCase()}!`;
    } else if (message.includes("education") || message.includes("study")) {
      return `Ubaidur is currently focused on building his development skills through self-learning and practical projects. ${developerInfo.education}.`;
    } else {
      return "That's an interesting question! Ubaidur is a passionate MERN stack developer who loves creating modern web applications. Could you be more specific about what you'd like to know? You can ask about his skills, projects, experience, or hobbies!";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Quick questions suggestions
  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What's your experience?",
    "How can I contact you?",
  ];

  const handleQuickQuestion = (question) => {
    setUserInput(question);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  // Existing GSAP animations
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
    "Tailwind CSS",
    "TypeScript",
  ];

  return (
    <div id="about" ref={sectionRef} className="relative overflow-hidden p-1.5">
      <Container>
        <Title title="About Me" />

        <div className="flex items-center justify-between gap-8 flex-col lg:flex-row">
          {/* AI Chatbot Section - Premium Design */}
          <div className="ai-chat-container flex-1 w-full max-w-[450px] lg:max-w-[500px] relative mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 h-[500px] flex flex-col backdrop-blur-sm">
              {/* Chat Header - Premium Design */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-4 border-b border-cyan-500/30">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Cpu className="text-white" size={24} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg"></div>
                    <div className="absolute -top-1 -left-1">
                      <Sparkles className="text-cyan-300" size={12} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg">
                      Ubaidur's AI Assistant
                    </h3>
                    <p className="text-cyan-300 text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      Online • Ready to help
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-gray-800/30
                scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:bg-gray-800
                [&::-webkit-scrollbar-thumb]:bg-cyan-500/50
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:hover:bg-cyan-400/60"
              >
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${
                      message.isBot ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg ${
                        message.isBot
                          ? "bg-gradient-to-br from-cyan-500 to-cyan-600"
                          : "bg-gradient-to-br from-blue-500 to-blue-600"
                      }`}
                    >
                      {message.isBot ? (
                        <Bot size={18} className="text-white" />
                      ) : (
                        <User size={18} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] rounded-2xl p-4 shadow-lg backdrop-blur-sm ${
                        message.isBot
                          ? "bg-gray-800/80 text-gray-100 border-l-4 border-cyan-500"
                          : "bg-blue-600/90 text-white border-r-4 border-blue-400"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.isBot
                          ? renderTextWithLinks(message.text)
                          : message.text}
                      </p>
                      <div
                        className={`text-xs mt-2 font-medium ${
                          message.isBot ? "text-cyan-300" : "text-blue-200"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Questions */}
              {chatMessages.length <= 2 && !isTyping && !isLoading && (
                <div className="px-4 py-3 border-t border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
                  <div className="text-xs text-cyan-300 mb-2 font-semibold flex items-center gap-1">
                    <Sparkles size={12} />
                    Quick questions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-3 py-2 rounded-full transition-all duration-200 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area - Premium Design */}
              <div className="border-t border-cyan-500/20 p-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Ubaidur's skills, projects, experience..."
                    className="flex-1 bg-gray-700/80 border border-cyan-500/30 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 backdrop-blur-sm"
                    disabled={isLoading || isTyping}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || isTyping || !userInput.trim()}
                    className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white rounded-xl px-5 py-3 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25 disabled:shadow-none"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Story Cards */}
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
