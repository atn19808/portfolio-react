import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  const topOpacity = isOpen ? "top-0 opacity-100" : "-top-full opacity-0";
  return (
    <div
      className={`${topOpacity} fixed left-0 z-[999] flex h-full w-full  flex-col items-center justify-center bg-black duration-300 ease-in-out`}
      isOpen={isOpen}
      onClick={toggle}
    >
      <FaTimes
        className="absolute right-8 top-8 cursor-pointer text-[2rem] text-stone-50"
        onClick={toggle}
      />
      <div className="flex flex-col content-center items-center">
        <ScrollLink
          onClick={toggle}
          className="cursor-pointer text-[1.7rem] text-stone-50 hover:text-stone-400"
          to="projects"
          smooth={true}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          onClick={toggle}
          className="mt-8 cursor-pointer text-[1.7rem] text-stone-50 hover:text-stone-400"
          to="about"
          smooth={true}
        >
          About
        </ScrollLink>
        <ScrollLink
          onClick={toggle}
          className="mt-8 cursor-pointer text-[1.7rem] text-stone-50 hover:text-stone-400"
          to="contact"
          smooth={true}
        >
          Contact
        </ScrollLink>
      </div>
      <div className="mt-20 flex content-center text-[1.7rem]" onClick={toggle}>
        <a
          className="btn PrimaryBtn"
          href="https://www.linkedin.com/in/anh-ngo-64880692/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
