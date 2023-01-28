/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { A11y, EffectFade, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
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
  },
];
const Characters: React.FC = () => {
  // const swiper = useSwiper();
  const [swiper, setSwiper] = React.useState(useSwiper());
  const [index, setIndex] = React.useState(0);

  const handleClick = (x: number) => {
    setIndex(x);
    swiper.slideTo(x);
  };

  // React.useEffect(() => {
  //   const slider = document.querySelector(
  //     ".horizontal-slider"
  //   ) as HTMLElement | null;
  //   let isDown = false;
  //   let startX: any;
  //   let scrollLeft: any;

  //   if (slider != null) {
  //     slider.addEventListener("mousedown", (e: any) => {
  //       isDown = true;
  //       slider.classList.add("active");
  //       startX = e.pageX - slider.offsetLeft;
  //       scrollLeft = slider.scrollLeft;
  //     });
  //     slider.addEventListener("mouseleave", () => {
  //       isDown = false;
  //       slider.classList.remove("active");
  //     });
  //     slider.addEventListener("mouseup", () => {
  //       isDown = false;
  //       slider.classList.remove("active");
  //     });
  //     slider.addEventListener("mousemove", (e: any) => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       const x = e.pageX - slider.offsetLeft;
  //       const walk = (x - startX) * 3; //scroll-fast
  //       slider.scrollLeft = scrollLeft - walk;
  //       console.log(walk);
  //     });
  //   }
  // });
  return (
    <div className="relative overflow-hidden min-h-screen ">
      <div className="hidden lg:flex gap-0 lg:gap-2 justify-center h-full  flex-col  absolute m-auto right-0 z-10">
        <div className="cursor-pointer" onClick={() => handleClick(0)}>
          <img
            className={`${
              index == 0
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%] `}
            src={`${
              index == 0
                ? "/assets/images/btn-1.png"
                : "/assets/images/btn-1.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(1)}>
          <img
            className={`${
              index == 1
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              index == 1
                ? "/assets/images/btn-2.png"
                : "/assets/images/btn-2.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(2)}>
          <img
            className={`${
              index == 2
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              index == 2
                ? "/assets/images/btn-3.png"
                : "/assets/images/btn-3.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(3)}>
          <img
            className={`${
              index == 3
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              index == 3
                ? "/assets/images/btn-4.png"
                : "/assets/images/btn-4.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(4)}>
          <img
            className={`${
              index == 4
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              index == 4
                ? "/assets/images/btn-5.png"
                : "/assets/images/btn-5.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(5)}>
          <img
            className={`${
              index == 5
                ? "translate-x-[70%] lg:translate-x-[50%] transition-all"
                : "translate-x-[80%] lg:translate-x-[60%]"
            } w-[80%] lg:w-[100%]`}
            src={`${
              index == 5
                ? "/assets/images/btn-6.png"
                : "/assets/images/btn-6.png"
            }`}
            alt=""
          />
        </div>
      </div>
      <Swiper
        className="!h-screen "
        modules={[EffectFade]}
        effect={"fade"}
        allowTouchMove={false}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {characterLists.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <div className={`${item.bg} h-full bg-cover bg-center `}>
              <div className="ml-0 lg:ml-[10%] pt-6 relative w-full h-full flex flex-col-reverse lg:flex-row justify-end lg:justify-center items-center">
                <div className="bg-gradient-black w-full lg:w-2/5 absolute z-[2] bottom-[0%] lg:static">
                  <div className="p-2 lg:p-0 flex justify-center items-center lg:flex-col">
                    <div className="md:p-3 lg:pr-0">
                      <div className="flex items-center font-friz-bold gap-4">
                        <h1 className="text-xl md:text-2xl lg:text-4xl">
                          {item.heroName}
                        </h1>
                        <span className="title-text font-bold text-sm md:text-base lg:text-lg">
                          {item.heroSubName}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <img src="/assets/images/5_star.png" alt="" />
                        <div className="flex gap-4 font-barlow font-[600]">
                          <div className="flex items-center gap-2 ">
                            <Image
                              width={20}
                              height={20}
                              src={item.icon1}
                              alt=""
                            />
                            <span className="text-sm lg:text-base">
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
                            <span className="text-sm lg:text-base">
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
                      <div className="flex lg:flex-col flex-row justify-center items-center">
                        <div className="font-lato mb-0 sm:mb-2 lg:mb-4 text-xs  lg:text-sm">
                          {item.heroDesc}
                        </div>
                        <img
                          className="w-[35%] h-auto lg:w-[100%] hidden lg:block"
                          src="/assets/images/youtube-frame.png"
                          alt=""
                        />
                        <img
                          className="w-[40%] block lg:hidden"
                          src="/assets/images/youtube-frame-mob.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full overflow-hidden  lg:w-3/5 self-end relative">
                  <img
                    className={`hidden ${
                      idx !== 3 ? "translate-x-[-10%]" : "translate-x-[-0%]"
                    } lg:block`}
                    src={item.heroImg}
                    alt=""
                  />
                  <img
                    className="block lg:hidden"
                    src="/assets/images/grana-mob.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="block relative lg:hidden bg-[#010a1a] py-4">
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
                <img src="/assets/images/btn-char-mob.png" alt="" />
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
                    stroke={idx != index ? "transparent" : "white"}
                  />
                  <rect
                    x="7.17188"
                    y="15.957"
                    width="12.7942"
                    height="12.7942"
                    transform="rotate(-45 7.17188 15.957)"
                    fill={idx != index ? "#161F2C" : "white"}
                  />
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute w-full h-[2px] bg-line bottom-[22.5%]"></div>
      </div>
    </div>
  );
};

export default Characters;
