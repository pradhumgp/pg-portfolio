import { useState } from "react";

const GetInTouch = ({refHook}) => {
  const [copySuccess, setCopySuccess] = useState('');
  const copy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopySuccess('Copied to clipboard!');
        console.log('copied!!!')
      })
      .catch(err => {
        setCopySuccess('Failed to copy!');
        console.error('Could not copy text: ', err);
      });
  };
  return (
    <>
      <div className="p-4 md:p-8 lg:py-24 lg:px-20" ref={refHook}>
        <div className="flex flex-col items-center gap-12 p-0 md:px-8">
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
              <span className="text-2xl text-gray-900 md:text-4xl">
                pradhumgp@gmail.com
              </span>
              <img src="/copy.svg" alt="" className="hover:bg-gray-100 hover:rounded-sm" onClick={()=>copy('pradhumgp@gmail.com')}/>
            </div>

            <div className="flex items-center gap-4">
              <img src="/phone.svg" alt="" />
              <span className="text-2xl text-gray-900 md:text-4xl">+91-7078852678</span>
              <img src="/copy.svg" alt="" className="hover:bg-gray-100 hover:rounded-sm" onClick={()=>copy('+91-7078852678')}/>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="font-normal text-gray-600">You may also find me on these platforms!</span>
            <div className="flex gap-1">
              <a href="https://github.com/pradhumgp" target="blank" className="hover:bg-gray-100 hover:rounded-sm">
                <img src="/github.svg" alt="github" />
              </a>
              <a href="https://x.com/pradhumgp" target="blank" className="hover:bg-gray-100 hover:rounded-sm">
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
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
