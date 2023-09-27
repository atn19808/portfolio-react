import { useState } from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";
import { ScrollDown } from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <div className="mx-auto flex flex-col px-4 pb-8 pt-16 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1000px]">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-8 flex flex-initial flex-col items-center justify-center text-center lg:mb-0 lg:content-start lg:text-left">
            <h1 className="text-5xl font-normal text-stone-200 opacity-95">
              Hi, I'm Anh Ngo
            </h1>
            <h5 className="mb-4 mt-4 text-2xl font-normal text-stone-600">
              Fullstack Developer
            </h5>
            <p className="text-base text-stone-200 opacity-80">
              I design and code beautifully simple things, and I love what I do.
            </p>
          </div>
          <div className="flex flex-initial justify-center">
            <img
              className="h-80 w-auto"
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </div>
        </div>
        <ScrollDown
          to="projects"
          className="mt-12 flex cursor-pointer justify-center lg:justify-start"
        >
          <div className="flex items-center text-xl text-stone-100">
            Scroll down
            <img
              className="ml-2 h-8 w-8"
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </div>
        </ScrollDown>
      </div>
    </main>
  );
}

export default Hero;
