import Title from "../../shared/Title";
import Container from "../../shared/Container";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Core",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      color: "from-cyan-400 to-purple-500",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      category: "Backend & Tools",
      color: "from-cyan-400 to-emerald-500",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Git & GitHub", level: 85 },
      ],
    },
  ];

  const SkillBar = ({ skill, color }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-semibold text-gray-200">
          {skill.name}
        </span>
        <motion.span
          className="text-xs font-bold text-main bg-cyan-400/10 px-2 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 2, delay: 1, repeat: 1, repeatDelay: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </div>
  );

  return (
    <div id="skills" className="relative overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <Title title="Skills" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with modern technologies. Each
            percentage reflects my proficiency and dedication to mastering these
            tools.
          </motion.p>
        </div>

        {/* Enhanced Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.002,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 14,
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                className={`p-8 rounded-3xl backdrop-blur-sm bg-gray-900/40 border ${category.borderColor} hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden`}
              >
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="flex items-center mb-8">
                  <div
                    className={`w-3 h-10 bg-gradient-to-b ${category.color} rounded-full mr-4`}
                  ></div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-main my-6 md:my-10">
            Also Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "TanStack Query",
              "Redux Toolkit",
              "React Router",
              "Axios",
              "JWT",
              "Firebase",
              "REST APIs",
              "VS Code",
              "Figma",
              "Netlify",
              "Vercel",
              "Postman",
              "ES6+",
              "Socket.io",
              "Responsive Design",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className=" px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800"
        >
          {[
            { number: "30+", label: "Projects Built" },
            { number: "15k+", label: "Lines of Code" },
            { number: "100%", label: "Dedication" },
            { number: "∞", label: "Passion for Code" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-main/80 to-main bg-clip-text text-transparent mb-3 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Skills;
