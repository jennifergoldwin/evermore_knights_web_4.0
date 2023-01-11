/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const UFeature = () => {
  const tabs = [
    {
      bg: "bg-nft-char",
      img: "/assets/images/nft-char.png",
      label: "NFT CHARACTER",
      desc: "Every character will be unique in both appearance and attributes. Build them as you wish to better assist you in your adventure!",
      abImg: "/assets/images/bg-ab-char.png",
    },
    {
      bg: "bg-nft-weapon",
      img: "/assets/images/nft-weapon.png",
      label: "NFT WEAPON",
      desc: "Every weapon will be unique in both appearance and attributes. Build them as you wish to better assist you in your adventure!",
      abImg: "/assets/images/bg-ab-weapon.png",
    },
  ];
  const [selectedTab, setSelectedTab] = React.useState(0);
  //   console.log(`ss ${tabs.indexOf(selectedTab)}`);

  return (
    <div
      className={`${tabs[selectedTab].bg} w-full flex  items-center flex-col min-h-screen relative overflow-hidden pt-12 pb-12`}
    >
      <div className="border-b-[1.5pt] border-underline w-fit pt-8 mb-8 ">
        <ul className="flex gap-4">
          {tabs.map((item: any, idx: number) => (
            <li
              key={item.label}
              className={`${
                idx === selectedTab
                  ? "font-friz-bold title-text"
                  : "font-friz-regular"
              } ${
                idx == 0
                  ? "border-r-[1.5pt] pr-4 border-gradient-underline"
                  : ""
              } my-2 text-sm sm:text-xl cursor-pointer`}
              onClick={() => {
                setSelectedTab(idx),
                  console.log(idx),
                  console.log(tabs[selectedTab].bg);
              }}
            >
              {`${item.label}`}

              {idx === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        <motion.div
          className="hidden items-center justify-center flex-col md:flex"
          key={selectedTab ? tabs[selectedTab].label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <img src={tabs[selectedTab].img} alt="" />
          {selectedTab === 0 && (
            <img
              className="absolute bottom-[0%] right-[-20%] lg:right-0"
              src="/assets/images/f_adult_desktop.png"
              alt=""
            />
          )}
          {selectedTab === 0 && (
            <img
              className="absolute bottom-[0%] left-[-20%] lg:left-0"
              src="/assets/images/m_adult_desktop.png"
              alt=""
            />
          )}
          <span className="text-center w-[65%] font-lato font-[400] pb-4">
            {tabs[selectedTab].desc}
          </span>
        </motion.div>
        <div className="overflow-hidden contents md:hidden ">
          <Swiper
            className="!h-fit "
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
            onSlideChange={() => console.log("slide change")}
          >
            {[...Array(10)].map((item: any, idx: number) => (
              <SwiperSlide key={idx} className="!h-fit !w-fit">
                <img
                  src={`/assets/images/${idx + 1}.png`}
                  alt={`img ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination swiper-pagination-ufeature-mob" />
          {selectedTab === 0 && (
            <img
              className="absolute bottom-[-20%] right-0"
              src="/assets/images/f_adult.png"
              alt=""
            />
          )}
          {selectedTab === 0 && (
            <img
              className="absolute bottom-[-20%] left-0"
              src="/assets/images/m_adult.png"
              alt=""
            />
          )}
          <div className="flex w-full justify-center">
            <img
              className="absolute bottom-[0%] "
              src={tabs[selectedTab].abImg}
              alt=""
            />
          </div>
          <div className="flex w-full justify-center">
            <span className="text-center w-[85%] font-lato font-[400] pb-4 absolute bottom-[10px]">
              {tabs[selectedTab].desc}
            </span>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};
export default UFeature;
