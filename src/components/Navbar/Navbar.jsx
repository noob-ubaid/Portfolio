import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const tl = gsap.timeline()
  useGSAP(()=>{
    gsap.from(".logo",{
      opacity: 0,
      y: -20,
      duration: 0.1,
    })
    tl.from(".nav",{
      opacity: 0,
      y: -10,
      duration: 0.3,
      stagger: 0.2,
    })
    tl.from(".contact",{
      opacity: 0,
      y: -10,
      duration: 0.4,
      stagger: 0.2,
    })
  },[])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificate"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <div className="flex items-center flex-col md:flex-row gap-2 md:gap-2">
      {[
        { id: "home", label: "Home" },
        { id: "about", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "certificate", label: "Certificate" },
      ].map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`font-medium text-lg transition-colors duration-300 ${
            activeSection === id
              ? "text-main font-semibold w-full md:w-fit text-center nav px-4 py-2 duration-500 bg-gray-600/30 backdrop-blur-2xl rounded-md"
              : "text-gray-300 hover:text-main/80 rounded-md nav px-4 py-2"
          }`}
        >
          <li className="list-none capitalize">{label}</li>
        </a>
      ))}
    </div>
  );

  return (
    <div className="sticky max-w-[1400px] rounded-full px-1  mx-auto top-4 z-50 bg-gray-800/80 backdrop-blur">
      <div className="navbar py-2">
        <div className="navbar-start">
          <div className="dropdown hover:bg-gray-800">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="logo">
            <img
            className="size-11 ml-3 md:ml-0  rounded-full"
            src={logo}
            alt="logo"
          />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="#contact"
            className="text-black px-5 contact py-2.5 rounded-full bg-main"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;







