/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";
const featureList = [
  {
    url: "/assets/images/feature-1.png",
    title: "PVP ARENA MODE",
    subtitle:
      "Player versus Player is a feature in many games where players can compete against each other in direct combat or competition. This mode allows players to test their skills against others in a controlled and challenging environment.",
  },
  {
    url: "/assets/images/feature-2.png",
    title: "DAILY DUNGEON",
    subtitle:
      "Accept the challenge in the Trials of the Havens to receive blessings from the gods and make your team stronger to face upcoming threats in the world of Temeris.",
  },
  {
    url: "/assets/images/feature-3.png",
    title: "PREMIUM CURRENCY",
    subtitle:
      "Gather various types of currency that will make it easier for you to embark on further adventures in the world of Temeris.",
  },
  {
    url: "/assets/images/feature-4.png",
    title: "VARIANT ELEMENTS",
    subtitle:
      "Elements are crucial, study and face your enemies with the appropriate elements to inflict greater damage upon them.",
  },
  {
    url: "/assets/images/feature-5.png",
    title: "DREAD TOWER",
    subtitle:
      "Mysterious towers rise from the depths of the sea. Many brave souls race to enter and prove their strength by challenging the monsters guarding each floor.",
  },
  {
    url: "/assets/images/feature-6.png",
    title: "GUILD",
    subtitle:
      "Join a Guild to conquer territories with your team and protect them from threats.",
  },
];
const Feature = () => {
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
        duration: 1.3,
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

  const [index, setIndex] = React.useState(0);
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
  return (
    <>
      <div
        className={` flex-col w-full h-screen pt-12 pb-12 ${
          playAnimation ? "opacity-1 flex lg:hidden" : "opacity-0 hidden"
        }`}
      >
        <div className="flex justify-center items-center flex-col pt-8 pb-8">
          <h1 className="font-friz-bold title-feature text-3xl">
            ALL FEATURES
          </h1>
          <svg
            width="28"
            height="16"
            viewBox="0 0 28 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75349 6.58999L4.94197 4.77649L2 7.72167L5.38432 11.1027L14.484 2L19.0058 6.53376"
              stroke="#B59E78"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M21.9555 9.41502L23.767 11.2285L26.709 8.29036L23.3246 4.90234L14.2319 14.012L9.70312 9.47828"
              stroke="#B59E78"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M17.3283 8.00347L14.3594 5.03125L11.3904 8.00347L14.3594 10.9757L17.3283 8.00347Z"
              stroke="#B59E78"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <Swiper
          className="!h-fit"
          id="featureSwiper"
          initialSlide={2}
          modules={[EffectCoverflow]}
          slidesPerView={"auto"}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 0,
            modifier: 1.5,
            slideShadows: true,
          }}
          centeredSlides
          slideToClickedSlide
          breakpoints={{
            640: {
              coverflowEffect: {
                stretch: 50,
                modifier: 1,
              },
            },
          }}
          onActiveIndexChange={(swiper: any) => {
            setIndex(swiper.activeIndex);
          }}
        >
          {featureList.map((item: any, idx: number) => (
            <SwiperSlide key={idx + 1} className="slideFeature !w-fit !h-fit">
              <div className=" object-cover w-fit h-auto relative">
                <div className="overlay" />
                <img src={`/assets/images/feature-${idx + 1}-mob.png`} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-6 sm:p-8">
          <h1 className="font-friz-regular font-medium title-feature text-2xl">
            {featureList[index].title}
          </h1>
          <p className="font-lato font-normal">{featureList[index].subtitle}</p>
        </div>
      </div>
      <div
        className={`w-full h-screen  bg-[#1D1C1C]  ${
          playAnimation ? "opacity-1 hidden lg:flex" : "opacity-0 hidden"
        }`}
      >
        {featureList.map((item: any, idx: number) => (
          <motion.div
            key={idx + 1}
            initial="rest"
            animate="rest"
            whileHover="play"
            className="w-1/6 border-[#E6CD99] border-[1pt] relative overflow-hidden"
          >
            <motion.div variants={overlay_trans} className="overlay" />
            <motion.img
              variants={imgMotion}
              className="img-feature"
              src={item.url}
              alt=""
            />
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
    </>
  );
};

export default Feature;
