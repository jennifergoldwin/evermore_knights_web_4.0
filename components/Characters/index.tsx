/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import Modal from "../About/modal";
import { motion } from "framer-motion";
//img
import btn1 from "../../public/assets/images/btn-1.png";
import btn2 from "../../public/assets/images/btn-2.png";
import btn3 from "../../public/assets/images/btn-3.png";
import btn4 from "../../public/assets/images/btn-4.png";
import btn5 from "../../public/assets/images/btn-5.png";
import btn6 from "../../public/assets/images/btn-6.png";
import btn7 from "../../public/assets/images/btn-7.png";
import btn8 from "../../public/assets/images/btn-8.png";
import play from "../../public/assets/images/play.png";
import arrow from "../../public/assets/images/arrow.png";
import fivestar from "../../public/assets/images/5_star.png";
import fourstar from "../../public/assets/images/4_star.png";
import wind from "../../public/assets/images/wind.png";
import staff from "../../public/assets/images/staff.png";
import dagger from "../../public/assets/images/dagger.png";
import fire from "../../public/assets/images/fire.png";
import lighting from "../../public/assets/images/lightning.png";
import bow from "../../public/assets/images/bow.png";
import natural from "../../public/assets/images/neutral.png";
import grana from "../../public/assets/images/grana.png";
import laslow from "../../public/assets/images/laslow.png";
import quinn from "../../public/assets/images/quinn.png";
import curtis from "../../public/assets/images/curtis.png";
import gashani from "../../public/assets/images/gashani.png";
import trista from "../../public/assets/images/trista.png";
import astra from "../../public/assets/images/astra.png";
import helen from "../../public/assets/images/helen.png";
import granaMob from "../../public/assets/images/grana-mob.png";
import laslowMob from "../../public/assets/images/laslow-mob.png";
import quinnMob from "../../public/assets/images/quinn-mob.png";
import curtisMob from "../../public/assets/images/curtis-mob.png";
import gashaniMob from "../../public/assets/images/gashani-mob.png";
import tristaMob from "../../public/assets/images/trista-mob.png";
import { ThreeDots } from "react-loader-spinner";
import { ModalContext } from "../../context/ModalContext";
import { addSrcVideo } from "../../context/reducer";
const characterLists = [
  {
    bg: "bg-[url(/assets/images/bg-grana.png)]",
    heroName: "GRANA",
    heroSubName: "Follower of Reya",
    heroDesc:
      "Grana is a scholar of Evermore Mages’ Association specializing in the research for the Dread. A dangerous topic most of her peers avoid. Yet she presses on, determined on her path to save her beloved kingdom from the crisis. No longer the shy noble girl that only roams the libraries of the Academy, she will prove that she’s strong and capable of making a name for herself.",
    heroImg: grana,
    heroImgMob: granaMob,
    icon1: wind,
    title1: "Wind",
    icon2: staff,
    title2: "Staff",
    link: "/assets/video/grana.mp4",
    star: fivestar,
    youtube: "/assets/images/grana-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-laslow.png)]",
    heroName: "LASLOW",
    heroSubName: "Valiant Flames",
    heroDesc:
      "A stable boy from Osten. Despite his young age, he was personally recruited by the Guildmaster for his excellent information-gathering skills. His short stature and docile appearance made him able to blend nicely in crowds and exposed him to information. He spends more time with horses. Hence he came off as shy and nervous. Despite that, the Guildmaster believes he will be a great knight someday.",
    heroImg: laslow,
    heroImgMob: laslowMob,
    icon1: fire,
    title1: "Fire",
    icon2: dagger,
    title2: "Staff",
    link: "/assets/video/laslow.mp4",
    star: fourstar,
    youtube: "/assets/images/laslow-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-quinn.png)]",
    heroName: "QUINN",
    heroSubName: "Thundering Emergence",
    heroDesc:
      "A beautiful lady hailing from the fallen village of Lusataine, with her sharp wits and piercing beauty, she is known by many as the Dawn Huntress. Her skills for the bow are just as impressive as her approach to magic. Always on her side and aiding her battles is Finnel, her conjured lightning familiar. She is set on a dangerous goal to eradicate the Dread and avenge her lost home and family.",
    heroImg: quinn,
    heroImgMob: quinnMob,
    icon1: lighting,
    title1: "Thunder",
    icon2: bow,
    title2: "Bow",
    link: "/assets/video/quinn.mp4",
    star: fourstar,
    youtube: "/assets/images/quinn-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-curtis.png)]",
    heroName: "CURTIS",
    heroSubName: "Lominous Sermon",
    heroDesc:
      "The best trainee priest of the Holy Church of Reya. Many revered him for his capabilities in healing magic, which is almost second to the High Priestess herself. A genuinely devout man with righteous values. He, with the High Priestess and the Holy Order, sought to restore hope in this time of Dread crisis.",
    heroImg: curtis,
    heroImgMob: curtisMob,
    icon1: natural,
    title1: "Natural",
    icon2: staff,
    title2: "Staff",
    link: "/assets/video/curtis.mp4",
    star: fourstar,
    youtube: "/assets/images/curtis-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-gashani.png)]",
    heroName: "GASHANI",
    heroSubName: "Follower of Reya",
    heroDesc:
      "Foreign student from the Rings of Fire archipelago. On her journey of revenge when she finally received the power of Banaspati. A thrill seeker and a pretty troublesome mage. To prove her strength, she likes to challenge powerful people. Which Grana often warn her to be careful.",
    heroImg: gashani,
    heroImgMob: gashaniMob,
    icon1: fire,
    title1: "Fire",
    icon2: staff,
    title2: "Staff",
    link: "",
    star: fivestar,
    youtube: "/assets/images/curtis-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-trista.png)]",
    heroName: "TRISTA",
    heroSubName: "The Unrelenting Lioness",
    heroDesc:
      "Captain of Evermore Knight’s investigative squad. The Commissioner’s second in command and Grana’s childhood friend. As an investigative knight, she upholds herself with a keen sense and a sharp mind to recognize the truth from the fake. In that regard, she can be strict and a little stubborn, but her compassion enables her to get along with everyone.",
    heroImg: trista,
    heroImgMob: tristaMob,
    icon1: "/assets/images/fire.png",
    title1: "Fire",
    icon2: "/assets/images/sword.png",
    title2: "Sword",
    link: "",
    star: fivestar,
    youtube: "/assets/images/curtis-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-about.png)]",
    heroName: "ASTRA",
    heroSubName: "Vallant Galor",
    heroDesc:
      "Captain of Evermore Knight’s investigative squad. The Commissioner’s second in command and Grana’s childhood friend. As an investigative knight, she upholds herself with a keen sense and a sharp mind to recognize the truth from the fake. In that regard, she can be strict and a little stubborn, but her compassion enables her to get along with everyone.",
    heroImg: astra,
    heroImgMob: tristaMob,
    icon1: natural,
    title1: "Neutral",
    icon2: "/assets/images/sword.png",
    title2: "Sword",
    link: "",
    star: fivestar,
    youtube: "/assets/images/curtis-youtube.png",
  },
  {
    bg: "bg-[url(/assets/images/bg-hellen.png)]",
    heroName: "HELLEN",
    heroSubName: "The Unrelenting Lioness",
    heroDesc:
      "A beautiful lady hailing from the fallen village of Lusataine, with her sharp wits and piercing beauty, she is known by many as the Dawn Huntress. Her skills for the bow are just as impressive as her approach to magic. Always on her side and aiding her battles is Finnel, her conjured lightning familiar. She is set on a dangerous goal to eradicate the Dread and avenge her lost home and family.",
    heroImg: helen,
    heroImgMob: tristaMob,
    icon1: "/assets/images/nature.png",
    title1: "Nature",
    icon2: "/assets/images/shield.png",
    title2: "Shield",
    link: "",
    star: fivestar,
    youtube: "/assets/images/curtis-youtube.png",
  },
];
interface ICharPage {
  setIsShown: any;
}
const Characters: React.FC<ICharPage> = ({ setIsShown }) => {
  const [statusClick, setStatusClick] = React.useState(false);
  const [indexChar, setIndexChar] = React.useState(0);
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
  const { dispatch } = React.useContext(ModalContext);
  return (
    <div
      className={`relative overflow-hidden h-screen flex-col ${
        characterLists[indexChar].bg
      } bg-center bg-cover ${
        playAnimation ? "opacity-1 flex visible" : "opacity-0 hidden invisible"
      }`}
    >
      {/* <Modal
        fullpageApi={fullpageApi}
        id="character"
        isShown={isShown}
        setIsShown={setIsShown}
        src={characterLists[indexChar].link}
      /> */}

      <div className="scale-[0.85] hidden lg:flex gap-0 lg:gap-0 justify-center h-full  flex-col  absolute m-auto right-0 z-10">
        <div className="cursor-pointer" onClick={() => handleClick(0)}>
          <Image
            className={`${
              indexChar == 0
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            } `}
            src={indexChar == 0 ? btn1 : btn1}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(1)}>
          <Image
            className={`${
              indexChar == 1
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            } `}
            src={indexChar == 1 ? btn2 : btn2}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(2)}>
          <Image
            className={`${
              indexChar == 2
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            }  `}
            src={indexChar == 2 ? btn3 : btn3}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(3)}>
          <Image
            className={`${
              indexChar == 3
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            } `}
            src={indexChar == 3 ? btn4 : btn4}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(4)}>
          <Image
            className={`${
              indexChar == 4
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            } `}
            src={indexChar == 4 ? btn5 : btn5}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(5)}>
          <Image
            className={`${
              indexChar == 5
                ? "lg:translate-x-[50%] transition-all"
                : " lg:translate-x-[55%]"
            }`}
            src={indexChar == 5 ? btn6 : btn6}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(6)}>
          <Image
            className={`${
              indexChar == 6
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            }`}
            src={indexChar == 6 ? btn7 : btn7}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(7)}>
          <Image
            className={`${
              indexChar == 7
                ? "lg:translate-x-[50%] transition-all"
                : "lg:translate-x-[55%]"
            }`}
            src={indexChar == 7 ? btn8 : btn8}
            alt=""
          />
        </div>
      </div>

      <div className="h-full">
        {characterLists.map((item: any, idx: number) => (
          <div
            key={idx}
            className={` slide-char h-full ${
              indexChar === idx ? "active" : ""
            }  w-full`}
          >
            <div className="h-full ml-0 lg:ml-[8%] lg:pl-0 lgf:ml-0 lgf:pl-[8%] pt-6 relative w-full">
              <div className="bg-gradient-black w-full  lg:w-2/5 absolute z-[2] bottom-[0%] lg:h-full justify-center flex ">
                <div className="p-2 lg:p-0 flex justify-center items-center lg:flex-col">
                  <div className="lg:p-3 lg:pr-0">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col w-5/6  sm:w-1/2 lg:w-full">
                        <div className="flex items-center font-friz-bold gap-3">
                          <h1
                            className="text-xl sm:text-2xl lg:text-4xl"
                            id="hero-name"
                          >
                            {item.heroName}
                          </h1>
                          <span
                            id="hero-subname"
                            className="title-text font-bold text-base sm:text-base lg:text-lg"
                          >
                            {item.heroSubName}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-3"
                          id="hero-detail"
                        >
                          <Image src={item.star} alt="" />
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
                        onClick={() => {
                          setIsShown(true);
                          dispatch(addSrcVideo(characterLists[indexChar].link));
                        }}
                        className={`${
                          item.link === "" ? "hidden" : "flex"
                        } cursor-pointer w-1/6 sm:w-1/2 lg:w-auto justify-start pr-0 sm:justify-end sm:pr-2 items-center lg:hidden`}
                      >
                        <img
                          src={`${item.youtube.split(".png")[0]}-mob.png`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="py-4 w-full line">
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
                    <div className=" flex lg:flex-col flex-row justify-center items-center">
                      <div
                        id="hero-desc"
                        className={`min-h-[100px] hero-desc-container w-full font-lato mb-0 sm:mb-2 lg:mb-4 text-xs sm:text-xs md:text-base lg:text-sm flex  justify-center`}
                      >
                        {item.heroDesc}
                      </div>

                      <motion.div
                        initial="rest"
                        animate="rest"
                        whileHover="play"
                        className={`hidden lg:block ${
                          item.link === ""
                            ? "opacity-0 invisible"
                            : " visible youtube-hero"
                        } outer-video cursor-pointer w-[100%] h-auto`}
                        onClick={() => {
                          setIsShown(true);
                          dispatch(addSrcVideo(characterLists[indexChar].link));
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
                          <Image
                            src={play}
                            className="p-2"
                            alt=""
                            placeholder="blur"
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
              </div>
              <div
                className={`w-full z-0 overflow-hidden  h-full ${
                  idx === 6 ? "sm:right-[-0%]" : "lg:right-[-8.5%] lgd:right-0"
                }  absolute flex justify-end
                } top-0`}
              >
                <Image
                  className={` 
                    }  h-full absolute object-contain sm:object-cover img-char ${
                      idx === 6 ? "right-[10%] sm:right-0" : ""
                    }`}
                  src={item.heroImg}
                  priority
                  loading="eager"
                  alt=""
                />
                {/* <img src="/assets/images/grana-mob.png" /> */}
                {/* <Image
                  className="block md:hidden h-full w-auto object-cover"
                  src={item.heroImgMob}
                  priority
                  loading="eager"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="block py-4 relative lg:hidden bg-[#010a1a] ">
        <Swiper
          id="btn-char-mob"
          slideToClickedSlide
          centeredSlides
          slidesPerView={"auto"}
          spaceBetween={10}
          onActiveIndexChange={(swiperr: any) => {
            handleClick(swiperr.activeIndex);
          }}
        >
          {[...Array(8)].map((item: any, idx: number) => (
            <SwiperSlide
              className="!w-fit flex justify-center items-center"
              key={idx}
            >
              <div className="relative flex flex-col justify-center items-center">
                <Image
                  // className="w-full h-full"
                  width={80}
                  height={80}
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
        <div className="absolute w-full h-[2px] bg-line bottom-[24.5%]"></div>
      </div>
    </div>
  );
};

export default Characters;
