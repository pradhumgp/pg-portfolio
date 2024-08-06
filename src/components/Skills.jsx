const Skills = () => {
  return (
    <>
      <div className="px-20 py-24">
        <div className="flex flex-col gap-12 px-8">
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
            <ul className="flex flex-wrap items-baseline justify-center gap-12">
              <li className="flex flex-col items-center gap-2">
                <img src="/javascript.svg" alt="javascript" />
                <span className="text-lg text-gray-600">Javascript</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/typescript.svg" alt="typescript" />
                <span className="text-lg text-gray-600">Typescript</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/react.svg" alt="react" />
                <span className="text-lg text-gray-600">React</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/nodejs.svg" alt="nodejs" />
                <span className="text-lg text-gray-600">Node.js</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/express.svg" alt="express" />
                <span className="text-lg text-gray-600">Express</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/mongodb.svg" alt="mongodb" />
                <span className="text-lg text-gray-600">MongoDB</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/postgresql.svg" alt="postgresql" />
                <span className="text-lg text-gray-600">PostgreSQL</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/scss.svg" alt="sass/saas" />
                <span className="text-lg text-gray-600">Saas/Scss</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/tailwindcss.svg" alt="tailwindcss" />
                <span className="text-lg text-gray-600">TailwindCss</span>
              </li>
              
              <li className="flex flex-col items-center gap-2">
                <img src="/git.svg" alt="git" />
                <span className="text-lg text-gray-600">Git</span>
              </li>
              
              <li className="flex flex-col items-center gap-2">
                <img src="/aws.png" alt="aws" />
                <span className="text-lg text-gray-600">AWS</span>
              </li>

              <li className="flex flex-col items-center gap-2">
                <img src="/socket.svg" alt="socket" />
                <span className="text-lg text-gray-600">Socket.io</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
