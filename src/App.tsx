import "./Globals.css";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
import AboutMe from "./components/AboutMe";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <>
      <Header />
      <div className="bg-darkOrange">
        <section className="bg-black h-[70vh] flex flex-col gap-10 items-center justify-center px-1.5">
          <div className="text-white font-medium flex flex-col">
            <p className="text-xl font-light md:text-2xl">Welcome</p>
            <h2 className="text-3xl font-medium md:text-4xl">
              João Pedro Silva
            </h2>
            <h1 className="text-4xl font-bold text-primary md:text-8xl">
              Fullstack Developer
            </h1>
          </div>
          <div className="flex gap-8">
            <button className="bg-white flex items-center gap-2 border-1 border-black text-lg py-1 px-5 rounded-xl font-medium md:text-2xl md:px-8 md:py-2 md:rounded-2xl">
              Github <FaGithub />{" "}
            </button>
            <button className="bg-white flex items-center gap-2 border-1 border-black text-lg py-1 px-5 rounded-xl font-medium md:text-2xl md:px-8 md:py-2 md:rounded-2xl">
              Linkedin <FaLinkedin />{" "}
            </button>
          </div>
        </section>
        <hr className="border-[2px] border-primary w-full" />
        <Stacks />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
