import { useState } from "react";

const Stacks = () => {
  const [activeStacks, setActiveStacks] = useState("frontend");

  const changeActiveStacks = (stacksName: string) => {
    setActiveStacks(stacksName)
  }
  return (
    <>
      <section
        id="stacks"
        className="text-white flex flex-col items-center py-2 px-1.5"
      >
        <h1 className="text-3xl font-medium m-4 md:text-5xl">Stacks</h1>
        <div>
          <nav>
            <ul className="flex text-2xl font-medium m-2 border-1 border-lightDarkOrange rounded-3xl divide-x-1 divide-lightDarkOrange">
              <li className={`hoverStack rounded-l-3xl p-3 px-6 ${activeStacks === "frontend" ? "bg-primary text-black" : "bg-black text-white"}`}  onClick={() => changeActiveStacks("frontend")}>
                Frontend
              </li>
              <li className={`hoverStack rounded-r-3xl p-3 px-6 ${activeStacks === "backend" ? "bg-primary text-black" : "bg-black text-white"}`} onClick={() => changeActiveStacks("backend")}>
                Backend
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid grid-cols-2 gap-5 m-5 mb-30 text-2xl font-bold text-lightText md:grid-cols-3">
          {activeStacks === "frontend" && (
            <>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-react.svg" alt="" />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-javascript.svg" alt="" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-typescript.svg" alt="" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-html.svg" alt="" />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-css.svg" alt="" />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-tailwind.svg" alt="" />
            <p>TailwindCSS</p>
          </div>
          </>
          )}
          {activeStacks === "backend" && (
            <>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-nodejs.svg" alt="" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-typescript.svg" alt="" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-python.svg" alt="" />
            <p>Python</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-javascript.svg" alt="" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-mysql.svg" alt="" />
            <p>MySQL</p>
          </div>
          <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 w-40 bg-opacitybg rounded-3xl md:p-5">
            <img className="w-15" src="/logo-mongodb.svg" alt="" />
            <p>MongoDB</p>
          </div>
          </>
          )}
        </div>
      </section>
    </>
  );
};

export default Stacks;
