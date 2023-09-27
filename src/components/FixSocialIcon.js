import { FaLinkedin, FaGithub } from "react-icons/fa";

function FixSocialIcon() {
  return (
    <div className="fixed left-6 top-1/2 hidden -translate-y-2/4 md:block">
      <ul className="block">
        <li className="item">
          <a
            className="text-4xl text-stone-500 duration-200 ease-in hover:text-blue-500"
            href="https://www.linkedin.com/in/anh-ngo-64880692/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item mt-4">
          <a
            className="text-4xl text-stone-500 duration-200 ease-in hover:text-blue-500"
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

export default FixSocialIcon;
