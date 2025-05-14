import "./Globals.css";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <div className="background">
        <section id="home" className="h-[70vh] flex flex-col gap-10 items-center justify-center px-1.5">
          <div className="text-white font-medium flex flex-col">
            <p className="text-sm font-light md:text-lg">Hello, I'm</p>
            <h2 className="text-3xl font-medium md:text-4xl">
              João Pedro Silva
            </h2>
            <h1 className="text-4xl font-bold text-primary md:text-8xl">
              Fullstack Developer
            </h1>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/bigjujas" target="_blank" className="hoverButton bg-opacitybg text-white flex items-center gap-2 border-1 border-lightText text-lg py-1 px-5 rounded-xl font-medium md:text-2xl md:px-8 md:py-2 md:rounded-2xl">
              Github <FaGithub />{" "}
            </a>
            <a href="https://linkedin.com/in/joaopedrosilvasilva" target="_blank" className="hoverButton bg-opacitybg text-white flex items-center gap-2 border-1 border-lightText text-lg py-1 px-5 rounded-xl font-medium md:text-2xl md:px-8 md:py-2 md:rounded-2xl">
              Linkedin <FaLinkedin />{" "}
            </a>
          </div>
        </section>
        <Stacks />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
