import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    // display: block;
  }

  .item + .item {
    // margin-top: 1rem;
  }

  a {
    // font-size: 2rem;
    // color: rgb(119, 119, 121);
    // transition: 0.3s ease-in;
    // &:hover {
    //   color: rgb(57, 134, 250);
    // }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <div className="hidden md:block fixed top-1/2 left-6 -translate-y-2/4">
      <ul className="block">
        <li className="item">
          <a
            className="text-stone-500 text-4xl ease-in duration-200 hover:text-blue-500"
            href="https://www.linkedin.com/in/anh-ngo-64880692/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item mt-4">
          <a
            className="text-stone-500 text-4xl ease-in duration-200 hover:text-blue-500"
            href="https://github.com/atn19808/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        {/* <li className="item">
          <a
            href="https://github.com/your_username/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default FixSocialIcon;
