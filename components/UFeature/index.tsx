/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import f_adult from "../../public/assets/images/f_adult.png";
import m_adult from "../../public/assets/images/m_adult.png";
import f_adult_desktop from "../../public/assets/images/f_adult_desktop.png";
import m_adult_desktop from "../../public/assets/images/m_adult_desktop.png";
import bg_ab_char from "../../public/assets/images/bg-ab-char.png";
import bg_ab_weapon from "../../public/assets/images/bg-ab-weapon.png";
import char_gif from "../../public/assets/video/char.gif";
import weapon_gif from "../../public/assets/video/weap.gif";
import image1 from "../../public/assets/images/1.png";
const UFeature = () => {
  const tabs = [
    {
      bg: "bg-nft-char",
      img: char_gif,
      label: "NFT CHARACTER",
      desc: "Every character will be unique in both appearance and attributes. Build them as you wish to better assist you in your adventure!",
      abImg: bg_ab_char,
    },
    {
      bg: "bg-nft-weapon",
      img: weapon_gif,
      label: "NFT WEAPON",
      desc: "Every weapon will be unique in both appearance and attributes. Build them as you wish to better assist you in your adventure!",
      abImg: bg_ab_weapon,
    },
  ];
  const [selectedTab, setSelectedTab] = React.useState(0);
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, default: { ease: "easeInOut" } }}
        className={`${
          tabs[selectedTab].bg
        } transition-opacity w-full pt-12 justify-center  items-center flex-col h-screen relative overflow-hidden  ${
          playAnimation
            ? "opacity-1 flex visible"
            : "opacity-0 hidden invisible"
        }`}
      >
        {/* tabing */}
        <div className="border-b-[1.5pt] border-underline w-fit  mb-4 md:mb-0 ">
          <ul className="grid grid-cols-2">
            {tabs.map((item: any, idx: number) => (
              <li
                key={item.label}
                className={`${
                  idx === selectedTab
                    ? "font-friz-bold title-text font-extrabold"
                    : "font-friz-bold "
                } ${
                  idx == 0
                    ? "border-r-[1.5pt] pr-4 border-gradient-underline"
                    : ""
                } my-2 text-sm sm:text-xl cursor-pointer flex justify-center`}
                onClick={() => {
                  setSelectedTab(idx);
                }}
              >
                {`${item.label}`}

                {idx === selectedTab ? (
                  <motion.div className="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="hidden items-center justify-center flex-col md:flex "
          key={selectedTab ? tabs[selectedTab].label : "empty"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, type: "keyframes" }}
        >
          <div className="pt-6 pb-6 md:pt-[0rem] flex justify-center">
            <Image
              // width={selectedTab === 1 ? 810 : 750}
              // height={selectedTab === 1 ? 810 : 750}
              src={tabs[selectedTab].img}
              alt=""
            />
          </div>

          {selectedTab === 0 && (
            <Image
              className="absolute bottom-[0%] right-[-20%] lg:right-0 -z-[1]"
              src={f_adult_desktop}
              alt=""
            />
          )}
          {selectedTab === 0 && (
            <Image
              className="absolute bottom-[0%] left-[-20%] lg:left-0 -z-[1]"
              src={m_adult_desktop}
              alt=""
            />
          )}
          <span className="text-center w-[65%] font-lato font-[400] pb-0">
            {tabs[selectedTab].desc}
          </span>
        </motion.div>
        <div className="overflow-hidden  flex flex-col md:hidden ">
          <Swiper
            id="swiperUFeatureMob"
            modules={[Pagination, Navigation, EffectCoverflow]}
            slidesPerView={"auto"}
            initialSlide={1}
            centeredSlides
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              // depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              el: ".swiper-pagination-ufeature-mob",
              clickable: true,
              renderBullet(index, className) {
                return (
                  '<div class="' +
                  className +
                  '">' +
                  '<div class="sw-pagi-b btn-li-sw--mob">' +
                  '<div class="sw-pagi">' +
                  "</div></div></div>"
                );
              },
            }}
          >
            {[...Array(selectedTab == 0 ? 10 : 11)].map(
              (item: any, idx: number) => (
                <SwiperSlide key={idx} className=" !w-fit">
                  {/* <Image
                    className="h-full w-full object-contain"
                    src={image1}
                    alt={`img${idx + 1}`}
                  /> */}
                  <img
                    className="w-full h-full"
                    src={`/assets/images/${idx + 1}${
                      selectedTab == 0 ? "" : "-1"
                    }.png`}
                    alt={`img ${idx + 1}`}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="swiper-pagination swiper-pagination-ufeature-mob" />
          {selectedTab === 0 && (
            <Image
              className="absolute bottom-[-20%] right-0 -z-[1]"
              src={f_adult}
              alt=""
            />
          )}
          {selectedTab === 0 && (
            <Image
              className="absolute bottom-[-20%] left-0 -z-[1]"
              src={m_adult}
              alt=""
            />
          )}
          <div className="flex w-full justify-center relative bottom-0">
            <Image className="w-[75%]" src={tabs[selectedTab].abImg} alt="" />
            <div className="flex w-full justify-center absolute h-full  items-center left-0 right-0">
              <span className="text-center w-[85%] font-lato font-[400] text-sm sm:text-base ">
                {tabs[selectedTab].desc}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default UFeature;
