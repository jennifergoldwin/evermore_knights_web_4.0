import React from "react";
import Modal from "./modal";
import { motion, useInView } from "framer-motion";
//img
import Image from "next/image";
import arrow from "../../public/assets/images/arrow.png";
import youtubeBg from "../../public/assets/images/about-youtube.png";
import play from "../../public/assets/images/play.png";
import char from "../../public/assets/images/about-char.png";
import leaf from "../../public/assets/images/leaf.png";
const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });
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
  // const textMotion = {
  //   rest: {
  //     transform: "translateY(20%)",
  //     opacity: 0,
  //   },
  //   play: {
  //     transform: "translateY(20%)",
  //     opacity: 1,
  //     transition: {
  //       type: "spring",
  //       duration: 0.4,
  //       ease: "easeIn",
  //     },
  //   },
  // };
  const [playAnimation, setPlayAnimation] = React.useState(false);

  React.useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  // React.useEffect(() => {
  //   console.log(isInView);
  // });
  return (
    <div
      className={`relative overflow-hidden h-screen ${
        playAnimation ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
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
        <div className="pl-0 lf:pl-[6%] flex flex-col lf:flex-row justify-center items-center h-full w-full relative">
          <div
            ref={ref}
            className={`text-center lf:text-left w-full md:w-[80%] lg:w-[70%] lf:w-1/2 px-4 lf:px-6 relative h-full flex justify-center items-center`}
          >
            <div className="h-full flex flex-col justify-center items-center lf:items-start">
              <div
                id="about-title-1"
                className="font-friz-regular text-xl lg:text-2xl"
              >
                FREE TO PLAY
              </div>
              <h1
                id="about-title"
                data-content="turn-based"
                className="font-friz-bold title-text title-shadow text-3xl lg:text-4xl "
              >
                TURN BASED RPG COMBAT
              </h1>
              <div className="py-4 w-full line">
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

              <div
                id="about-desc"
                className="font-lato font-[500] pb-3 lg:pb-6 text-base  lg:text-xl"
              >
                Anime - inspired RPG combat! Strategy and planning can easily
                turn the tide of battle. Witness awesome abilities and pristine
                gameplay.
              </div>

              <motion.div
                id="about-video"
                initial="rest"
                animate="rest"
                whileHover="play"
                className={` outer-video cursor-pointer w-[100%]  lf:w-[80%] h-auto`}
                onClick={() => {
                  setIsShown(true);
                }}
              >
                <div className="absolute top-0 left-0 z-20">
                  <Image
                    src={arrow}
                    alt=""
                    width={40}
                    height={40}
                    className="rotate-[315deg]  p-2"
                  />
                </div>
                <div className="absolute top-0 right-0 z-20">
                  <Image
                    src={arrow}
                    alt=""
                    width={40}
                    height={40}
                    className="rotate-[45deg]  p-2"
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-20">
                  <Image
                    src={arrow}
                    alt=""
                    width={40}
                    height={40}
                    className="rotate-[225deg]  p-2"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-20">
                  <Image
                    src={arrow}
                    alt=""
                    width={40}
                    height={40}
                    className="rotate-[135deg]  p-2"
                  />
                </div>
                <div className="absolute w-full h-full flex justify-center items-center  z-20">
                  <Image src={play} className="p-2" alt="" placeholder="blur" />
                </div>
                <div className="overlay" />
                <motion.div variants={imgMotion}>
                  <Image src={youtubeBg} alt="" />
                </motion.div>
              </motion.div>
            </div>

            <div className="absolute hidden lf:flex  bottom-0 z-30  lg:-bottom-[20%] -left-[10%]">
              <Image src={leaf} alt="" />
            </div>
          </div>

          <div className="hidden lf:flex items-center h-screen justify-end w-auto lf:w-1/2">
            <Image src={char} alt="" className="object-fill  w-auto h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
