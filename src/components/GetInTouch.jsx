const GetInTouch = ({refHook}) => {
  return (
    <>
      <div className="px-20 py-24" ref={refHook}>
        <div className="flex flex-col items-center gap-12 px-8">
          <div className="flex flex-col items-center gap-4">
            <div>
              <button className="px-5 py-1 text-sm font-medium text-gray-600 bg-gray-200 leading-20 rounded-xl">
                Get in touch
              </button>
            </div>
            <span className="max-w-xl text-xl text-gray-600">
              What&#39;s next? Feel free to reach out to me if you&#39;re
              looking for a developer, have a query, or simply want to connect.
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <img src="/mail.svg" alt="" />
              <span className="text-4xl text-gray-900">
                pradhumgp@gmail.com
              </span>
              <img src="/copy.svg" alt="" />
            </div>

            <div className="flex items-center gap-4">
              <img src="/phone.svg" alt="" />
              <span className="text-4xl text-gray-900">+91-7078852678</span>
              <img src="/copy.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-normal text-gray-600">You may also find me on these platforms!</span>
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
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
