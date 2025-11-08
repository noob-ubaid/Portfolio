import React from "react";
import Container from "../../shared/Container";
import Title from "../../shared/Title";
import Project from "./Project";
import Jobent from "/jobent.png";
import recipe from "/recipe.png";
import careerCrafter from "/careerCrafter.png";
import devdit from "/devdit.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../shared/Variants";
const Projects = () => {
  const allProjects = [
    {
      id: 1,
      img: careerCrafter,
      name: "Career Crafter",
      teamProject: true,
      description:
        "Career Crafter is an AI-powered networking platform that helps users find jobs, build resumes, create CVs, enhance skills, and connect with professionals through smart, personalized recommendations.",
      features: [
        "Job seekers can create their resumes and CVs.",
        "Job seekers can analyze their skills through our Skill Gap feature.",
        "If job seekers already have a resume, they can check whether it is ATS-friendly.",
        "Job seekers can improve their interview skills through our Mock Interview feature.",
        "Job seekers receive job posts that match their skills and can apply directly.",
        "Users can chat live, make video calls, and voice calls with their connected contacts.",
        "Users are guided through our AI Chatbot feature.",
        "Users receive personalized guidance from our AI Mentor on how to improve their desired skills.",
        "Users can access more AI features by purchasing our Premium Plan.",
        "Users can share job posts, and the shared recipients can apply for those jobs.",
        "Users can save job posts and apply later when ready.",
      ],
      techStack: [
        "React JS",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "Stripe",
        "JWT",
        "Express JS",
        "Node JS",
        "MongoDB",
        "Socket.io",
        "Axios JS",
        "Firebase",
      ],
      liveLink: "https://careercrafter5.web.app",
      clientLink: "https://github.com/moshiurrahmandeap11/careerCrafter-client",
      serverLink: "https://github.com/moshiurrahmandeap11/careerCrafter-ServerV2",
    },
    {
      id: 2,
      img: devdit,
      name: "Devdit",
      teamProject: false,
      description:
        "Devdit is a dynamic single-page web app that lets users create, discover, and engage in discussions on a variety of topics. It helps people share knowledge and stay connected with community conversations.",
      features: [
        "Role based access (user and admin)",
        "A user can post 5 posts.if he want to posts more than 5 he has to pay. ",
        "Users can comment on posts and report inappropriate comments.",
        "User can upvote , downvote and share the post in Whatsapp and Facebook",
      ],
      techStack: [
        "React JS",
        "Tailwind css",
        "React Router",
        "Tanstack Query",
        "Stripe",
        "JWT",
        "Express JS",
        "MongoDB",
        "Axios JS",
        "Firebase",
      ],
      liveLink: "https://dev-forum-by-ubaid.netlify.app",
      clientLink: "https://github.com/noob-ubaid/devdit-client",
      serverLink: "https://github.com/noob-ubaid/devdit-server",
    },
    {
      id: 3,
      img: Jobent,
      name: "Jovent",
      teamProject: false,
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
      clientLink: "https://github.com/noob-ubaid/Social-Development",
      serverLink: "https://github.com/noob-ubaid/Social-development-server",
    },
    {
      id: 4,
      img: recipe,
      name: "Recipe Book",
      teamProject: false,
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
      clientLink: "https://github.com/noob-ubaid/Recipe-app",
      serverLink: "https://github.com/noob-ubaid/Recipe-book-server",
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
              viewport={{ once: true }}
              key={project.id}
            >
              <Project project={project}></Project>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
