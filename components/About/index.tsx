/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../Navbar";
import Modal from "./modal";

const About = () => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <div className="relative min-h-screen   bg-[url(/assets/images/bg-about.png)] bg-left bg-cover flex justify-center items-center">
      <Modal isShown={isShown} setIsShown={setIsShown} />
      <div className="pl-0 lg:pl-[6%] flex flex-col lg:flex-row justify-center items-center min-h-screen w-full ">
        <div className="text-center lg:text-left w-full lg:w-1/2 px-4 lf:px-6 relative h-full flex justify-center items-center">
          <div className="h-full flex flex-col justify-center">
            <div className="font-friz-regular text-xl lg:text-2xl">
              FREE TO PLAY
            </div>
            <h1
              data-content="turn-based"
              className="font-friz-bold title-text title-shadow text-3xl lg:text-4xl "
            >
              TURN BASED RPG COMBAT
            </h1>
            <div className="py-4 w-full">
              <svg
                viewBox="0 0 465 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.5L58.145 0.78L116.237 0.48L232.473 0L348.763 0.48L406.855 0.78L465 1.5L406.855 2.22L348.763 2.52L232.473 3L116.237 2.52L58.145 2.22L0 1.5Z"
                  fill="#F1D795"
                />
              </svg>
            </div>

            <div className="font-lato pb-3 lg:pb-6 text-base  lg:text-xl">
              Anime - inspired RPG combat! Strategy and planning can easily turn
              the tide of battle. Witness awesome abilities and pristine
              gameplay.
            </div>
            <div className="relative w-full overflow-hidden flex justify-center lg:justify-start">
              <iframe
                className="w-[90%] h-[280px] lg:h-[200px] lf:h-[280px]"
                loading="lazy"
                src="https://www.youtube.com/embed/-ERMKXPYQl4?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* <img
                onClick={() => setIsShown(true)}
                className="cursor-pointer"
                src="/assets/images/youtube-frame.png"
                alt=""
              /> */}
          </div>
          <div className="absolute hidden lg:flex  bottom-0  lg:-bottom-[20%] -left-[10%]">
            <img src="/assets/images/leaf.png" alt="" />
          </div>
        </div>

        {/* <div className="mt-4 flex lg:hidden items-center gap-2 justify-center lg:justify-end lg:w-2/5 w-full">
          <img
            className=" w-36 sm:w-auto h-auto"
            src="/assets/images/appstore.png"
            alt=""
          />
          <img
            className=" w-36 sm:w-auto h-auto"
            src="/assets/images/googleplay.png"
            alt=""
          />
        </div> */}
        <div className="hidden lg:flex h-screen justify-end w-auto">
          <img src="/assets/images/about-char.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
