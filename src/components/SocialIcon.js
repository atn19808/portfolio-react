import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialIcon() {
  return (
    <div className="mt-8 block md:hidden">
      <ul className="flex list-none items-center justify-center">
        <li>
          <a
            className="text-5xl text-stone-900 duration-200 ease-in hover:text-blue-500"
            href="https://www.linkedin.com/in/anh-ngo-64880692/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="ml-8">
          <a
            className="text-5xl text-stone-900 duration-200 ease-in hover:text-blue-500"
            href="https://github.com/atn19808/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcon;
