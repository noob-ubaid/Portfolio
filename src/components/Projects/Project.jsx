import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Project = ({ project }) => {
  const {
    name,
    liveLink,
    githubLink,
    img,
    techStack,
    features,
    description,
    id,
  } = project;
  return (
    <div className="flex items-center flex-col lg:flex-row border border-main/40 p-4 md:p-8 rounded-md gap-8 md:gap-12">
      <div className="flex-1">
        <img className="rounded-md md:h-[400px]  h-auto object-cover w-auto " src={img} alt="" />
       
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-gray-300">{name}</h2>
        <p className="text-gray-300/70">{description}</p>
        <ul className="list-disc list-inside pl-2">
          {features.map((feature) => (
            <li key={feature} className="text-gray-300/70">{feature}</li>
          ))}
        </ul>
        <div className="flex items-center flex-wrap gap-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-black rounded-full cursor-pointer bg-main px-2 py-1 md:px-3 md:py-1.5 text-sm
               border border-transparent
               hover:border-main/40 hover:text-gray-300 hover:bg-transparent duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-10 mt-2">
          <a
            href={githubLink}
            className="bg-main/20 hover:bg-gray-800 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
            target="_blank"
          >
            {" "}
            <FaGithub size={20} /> Github link
          </a>
          <a
            href={liveLink}
            className="bg-main/20 hover:bg-gray-800 hover:text-main duration-300 flex items-center justify-center flex-row-reverse md:gap-4 gap-2 text-center w-full rounded-md md:px-4 md:py-3 px-2 py-2"
            target="_blank"
          >
            {" "}
            <FaExternalLinkAlt size={17} /> Live link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
