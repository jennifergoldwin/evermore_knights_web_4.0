/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useScroll } from "framer-motion";

const Feature = () => {
  const ref = React.useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const feature = {
    rest: {
      display: "none",
      opacity: 0,
    },
    play: {
      display: "block",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeIn",
      },
    },
  };
  const rotate_arrow = {
    rest: {
      transform: "rotate(0deg)",
    },
    play: {
      transform: "rotate(180deg)",
      transition: {
        type: "spring",
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const overlay_trans = {
    rest: {
      opacity: 0,
    },
    play: {
      opacity: 0.39,
      transition: {
        type: "spring",
        duration: 1.4,
        ease: "easeIn",
      },
    },
  };

  const featureList = [
    {
      url: "/assets/images/feature-1.png",
      title: "PVP ARENA MODE",
      subtitle:
        "Team up and fight alongside other Commissioners in the world! Earn various guild rewards that will help you on your adventures!",
    },
    {
      url: "/assets/images/feature-2.png",
      title: "DAILY DUNGEON",
      subtitle:
        "Team up and fight alongside other Commissioners in the world! Earn various guild rewards that will help you on your adventures!",
    },
    {
      url: "/assets/images/feature-3.png",
      title: "NFT CURRENCY",
      subtitle:
        "Team up and fight alongside other Commissioners in the world! Earn various guild rewards that will help you on your adventures!",
    },
    {
      url: "/assets/images/feature-4.png",
      title: "VARIANT ELEMENTS",
      subtitle:
        "Team up and fight alongside other Commissioners in the world! Earn various guild rewards that will help you on your adventures!",
    },
    {
      url: "/assets/images/feature-5.png",
      title: "DREAD TOWER",
      subtitle:
        "Start your descension towards the deepest abyss. Unravel the secrets between its dark floors and battle dangerous foes!",
    },
    {
      url: "/assets/images/feature-6.png",
      title: "GUILD",
      subtitle:
        "Team up and fight alongside other Commissioners in the world! Earn various guild rewards that will help you on your adventures!",
    },
  ];
  return (
    <div className="w-full flex h-full bg-[#1D1C1C] ">
      {featureList.map((item: any, idx: number) => (
        <motion.div
          key={idx + 1}
          initial="rest"
          animate="rest"
          whileHover="play"
          whileTap="play"
          className="w-1/6 border-[#E6CD99] border-[1pt] relative "
        >
          <motion.div variants={overlay_trans} className="overlay" />
          <img className="img-feature" src={item.url} alt="" />
          <div className="absolute bottom-[12%] z-20 w-full flex justify-center flex-col items-center">
            <motion.img
              variants={rotate_arrow}
              src="/assets/images/arrow.png"
              alt=""
            />
            <span className="font-friz-regular text-base sm:text-lg md:text-xl lg:text-2xl text-center pt-4 px-2 title-feature">
              {item.title}
            </span>
            <motion.span variants={feature} className="text-center pt-4 px-2">
              {item.subtitle}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Feature;
