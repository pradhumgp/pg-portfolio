const Hero = () => {
  return (
    <>
      <div className="px-20 py-24">
        <div className="flex justify-between gap-12 px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-bold text-gray-900 leading-72">
                Hi, I&#39;m Pradhum 👋
              </span>
              <p className="text-gray-600 leading-24">
                I&#39;m a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <img src="/location.svg" alt="location" />
                <span className="text-gray-600 leading-24">
                  Firozabad, India
                </span>
              </div>
              <div className="flex gap-2">
                <img src="/online.svg" alt="" />
                <span className="text-gray-600 leading-24">Available for new projects</span>
              </div>
            </div>

            <div className="flex gap-1">
              <img src="/github.svg" alt="github" />
              <img src="/twitter.svg" alt="twitter" />
              <img src="/linkedin.svg" alt="linkedin" />
            </div>
          </div>
          <div>
            <img src="/pg.jpeg" alt="Pradhum's photo" className="object-cover w-full h-full rounded-md shadow-xl"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
