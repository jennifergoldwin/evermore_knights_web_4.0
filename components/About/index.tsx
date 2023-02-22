/* eslint-disable @next/next/no-img-element */
import React from "react";
import Modal from "./modal";
import { motion } from "framer-motion";
const About = () => {
  const [isShown, setIsShown] = React.useState(false);
  const imgMotion = {
    rest: {
      transform: "scale(1) translateX(0px)",
    },
    play: {
      transform: "scale(1.05) translateX(5px)",
      transition: {
        type: "spring",
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };
  return (
    <div className="relative overflow-hidden h-screen">
      <Modal
        id="about"
        isShown={isShown}
        setIsShown={setIsShown}
        // src="https://www.youtube-nocookie.com/embed/-ERMKXPYQl4"
        src="/assets/video/trailer.mp4"
      />
      <div
        className={`bg-[url(/assets/images/bg-about.png)] bg-left bg-cover h-full `}
      >
        <div className="pl-0 lf:pl-[6%] flex flex-col lf:flex-row justify-center items-center min-h-screen w-full relative">
          <div className="text-center lf:text-left w-full md:w-[80%] lg:w-[70%] lf:w-1/2 px-4 lf:px-6 relative h-full flex justify-center items-center">
            <div className="h-full flex flex-col justify-center items-center lf:items-start">
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
                Anime - inspired RPG combat! Strategy and planning can easily
                turn the tide of battle. Witness awesome abilities and pristine
                gameplay.
              </div>
              {/* <div
              className="relative w-full overflow-hidden flex justify-center lf:justify-start"
              onClick={() => setIsShown(true)}
            >
              <iframe
                className="w-[90%] h-[280px]  lg:h-[400px]  lf:h-[280px]"
                loading="lazy"
                src="https://www.youtube.com/embed/-ERMKXPYQl4?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div> */}
              {/* <img
                onClick={() => setIsShown(true)}
                className="cursor-pointer w-full lf:w-[80%] h-auto"
                src="/assets/images/youtube-frame.png"
                alt=""
                
              /> */}
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="play"
                className={` outer-video cursor-pointer w-[100%]  lf:w-[80%] h-auto`}
                onClick={() => {
                  setIsShown(true);
                }}
              >
                <div className="absolute top-0 left-0 z-20">
                  <img
                    src="/assets/images/arrow.png"
                    alt=""
                    className="w-[40px] h-[40px] rotate-[315deg] p-2"
                  />
                </div>
                <div className="absolute top-0 right-0 z-20">
                  <img
                    src="/assets/images/arrow.png"
                    alt=""
                    className="w-[40px] h-[40px] rotate-[45deg] p-2"
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-20">
                  <img
                    src="/assets/images/arrow.png"
                    alt=""
                    className="w-[40px] h-[40px] rotate-[225deg] p-2"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20">
                  <img
                    src="/assets/images/arrow.png"
                    alt=""
                    className="w-[40px] h-[40px] rotate-[135deg] p-2"
                  />
                </div>
                <div className="absolute w-full h-full flex justify-center items-center  z-20">
                  <img src="/assets/images/play.png" alt="" className=" p-2" />
                </div>
                <div className="overlay" />
                <motion.img
                  variants={imgMotion}
                  src="/assets/images/about-youtube.png"
                  alt=""
                />
              </motion.div>
            </div>

            <div className="absolute hidden lf:flex  bottom-0 z-30  lg:-bottom-[20%] -left-[10%]">
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
          {/* <div className="overflow-hidden h-screen  w-full lf:w-1/2 relative">
            <img
              className="hidden lf:block h-screen object-cover w-auto fixed bottom-0 top-0  right-0 translate-x-[10%] lgd:translate-x-[0%]"
              src="/assets/images/about-char.png"
              alt=""
            />
          </div> */}
          <div className="hidden lf:flex h-screen justify-end w-auto">
            <img src="/assets/images/about-char.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
