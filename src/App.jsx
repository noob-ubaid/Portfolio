import Navbar from "./components/Navbar/Navbar";
import SmoothCursor from "./shared/CustomCursor";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./shared/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div>
          <Navbar />
          <SmoothCursor scroll={scroll} />
          <div className="px-4 md:px-8 2xl:px-0">
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
