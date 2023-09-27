import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <nav className="z-10 flex h-24 content-between items-center bg-transparent">
        <Logo to="/">
          <img
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
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
