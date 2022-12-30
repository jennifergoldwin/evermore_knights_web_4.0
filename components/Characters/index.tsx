/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/effect-fade";
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
  return (
    <div className="relative overflow-hidden">
      <div className="grid absolute top-[15%] right-0 z-10 ">
        <div className="cursor-pointer" onClick={() => handleClick(0)}>
          <img
            className={`${
              index == 0
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 0
                ? "/assets/images/btn-1-active.png"
                : "/assets/images/btn-1.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(1)}>
          <img
            className={`${
              index == 1
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 1
                ? "/assets/images/btn-2-active.png"
                : "/assets/images/btn-2.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(2)}>
          <img
            className={`${
              index == 2
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 2
                ? "/assets/images/btn-3-active.png"
                : "/assets/images/btn-3.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(3)}>
          <img
            className={`${
              index == 3
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 3
                ? "/assets/images/btn-4-active.png"
                : "/assets/images/btn-4.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(4)}>
          <img
            className={`${
              index == 4
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 4
                ? "/assets/images/btn-5-active.png"
                : "/assets/images/btn-5.png"
            }`}
            alt=""
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleClick(5)}>
          <img
            className={`${
              index == 5
                ? "translate-x-[35%] transition-all"
                : "translate-x-[70%]"
            }`}
            src={`${
              index == 5
                ? "/assets/images/btn-6-active.png"
                : "/assets/images/btn-6.png"
            }`}
            alt=""
          />
        </div>
      </div>
      <Swiper
        modules={[EffectFade]}
        effect={"fade"}
        allowTouchMove={false}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {characterLists.map((item: any, idx: number) => (
          <SwiperSlide key={idx}>
            <div
              className={`${item.bg} bg-cover bg-center pl-0 lg:pl-[100px] pt-8`}
            >
              <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-2/5 p-4 md:pl-10">
                  <div className="flex items-center font-friz-bold gap-4">
                    <h1 className="text-4xl">{item.heroName}</h1>
                    <span className="title-text font-bold text-lg">
                      {item.heroSubName}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <img src="/assets/images/5_star.png" alt="" />
                    <div className="flex gap-4 font-barlow font-[600]">
                      <div className="flex items-center gap-2 ">
                        <Image width={20} height={20} src={item.icon1} alt="" />
                        <span>{item.title1}</span>
                      </div>
                      <div className="flex items-center gap-2 ">
                        <Image width={20} height={20} src={item.icon2} alt="" />
                        <span>{item.title2}</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="font-lato pb-6  md:text-sm">
                    {item.heroDesc}
                  </div>
                  <img src="/assets/images/youtube-frame.png" alt="" />
                </div>
                <div className="w-full md:w-3/5 self-end">
                  <img src={item.heroImg} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Characters;
