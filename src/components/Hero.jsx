const Hero = () => {
  return (
    <>
      <div className="px-20 py-24 pb-0">
        <div className="flex justify-between gap-12 px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-bold text-gray-900 leading-72">
                Hi, I&#39;m Pradhum 👋
              </span>
              <p className="max-w-2xl text-gray-600 leading-24">
                I&#39;m a full stack developer (React.js & Node.js) with a focus
                on creating (and occasionally designing) exceptional digital
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
                <span className="text-gray-600 leading-24">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              <a href="https://github.com/pradhumgp" target="blank">
                <img src="/github.svg" alt="github" />
              </a>
              <a href="https://x.com/pradhumgp" target="blank">
                <img src="/twitter.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradhum-gupta-8860291b4/"
                target="blank"
              >
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
          <div>
            <img
              src="/vector.svg"
              alt="Pradhum's photo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
