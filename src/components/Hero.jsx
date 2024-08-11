const Hero = () => {
  return (
    <>
      <div className="p-4 md:pb-0 md:py-24 md:px-20">
        <div className="flex flex-col-reverse items-center gap-12 md:px-8 md:justify-between md:flex-row">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-6xl font-bold text-gray-900 leading-72">
                Hi, I&#39;m Pradhum 👋
              </span>
              <p className="max-w-xl text-gray-600 leading-24">
                I&#39;m a full stack developer specializing in React.js and
                Node.js, with 2 years of experience creating exceptional digital
                experiences. My focus is on delivering fast, accessible,
                visually appealing, and responsive web applications. Despite
                having been in the field for over 2 years, my passion for web
                development remains as strong as ever.
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
                  Available to work
                </span>
              </div>
            </div>

            <div className="flex gap-1">
              <a
                href="https://github.com/pradhumgp"
                target="blank"
                className="hover:bg-gray-100 hover:rounded-sm"
              >
                <img src="/github.svg" alt="github" />
              </a>
              <a
                href="https://x.com/pradhumgp"
                target="blank"
                className="hover:bg-gray-100 hover:rounded-sm"
              >
                <img src="/twitter.svg" alt="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/pradhum-gupta-8860291b4/"
                target="blank"
                className="hover:bg-gray-100 hover:rounded-sm"
              >
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
          </div>
          <img
            src="/vector.svg"
            alt="Pradhum's photo"
            className="self-auto w-full h-full md:w-1/2 md:h-3/4 md:self-end"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
