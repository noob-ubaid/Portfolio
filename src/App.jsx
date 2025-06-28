import "./App.css";
import AboutMe from "./components/About/AboutMe";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Skills/>
    </>
  );
}

export default App;
