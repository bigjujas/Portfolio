import "./Globals.css";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Header />
      <div className="bg-darkgreen">
        <section className="h-[60vh] flex flex-col items-center px-6 sm:px-12">
          <div className="text-center m-auto flex flex-col gap-2">
            <h2 className="text-white font-medium text-4xl">
              João Pedro Silva
            </h2>
            <h1 className="text-6xl sm:text-8xl font-semibold text-primary">
              Front-end Developer
            </h1>
            <p className="text-1xl font-normal text-white">&lt;Welcome!/&gt;</p>
          </div>
        </section>
        <Stacks />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
