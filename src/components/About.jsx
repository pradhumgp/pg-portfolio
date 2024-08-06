const About = () => {
  return (
    <>
      <div className="px-20 py-24 bg-gray-100">
        <div className="flex flex-col gap-12 px-8">
          <div className="self-center">
            <button className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-200 leading-20 rounded-xl">
              About me
            </button>
          </div>
          <div className="flex gap-12 justify-evenly">
            <div>
            <img src="/pg.jpeg" alt="Pradhum's photo" className="object-cover w-auto h-full rounded-md shadow-xl"/>
            </div>
          <div className="flex flex-col max-w-xl gap-12">
            <div>
            <span className="text-3xl font-semibold text-gray-900 leading-36">Curious about me? Here you have it:</span>
            </div>
            <div className="flex flex-col gap-4 text-gray-600 leading-24">
            <p>I&#39;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). 
                I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, 
                pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p>
            I began my journey as a web developer in 2015, and since then, I&#39;ve continued to grow and evolve as a developer, 
            taking on new challenges and learning the latest technologies along the way. 
            Now, in my early thirties, 7 years after starting my web development journey, 
            I&#39;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p>
            I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p>
            When I&#39;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, 
            witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, 
            or you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                <li className="col-span-1">B.E. in Computer Engineering</li>
                <li className="col-span-1">Avid learner</li>
                <li className="col-span-1">Full time freelancer</li>
                <li className="col-span-1">Aspiring indie hacker</li>
            </ul>
            <p>
            One last thing, I&#39;m available for freelance work, so feel free to reach out and say hello! I promise I don&#39;t bite 😉
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
