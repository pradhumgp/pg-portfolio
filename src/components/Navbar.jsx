const Navbar = ({
  scrollToSection,
  aboutRef,
  skillsRef,
  experienceRef,
  getInTouchRef,
}) => {
  return (
    <>
      <div className="w-full px-20 py-4">
        <div className="flex items-center justify-between w-full px-8">
          <span className="text-3xl font-bold text-gray-900 leading-36">
            {"<pg />"}
          </span>
          <ul className="flex items-center gap-6 text-gray-600">
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(skillsRef)}>Skills</li>
            <li onClick={() => scrollToSection(experienceRef)}>Experience</li>
            <li onClick={() => scrollToSection(getInTouchRef)}>Contact</li>
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
                  <button className="px-4 py-1.5 bg-gray-900 text-gray-50 rounded-xl">
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
