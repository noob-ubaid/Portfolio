import React from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import Project from "./Project";
import Jobent from "/jobent.png";
import recipe from "/recipe.png";
import event from "/event.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
const Projects = () => {
  const allProjects = [
    {
      id: 1,
      img: Jobent,
      name: "Jobent",
      description:
        "Jobent is a community-driven platform for discovering, creating, and joining local social development events. It helps people connect with like-minded individuals while contributing to positive change in their communities.",
      features: [
        "Protected api with JWT",
        "User can create events",
        "Dynamic event details page with join event feature",
        "User-specific manage events page",
      ],
      techStack: [
        "React js",
        "Tailwind css",
        "React Router",
        "JWT",
        "Express js",
        "Mongodb",
        "Firebase",
        "Axios js",
        "GSAP",
        "Framer Motion",
      ],
      liveLink: "https://social-development-by-ubaid.netlify.app",
      githubLink: "https://github.com/noob-ubaid/Social-Development",
    },
    {
      id: 2,
      img: recipe,
      name: "Recipe Book",
      description:
        "Recipe Book is a trusted platform for food enthusiasts to discover, learn, and share recipes with a vibrant community. Whether you're a beginner or a passionate home chef, Recipe Book is the perfect place to connect and inspire.",
      features: [
        "Dashboard to manage added recipes, manage recipes, and monitor user activity.",
        "Sorting and Filtering Functionality ",
        "User can like the recipe",
        "User can update their recipe",
      ],
      techStack: [
        "React js",
        "Tailwind css",
        "React Router",
        "Express js",
        "Mongodb",
        "Firebase",
        "Axios js",
      ],
      liveLink: "https://recipe-book-by-ubaid.netlify.app",
      githubLink: "https://github.com/noob-ubaid/Recipe-app",
    },
    {
      id: 3,
      img: event,
      name: "Event Finder",
      description:
        "Event Explorer is a dynamic single-page web app that lets users discover and explore a variety of local events, including conferences, sports, and exhibitions. It helps people stay connected with what's happening around them.",
      features: [
        "User can update his profile",
        "Dynamic page title ",
        "Forget Password with Gmail redirection",
        "Authentication using Firebase",
      ],
      techStack: [
        "React js",
        "Tailwind css",
        "React Router",
        "Daisi Ui",
        "Firebase",
      ],
      liveLink: "https://event-finder-by-ubaid.netlify.app/",
      githubLink: "https://github.com/noob-ubaid/Event-Explorer",
    },
  ];
  return (
    <div id="projects">
      <Container>
        <Title title="Projects" />
        <div className="flex flex-col gap-10">
          {allProjects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              key={project.id}
            >
              <Project project={project}></Project>
            </motion.div>
          ))}
        </div>
        <div className="bg-main blur-[100px] hidden md:block size-36 absolute top-[2000px] left-4"></div>
      </Container>
    </div>
  );
};

export default Projects;
