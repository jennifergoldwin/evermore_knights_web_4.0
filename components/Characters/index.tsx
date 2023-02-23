/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { A11y, EffectFade, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import Modal from "../About/modal";
import { motion } from "framer-motion";
const characterLists = [
  {
    bg: "bg-[url(/assets/images/bg-grana.png)]",
    heroName: "GRANA",
    heroSubName: "Follower of Reya",
    heroDesc:
      "Grana is a scholar of Evermore Mages’ Association specializing in the research for the Dread. A dangerous topic most of her peers avoid. Yet she presses on, determined on her path to save her beloved kingdom from the crisis. No longer the shy noble girl that only roams the libraries of the Academy, she will prove that she’s strong and capable of making a name for herself.",
    heroImg: "/assets/images/grana.png",
    icon1: "/assets/images/wind.png",
    title1: "Wind",
    icon2: "/assets/images/staff.png",
    title2: "Staff",
    link: "/assets/video/grana.mp4",
    star: "/assets/images/5_star.png",
    youtube: "/assets/images/grana-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-laslow.png)]",
    heroName: "LASLOW",
    heroSubName: "Valiant Flames",
    heroDesc:
      "A stable boy from Osten. Despite his young age, he was personally recruited by the Guildmaster for his excellent information-gathering skills. His short stature and docile appearance made him able to blend nicely in crowds and exposed him to information. He spends more time with horses. Hence he came off as shy and nervous. Despite that, the Guildmaster believes he will be a great knight someday.",
    heroImg: "/assets/images/laslow.png",
    icon1: "/assets/images/fire.png",
    title1: "Fire",
    icon2: "/assets/images/dagger.png",
    title2: "Staff",
    link: "/assets/video/laslow.mp4",
    star: "/assets/images/4_star.png",
    youtube: "/assets/images/laslow-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-quinn.png)]",
    heroName: "QUINN",
    heroSubName: "Thundering Emergence",
    heroDesc:
      "A beautiful lady hailing from the fallen village of Lusataine, with her sharp wits and piercing beauty, she is known by many as the Dawn Huntress. Her skills for the bow are just as impressive as her approach to magic. Always on her side and aiding her battles is Finnel, her conjured lightning familiar. She is set on a dangerous goal to eradicate the Dread and avenge her lost home and family.",
    heroImg: "/assets/images/quinn.png",
    icon1: "/assets/images/lightning.png",
    title1: "Thunder",
    icon2: "/assets/images/bow.png",
    title2: "Bow",
    link: "/assets/video/quinn.mp4",
    star: "/assets/images/4_star.png",
    youtube: "/assets/images/quinn-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-curtis.png)]",
    heroName: "CURTIS",
    heroSubName: "Lominous Sermon",
    heroDesc:
      "The best trainee priest of the Holy Church of Reya. Many revered him for his capabilities in healing magic, which is almost second to the High Priestess herself. A genuinely devout man with righteous values. He, with the High Priestess and the Holy Order, sought to restore hope in this time of Dread crisis.",
    heroImg: "/assets/images/curtis.png",
    icon1: "/assets/images/neutral.png",
    title1: "Natural",
    icon2: "/assets/images/staff.png",
    title2: "Staff",
    link: "/assets/video/curtis.mp4",
    star: "/assets/images/4_star.png",
    youtube: "/assets/images/curtis-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-gashani.png)]",
    heroName: "GASHANI",
    heroSubName: "Follower of Reya",
    heroDesc:
      "Foreign student from the Rings of Fire archipelago. On her journey of revenge when she finally received the power of Banaspati. A thrill seeker and a pretty troublesome mage. To prove her strength, she likes to challenge powerful people. Which Grana often warn her to be careful.",
    heroImg: "/assets/images/gashani.png",
    icon1: "/assets/images/fire.png",
    title1: "Fire",
    icon2: "/assets/images/staff.png",
    title2: "Staff",
    link: "",
    star: "/assets/images/5_star.png",
    youtube: "/assets/images/youtube-frame.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-trista.png)]",
    heroName: "TRISTA",
    heroSubName: "The Unrelenting Lioness",
    heroDesc:
      "Captain of Evermore Knight’s investigative squad. The Commissioner’s second in command and Grana’s childhood friend. As an investigative knight, she upholds herself with a keen sense and a sharp mind to recognize the truth from the fake. In that regard, she can be strict and a little stubborn, but her compassion enables her to get along with everyone.",
    heroImg: "/assets/images/trista.png",
    icon1: "/assets/images/fire.png",
    title1: "Fire",
    icon2: "/assets/images/sword.png",
    title2: "Sword",
    link: "",
    star: "/assets/images/5_star.png",
    youtube: "/assets/images/youtube-frame.png",
  },
];
const Characters: React.FC = () => {
  // const swiper = useSwiper();
  const [swiper, setSwiper] = React.useState(useSwiper());
  const [statusClick, setStatusClick] = React.useState(false);
  const [indexChar, setIndexChar] = React.useState(0);
  const [isShown, setIsShown] = React.useState(false);
  const handleClick = (x: number) => {
    setIndexChar(x);

    setTimeout(() => {
      setStatusClick(true);
    }, 1000);
    // swiper.slideTo(x);
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

  return (
    <div
      className={`relative overflow-hidden h-screen ${characterLists[indexChar].bg} bg-center bg-cover`}
    >
      <Modal
        id="character"
        isShown={isShown}
        setIsShown={setIsShown}
        src={characterLists[indexChar].link}
      />

      <div className="hidden md:flex gap-0 lg:gap-2 justify-center h-full  flex-col  absolute m-auto right-0 z-10">
        <div className="cursor-pointer" onClick={() => handleClick(0)}>
          <img
            className={`${
              indexChar == 0
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%] `}
            src={`${
              indexChar == 0
                ? "/assets/images/btn-1.png"
                : "/assets/images/btn-1.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(1)}>
          <img
            className={`${
              indexChar == 1
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              indexChar == 1
                ? "/assets/images/btn-2.png"
                : "/assets/images/btn-2.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(2)}>
          <img
            className={`${
              indexChar == 2
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              indexChar == 2
                ? "/assets/images/btn-3.png"
                : "/assets/images/btn-3.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(3)}>
          <img
            className={`${
              indexChar == 3
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              indexChar == 3
                ? "/assets/images/btn-4.png"
                : "/assets/images/btn-4.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(4)}>
          <img
            className={`${
              indexChar == 4
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              indexChar == 4
                ? "/assets/images/btn-5.png"
                : "/assets/images/btn-5.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(5)}>
          <img
            className={`${
              indexChar == 5
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              indexChar == 5
                ? "/assets/images/btn-6.png"
                : "/assets/images/btn-6.png"
            }`}
            alt=""
          />
        </div>
      </div>
      {/* <div
        className={`${characterLists[indexChar].bg} h-full bg-cover bg-center `}
      >
        <div className="ml-0 md:ml-4 lg:ml-[8%] lg:pl-0 lgf:ml-0 lgf:pl-[8%] pt-6 relative w-full h-full flex flex-col-reverse md:flex-row justify-end md:justify-center items-center">
          <div className="bg-gradient-black w-full md:w-2/5 absolute z-[2] bottom-[0%] flex flex-col md:static">
            <div className="p-2 md:p-0 flex justify-center items-center md:flex-col">
              <div className="md:p-3 lg:pr-0">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col w-5/6  sm:w-1/2 md:w-full">
                    <div className="flex items-center font-friz-bold gap-3">
                      <h1 className="text-xl sm:text-2xl lg:text-4xl">
                        {characterLists[indexChar].heroName}
                      </h1>
                      <span className="title-text font-bold text-base sm:text-base lg:text-lg">
                        {characterLists[indexChar].heroSubName}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={characterLists[indexChar].star} alt="" />
                      <div className="flex gap-4 font-barlow font-[600]">
                        <div className="flex items-center gap-2 ">
                          <Image
                            width={20}
                            height={20}
                            src={characterLists[indexChar].icon1}
                            alt=""
                          />
                          <span className="text-xs sm:text-base">
                            {characterLists[indexChar].title1}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 ">
                          <Image
                            width={20}
                            height={20}
                            src={characterLists[indexChar].icon2}
                            alt=""
                          />
                          <span className="text-xs sm:text-base">
                            {characterLists[indexChar].title2}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setIsShown(true)}
                    className={`${
                      characterLists[indexChar].link === "" ? "hidden" : "flex"
                    } cursor-pointer w-1/6 sm:w-1/2 md:w-auto justify-start pr-0 sm:justify-end sm:pr-2 items-center md:hidden`}
                  >
                    <img
                      src={`${
                        characterLists[indexChar].youtube.split(".png")[0]
                      }-mob.png`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="py-4 w-full ">
                  <svg
                    width="276"
                    height="3"
                    viewBox="0 0 276 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1.5L34.5119 0.78L68.9921 0.48L137.984 0L207.008 0.48L241.488 0.78L276 1.5L241.488 2.22L207.008 2.52L137.984 3L68.9921 2.52L34.5119 2.22L0 1.5Z"
                      fill="#F1D795"
                    />
                  </svg>
                </div>
                <div className="flex md:flex-col flex-row justify-center h-full items-center">
                  <div
                    className={` w-full font-lato mb-0 sm:mb-2 lg:mb-4 text-xs sm:text-base  lg:text-sm flex  justify-center`}
                  >
                    {characterLists[indexChar].heroDesc}
                  </div>

                  <motion.div
                    initial="rest"
                    animate="rest"
                    whileHover="play"
                    className={`hidden md:block ${
                      characterLists[indexChar].link === ""
                        ? "opacity-0 invisible"
                        : "opacity-1 visible"
                    } outer-video cursor-pointer w-[100%] h-auto`}
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
                      <img
                        src="/assets/images/play.png"
                        alt=""
                        className=" p-2"
                      />
                    </div>
                    <div className="overlay" />
                    <motion.img
                      variants={imgMotion}
                      className={``}
                      src={characterLists[indexChar].youtube}
                      alt=""
                    />
                  </motion.div>
                  
                </div>
              </div>
            </div>
            <div className="block relative md:hidden bg-[#010a1a] py-4">
              <Swiper
                slideToClickedSlide
                centeredSlides
                slidesPerView={"auto"}
                spaceBetween={10}
                onActiveIndexChange={(swiperr: any) => {
                  handleClick(swiperr.activeIndex);
                }}
              >
                {[...Array(6)].map((item: any, idx: number) => (
                  <SwiperSlide className="!w-fit" key={idx}>
                    <div className="relative flex flex-col justify-center items-center">
                      <img
                        src={`/assets/images/btn-${idx + 1}-mob.png`}
                        alt=""
                      />
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.15242"
                          y="16.2344"
                          width="21.2932"
                          height="21.2932"
                          transform="rotate(-45 1.15242 16.2344)"
                          stroke={idx != indexChar ? "transparent" : "white"}
                        />
                        <rect
                          x="7.17188"
                          y="15.957"
                          width="12.7942"
                          height="12.7942"
                          transform="rotate(-45 7.17188 15.957)"
                          fill={idx != indexChar ? "#161F2C" : "white"}
                        />
                      </svg>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute w-full h-[2px] bg-line bottom-[22.5%]"></div>
            </div>
          </div>
          <div className="w-full overflow-hidden  md:w-3/5  relative">
            <img
              className={`hidden translate-x-[-20%] lf:translate-x-[-8%]
                    } md:block h-screen fixed object-cover top-0 `}
              src={characterLists[indexChar].heroImg}
              loading="lazy"
              alt=""
            />
            <img
              className="block md:hidden"
              src={`${
                characterLists[indexChar].heroImg.split(".png")[0]
              }-mob.png`}
              alt=""
            />
          </div>
        </div>
      </div> */}
      {characterLists.map((item: any, idx: number) => (
        <div
          key={idx}
          className={` slide-char ${indexChar === idx ? "active" : ""} h-full `}
        >
          <div className="ml-0 md:ml-4 lg:ml-[8%] lg:pl-0 lgf:ml-0 lgf:pl-[8%] pt-6 relative w-full h-full flex flex-col-reverse md:flex-row justify-end md:justify-center items-center">
            <div className="bg-gradient-black w-full md:w-2/5 absolute z-[2] bottom-[0%] flex flex-col md:static">
              <div className="p-2 md:p-0 flex justify-center items-center md:flex-col">
                <div className="md:p-3 lg:pr-0">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col w-5/6  sm:w-1/2 md:w-full">
                      <div className="flex items-center font-friz-bold gap-3">
                        <h1 className="text-xl sm:text-2xl lg:text-4xl anim-slide-up">
                          {item.heroName}
                        </h1>
                        <span className="anim-slide-up title-text font-bold text-base sm:text-base lg:text-lg">
                          {item.heroSubName}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 anim-slide-up">
                        <img src={item.star} alt="" />
                        <div className="flex gap-4 font-barlow font-[600]">
                          <div className=" flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={item.icon1}
                              alt=""
                            />
                            <span className="text-xs sm:text-base">
                              {item.title1}
                            </span>
                          </div>
                          <div className=" flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={item.icon2}
                              alt=""
                            />
                            <span className="text-xs sm:text-base">
                              {item.title2}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => setIsShown(true)}
                      className={`${
                        item.link === "" ? "hidden" : "flex"
                      } cursor-pointer w-1/6 sm:w-1/2 md:w-auto justify-start pr-0 sm:justify-end sm:pr-2 items-center md:hidden`}
                    >
                      <img
                        src={`${item.youtube.split(".png")[0]}-mob.png`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="py-4 w-full ">
                    <svg
                      width="276"
                      height="3"
                      viewBox="0 0 276 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 1.5L34.5119 0.78L68.9921 0.48L137.984 0L207.008 0.48L241.488 0.78L276 1.5L241.488 2.22L207.008 2.52L137.984 3L68.9921 2.52L34.5119 2.22L0 1.5Z"
                        fill="#F1D795"
                      />
                    </svg>
                  </div>
                  <div className=" flex md:flex-col flex-row justify-center h-full items-center">
                    <div
                      className={`anim-slide-up w-full font-lato mb-0 sm:mb-2 lg:mb-4 text-xs sm:text-base  lg:text-sm flex  justify-center`}
                    >
                      {item.heroDesc}
                    </div>

                    <motion.div
                      initial="rest"
                      animate="rest"
                      whileHover="play"
                      className={`hidden md:block ${
                        item.link === ""
                          ? "opacity-0 invisible"
                          : " visible anim-opacity "
                      } outer-video cursor-pointer w-[100%] h-auto`}
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
                        <img
                          src="/assets/images/play.png"
                          alt=""
                          className=" p-2"
                        />
                      </div>
                      <div className="overlay" />
                      <motion.img
                        variants={imgMotion}
                        className={``}
                        src={item.youtube}
                        alt=""
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="block relative md:hidden bg-[#010a1a] py-4">
                <Swiper
                  slideToClickedSlide
                  centeredSlides
                  slidesPerView={"auto"}
                  spaceBetween={10}
                  onActiveIndexChange={(swiperr: any) => {
                    handleClick(swiperr.activeIndex);
                  }}
                >
                  {[...Array(6)].map((item: any, idx: number) => (
                    <SwiperSlide className="!w-fit" key={idx}>
                      <div className="relative flex flex-col justify-center items-center">
                        <img
                          src={`/assets/images/btn-${idx + 1}-mob.png`}
                          alt=""
                        />
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="1.15242"
                            y="16.2344"
                            width="21.2932"
                            height="21.2932"
                            transform="rotate(-45 1.15242 16.2344)"
                            stroke={idx != indexChar ? "transparent" : "white"}
                          />
                          <rect
                            x="7.17188"
                            y="15.957"
                            width="12.7942"
                            height="12.7942"
                            transform="rotate(-45 7.17188 15.957)"
                            fill={idx != indexChar ? "#161F2C" : "white"}
                          />
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute w-full h-[2px] bg-line bottom-[22.5%]"></div>
              </div>
            </div>
            <div className="w-full overflow-hidden  md:w-3/5 h-screen relative">
              <img
                className={`hidden anim-slide-left
                    } md:block h-full absolute object-cover  img-char`}
                src={item.heroImg}
                loading="lazy"
                alt=""
              />
              <img
                className="block md:hidden anim-slide-left"
                src={`${item.heroImg.split(".png")[0]}-mob.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
      {/* <Swiper
        className="!h-screen "
        modules={[EffectFade]}
        effect={"fade"}
        allowTouchMove={false}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {characterLists.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <div className={`${item.bg} h-full bg-cover bg-center `}>
              <div className="ml-0 lg:ml-[8%] lg:pl-0 lgf:ml-0 lgf:pl-[8%] pt-6 relative w-full h-full flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center">
                <div className="bg-gradient-black w-full lg:w-2/5 absolute z-[2] bottom-[0%] lg:static">
                  <div className="p-2 lg:p-0 flex justify-center items-center lg:flex-col">
                    <div className="md:p-3 lg:pr-0">
                      <div className="flex items-center font-friz-bold gap-4">
                        <h1 className="text-xl sm:text-2xl lg:text-4xl">
                          {item.heroName}
                        </h1>
                        <span className="title-text font-bold text-sm sm:text-base lg:text-lg">
                          {item.heroSubName}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <img src={item.star} alt="" />
                        <div className="flex gap-4 font-barlow font-[600]">
                          <div className="flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={item.icon1}
                              alt=""
                            />
                            <span className="text-sm sm:text-base">
                              {item.title1}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={item.icon2}
                              alt=""
                            />
                            <span className="text-sm sm:text-base">
                              {item.title2}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="py-4 w-full ">
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
                      <div className="flex lg:flex-col flex-row justify-center h-full items-center">
                        <div
                          className={`${
                            item.link === "" ? "w-full" : "w-3/5"
                          } lg:w-full font-lato mb-0 sm:mb-2 lg:mb-4 text-xs sm:text-base  lg:text-sm flex  justify-center`}
                        >
                          {item.heroDesc}
                        </div>
                      
                        <img
                          onClick={() => {
                            console.log(indexChar);
                            setIsShown(true);
                          }}
                          className={`w-[35%] h-auto lg:w-[100%] hidden lg:block ${
                            item.link === ""
                              ? "opacity-0 invisible"
                              : "opacity-1 visible"
                          }`}
                          src="/assets/images/youtube-frame.png"
                          alt=""
                        />
                        <img
                          onClick={() => setIsShown(true)}
                          className={`w-[40%]  lg:hidden ${
                            item.link === "" ? "hidden" : "block"
                          }`}
                          src="/assets/images/youtube-frame-mob.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-hidden  lg:w-3/5  relative">
                  <img
                    className={`hidden translate-x-[-20%] lf:translate-x-[-8%]
                    } lg:block h-screen fixed object-cover top-0 `}
                    src={item.heroImg}
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="block lg:hidden"
                    src={`${item.heroImg.split(".png")[0]}-mob.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Characters;
