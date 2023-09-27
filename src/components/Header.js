import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <nav className="z-10 flex h-24 items-center justify-between bg-transparent">
        <LinkRouter to="/">
          <img
            className="h-12 w-12"
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/logo.png"
            alt="logo"
          />
        </LinkRouter>
        <div className="-mr-6 hidden items-center md:flex">
          <ScrollLink
            className="flex h-full cursor-pointer items-center text-[1.2rem] text-stone-400 hover:text-stone-50"
            to="projects"
            smooth={true}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className="ml-4 flex h-full cursor-pointer items-center text-[1.2rem] text-stone-400 hover:text-stone-50"
            to="about"
            smooth={true}
          >
            About
          </ScrollLink>
          <ScrollLink
            className="ml-4 flex h-full cursor-pointer items-center text-[1.2rem] text-stone-400 hover:text-stone-50"
            to="contact"
            smooth={true}
          >
            Contact
          </ScrollLink>
        </div>
        <nav className="mr-6 hidden items-center md:flex">
          <a
            className="btn PrimaryBtn"
            href="https://github.com/atn19808/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <FaBars
          className="block cursor-pointer text-[1.8rem] text-stone-50 md:hidden"
          onClick={toggle}
        />
      </nav>
    </div>
  );
};

export default Header;
