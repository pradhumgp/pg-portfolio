import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import GetInTouch from "../components/GetInTouch";
import { useRef } from "react";

const HomePage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const getInTouchRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-screen h-screen">
        <Navbar
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          experienceRef={experienceRef}
          getInTouchRef={getInTouchRef}
        />
        <Hero />
        <About refHook={aboutRef} />
        <Skills refHook={skillsRef} />
        <Experience refHook={experienceRef} />
        <GetInTouch refHook={getInTouchRef} />
      </div>
    </>
  );
};

export default HomePage;
