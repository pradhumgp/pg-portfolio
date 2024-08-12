const Drawer = ({
  show,
  toggle,
  scrollToSection,
  aboutRef,
  skillsRef,
  experienceRef,
  getInTouchRef,
}) => {
  const scrollTo = (ref) => {
    toggle();
    scrollToSection(ref);
  }
  return (
    <>
      <div
        className={`${
          !show && "hidden"
        } flex flex-col w-9/12 right-0 top-0 fixed h-full bg-white drop-shadow-2xl shadow-2xl md:hidden`}
      >
        <div className="flex justify-between p-4 border-b-2 border-gray-100">
          <span
            className="text-3xl font-bold text-gray-900 leading-36"
            onClick={toggle}
          >
            {"<pg />"}
          </span>
          <img src="/close.svg" onClick={toggle} alt="close" />
        </div>

        <ul className="flex flex-col gap-4 p-4 text-gray-600 border-b-2 border-gray-100">
          <li onClick={()=>scrollTo(aboutRef)}>About</li>
          <li onClick={()=>scrollTo(skillsRef)}>Skills</li>
          <li onClick={()=>scrollTo(experienceRef)}>Experience</li>
          <li onClick={()=>scrollTo(getInTouchRef)}>Contact</li>
        </ul>
        <div className="flex flex-col gap-4 p-4">
          {/* <div className="flex justify-between">
            <span className="text-gray-600">Switch Theme</span>
            <img src="/mode.svg" alt="mode" />
          </div> */}
          <a
            href={
              "https://drive.google.com/drive/folders/1E6dmagt_-mUaGjnMXzCVjCInHKv5hczv"
            }
            target="blank"
          >
            <button className="px-4 py-1.5 bg-gray-900 text-gray-50 rounded-xl hover:bg-gray-700 font-medium w-full">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Drawer;
