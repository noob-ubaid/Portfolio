import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Certificates from "./components/Certificates/Certificates";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Certificates/>
    </>
  );
}

export default App;
