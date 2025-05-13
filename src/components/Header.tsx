import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  return (
    <nav>
      <ul className="text-white text-xl md:text-2xl font-medium flex flex-col gap-1 md:flex-row md:gap-12">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Stacks</a>
        </li>
        <li>
          <a href="">About Me</a>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-black sticky top-0 mx-auto w-full flex justify-between items-center p-3 px-6 border-b-1 border-lightDarkOrange">
        <div className="flex flex-[1] items-center justify-between flex-wrap">
          <img
            className="w-12 md:16 rounded-full my-auto"
            src="/image1.jpg"
            alt=""
          />
          <div className="hidden md:flex">
            <Nav />
          </div>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleNav}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isOpen && (
            <div className=" text-center basis-full md:hidden">
              <Nav />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
