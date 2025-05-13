import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <nav>
      <ul className="text-white text-xl md:text-2xl font-medium flex flex-col gap-1 md:flex-row md:gap-12">
        <li className="hoverHeader">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeTab === "home" ? "text-primary scale-105" : ""
            } `}
            onClick={() => changeActiveTab("home")}
          >
            Home
          </Link>
        </li>
        <li className="hoverHeader">
          <Link
            to="stacks"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeTab === "stacks" ? "text-primary scale-105" : ""
            } `}
            onClick={() => changeActiveTab("stacks")}
          >
            Stacks
          </Link>
        </li>
        <li className="hoverHeader">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer ${
              activeTab === "about" ? "text-primary scale-105" : ""
            } `}
            onClick={() => changeActiveTab("about")}
          >
            About Me
          </Link>
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
            src="/image2.jpg"
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
