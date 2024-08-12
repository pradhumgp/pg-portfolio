const Skills = ({ refHook }) => {
  
  const skillsData = [
    {
      imgsrc: "/javascript.svg",
      name: "Javascript",
    },
    {
      imgsrc: "/typescript.svg",
      name: "Typescript",
    },
    {
      imgsrc: "/nextjs.svg",
      name: "Next.js",
    },
    {
      imgsrc: "/react.svg",
      name: "React",
    },
    {
      imgsrc: "/vue.png",
      name: "Vue.js",
    },
    {
      imgsrc: "/expo.svg",
      name: "Expo",
    },
    {
      imgsrc: "/nodejs.svg",
      name: "Node.js",
    },
    {
      imgsrc: "/express.svg",
      name: "Express.js",
    },
    {
      imgsrc: "/mongodb.svg",
      name: "MongoDB",
    },
    {
      imgsrc: "/postgresql.svg",
      name: "PostgreSQL",
    },
    {
      imgsrc: "/scss.svg",
      name: "Saas/Scss",
    },
    {
      imgsrc: "/tailwindcss.svg",
      name: "TailwindCss",
    },
    {
      imgsrc: "/git.svg",
      name: "Git",
    },
    {
      imgsrc: "/aws.png",
      name: "AWS",
    },
    {
      imgsrc: "/socket.svg",
      name: "Socket.io",
    },
  ];
  return (
    <>
      <div className="p-4 md:p-8 lg:py-24 lg:px-20" ref={refHook}>
        <div className="flex flex-col items-center gap-12 p-0 md:px-8">
          <div className="flex flex-col items-center gap-4">
            <div>
              <button className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-200 leading-20 rounded-xl">
                Skills
              </button>
            </div>
            <span className="text-xl text-gray-600 leading-28">
              The skills, tools and technologies I am really good at:
            </span>
          </div>
          <div>
            <ul className="flex flex-wrap items-baseline justify-center max-w-3xl gap-12">
            {
              skillsData.map((skill, index)=>(
                <li className="flex flex-col items-center gap-2" key={index}>
                   <img src={skill.imgsrc} alt={skill.name} />
                   <span className="text-lg text-gray-600">{skill.name}</span>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
