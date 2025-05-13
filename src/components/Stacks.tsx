import { FaReact } from "react-icons/fa";

const Stacks = () => {
  return (
    <>
      <section className="text-white flex flex-col items-center py-2 px-1.5">
        <h1 className="text-3xl font-medium m-4 md:text-5xl">Stacks</h1>
        <div>
          <nav>
            <ul className="flex text-2xl font-normal m-2 border-1 border-lightDarkOrange rounded-3xl divide-x-1 divide-lightDarkOrange">
              <li className="rounded-l-3xl bg-primary p-3 px-6">Frontend</li>
              <li className="rounded-r-3xl bg-opacitybg text-lightText p-3 px-6">
                Backend
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid grid-cols-2 gap-5 m-5 text-2xl font-bold text-lightText md:grid-cols-3">
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-react.svg" alt="" />
                <p>React</p>
            </div>
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-javascript.svg" alt="" />
                <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-typescript.svg" alt="" />
                <p>TypeScript</p>
            </div>
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-html.svg" alt="" />
                <p>HTML</p>
            </div>
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-css.svg" alt="" />
                <p>CSS</p>
            </div>
            <div className="flex flex-col items-center border-2 border-lightDarkOrange p-2 bg-opacitybg rounded-3xl md:p-5">
                <img className="w-15" src="/logo-tailwind.svg" alt="" />
                <p>TailwindCSS</p>
            </div>
        </div>
      </section>
              <hr className="border-[2px] border-primary w-full"/>
    </>
  );
};

export default Stacks;
