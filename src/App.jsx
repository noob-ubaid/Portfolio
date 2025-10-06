import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SmoothCursor from "./shared/CustomCursor";

function App() {
  return (
    <>
      <Navbar />
      <SmoothCursor />
      <div className="px-4 md:px-8 2xl:px-0">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </>
  );
}

export default App;
