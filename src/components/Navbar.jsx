import { useState } from "react";
import Drawer from "./Drawer";

const Navbar = ({
  scrollToSection,
  aboutRef,
  skillsRef,
  experienceRef,
  getInTouchRef,
}) => {
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  }
  return (
    <>
      <div className="p-4 md:py-4 md:px-20">
        <div className="flex items-center justify-between w-full p-0 md:px-8">
          <span className="text-3xl font-bold text-gray-900 leading-36">
            {"<pg />"}
          </span>
          <img src="/hamburger.svg" alt="hamburger" className="md:hidden" onClick={toggleDrawer}/>
          <ul className="hidden md:text-gray-600 md:gap-6 md:items-center md:flex">
            <li onClick={() => scrollToSection(aboutRef)} className="p-1 hover:bg-gray-100 hover:rounded-sm hover:cursor-pointer">About</li>
            <li onClick={() => scrollToSection(skillsRef)} className="p-1 hover:bg-gray-100 hover:rounded-sm hover:cursor-pointer">Skills</li>
            <li onClick={() => scrollToSection(experienceRef)} className="p-1 hover:bg-gray-100 hover:rounded-sm hover:cursor-pointer">Experience</li>
            <li onClick={() => scrollToSection(getInTouchRef)} className="p-1 hover:bg-gray-100 hover:rounded-sm hover:cursor-pointer">Contact</li>
            <li>
              <img src="/divider.svg" alt="" />
            </li>
            <ul className="flex items-center gap-4">
              {/* <li><img src="/mode.svg" alt="mode"/></li> */}
              <li>
                <a
                  href={
                    "https://drive.google.com/drive/folders/1E6dmagt_-mUaGjnMXzCVjCInHKv5hczv"
                  }
                  target="blank"
                >
                  <button className="px-4 py-1.5 bg-gray-900 text-gray-50 rounded-xl hover:bg-gray-700">
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <Drawer show={show} toggle={toggleDrawer} scrollToSection={scrollToSection} aboutRef={aboutRef} skillsRef={skillsRef} experienceRef={experienceRef} getInTouchRef={getInTouchRef}/>
    </>
  );
};

export default Navbar;
