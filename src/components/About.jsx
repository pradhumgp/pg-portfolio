const About = ({refHook}) => {
  return (
    <>
      <div className="p-4 bg-gray-100 md:p-8 lg:py-24 lg:px-20" ref={refHook}>
        <div className="flex flex-col gap-12 p-0 md:px-8">
          <div className="self-center">
            <button className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-200 leading-20 rounded-xl">
              About me
            </button>
          </div>
          <div className="flex flex-col items-center gap-12 lg:items-start lg:justify-evenly lg:flex-row">
            <div>
            <img src="/pg.jpeg" alt="Pradhum's photo" className="object-contain w-auto border border-black"/>
            </div>
          <div className="flex flex-col max-w-xl gap-12">
            <div>
            <span className="text-3xl font-semibold text-gray-900 leading-36">Curious about me? Here you have it:</span>
            </div>
            <div className="flex flex-col gap-4 text-gray-600 leading-24">
            <p>I&#39;m a passionate, Full stack developer (React.js & Node.js). 
                I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, 
                pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p>
            I began my journey as a Developer in 2019, and since then, I&#39;ve continued to grow and evolve as a developer, 
            taking on new challenges and learning the latest technologies along the way. 
            Now, in my early twenties, 5 years after starting my web development journey, 
            I&#39;m building web-mobile applications using modern technologies such as Vue.js, React/React-Native, TypeScript, Tailwindcss, and much more.
            </p>
            <p>
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p>
            When I&#39;m not in full-on developer mode, you can find me enjoying some music, watching movies, or playing chess. 
            I also like to stay connected with the tech community on Twitter, where I share tech-related insights. Feel free to follow me on Twitter or check out my work on GitHub.


            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                <li className="col-span-1">B.Tech in Computer Science from GLA University</li>
                <li className="col-span-1">Full stack developer with a focus on creating great user experiences</li>
                <li className="col-span-1">Always learning and improving</li>
                <li className="col-span-1">Aspiring indie hacker</li>
            </ul>
            <p>
            I&#39;d love to hear from you! Let&#39;s connect and explore new possibilities together.
            </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
