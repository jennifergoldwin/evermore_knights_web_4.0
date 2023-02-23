/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const listArray = ["slide1", "slide2", "slide3", "slide4", "slide5"];
const storyList = [
  {
    url: "/assets/video/video-1.mp4",
    title: "WELCOME TO TEMERIS",
    subtitle:
      "In the beginning, there were the Heavenly Emissaries. Within the darkness of the void they created light. From that light the very stars were born, called the Stars of Salvation. The stars adorned the once dark void, and spawned a myriad of countless worlds. Only one was able to sustain life. They named it Temeris, meaning ‘born from nothing, and into abundance.",
  },
  {
    url: "/assets/video/video-2.mp4",
    title: "AGE OF GODS",
    subtitle:
      "Then they created the First Gods, beings of great power and had them watch over Temeris in their stead. With the First Gods, life was beautiful, and abundant. The denizens of the world however were imperfect and needed guidance. It was up to The First Gods, to guide all life toward a better tomorrow",
  },
  {
    url: "/assets/video/video-3.mp4",
    title: "HUMANS AND NATIONS",
    subtitle:
      "As life went on, the inhabitants formed their own groups and races. Some of them, especially humans, were able to innovate and create spectacular marvels. As they raised grand civilizations and developed intricate inventions. And thus, the seven nations formed under the sovereignty of the First Gods. Until balance came asunder through years of conflict and turmoil. Ultimately, the Gods then decided to leave their creations behind.",
  },
  {
    url: "/assets/video/video-4.mp4",
    title: "THE MIST",
    subtitle:
      "Mankind however did not yield, as they forged their own paths ahead, creating a world governed by the deeds and exploits of humans, instead of that of the heavens. Unfortunately, that didn't last long, as an unknown threat known as the “Mist” appeared. It spawned the Dread, abominable atrocities that consumed all living things. Once the Mist descended, the only option was to flee.",
  },
  {
    url: "/assets/video/video-5.mp4",
    title: "EVERMORE KNIGHTS",
    subtitle:
      "From this conflict, Godfric Reunafel of Arriane united the houses to create the Evermore Kingdom. He then established what is known today as the Evermore Knights. It became home to the brightest and strongest heroes throughout Temeris.",
  },
];
const Story = () => {
  const [isPlaying, setIsPlaying] = React.useState(1);
  const [swiper, setSwiper] = React.useState(useSwiper());
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
  //   (document.getElementById(`video${isPlaying}`) as HTMLVideoElement).play();
  // }, [isPlaying]);

  // React.useEffect(() => {
  //   for (let i = 1; i < storyList.length; i++) {
  //     (document.getElementById(`video${i + 1}`) as HTMLVideoElement).pause();
  //   }
  // }, []);
  // const handleVideo = (swiper: any) => {
  //   // console.log(swiper.activeIndex);
  //   let now = isPlaying;
  //   (document.getElementById(`video${isPlaying}`) as HTMLVideoElement).pause();
  //   if (isPlaying >= storyList.length) {
  //     now = 1;
  //   } else {
  //     now = isPlaying + 1;
  //   }
  //   setIsPlaying(now);
  // };
  const resetProgress = () => {
    for (let i = 1; i <= storyList.length; i++) {
      const curr = document.querySelector(
        `.swiper-pagination-bullet.slide${i}`
      ) as HTMLElement;
      if (curr) {
        curr.classList.remove("done");
      }
    }
  };
  return (
    <div
      className={`h-screen ${
        playAnimation ? "opacity-1 flex" : "opacity-0 hidden"
      }`}
    >
      <Swiper
        id="storyView"
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        effect="fade"
        // loop
        allowTouchMove={false}
        fadeEffect={{ crossFade: true }}
        // onSlideChange={handleVideo}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          renderBullet(index, className) {
            return (
              '<span class="' +
              className +
              " " +
              listArray[index] +
              '">' +
              '<i className = "pageIndexButton" data-index="' +
              index +
              '"></i>' +
              "<b></b>" +
              "</span>"
            );
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 10000,
          waitForTransition: true,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        onActiveIndexChange={(swiper: any) => {
          const prog = document.querySelector(
            `.swiper-pagination-bullet.slide${swiper.activeIndex}`
          ) as HTMLElement;
          if (prog) {
            resetProgress();
            for (let i = 1; i <= swiper.activeIndex; i++) {
              (
                document.querySelector(
                  `.swiper-pagination-bullet.slide${i}`
                ) as HTMLElement
              ).classList.add("done");
            }
          }
          (
            document.getElementById(
              `video${swiper.activeIndex + 1}`
            ) as HTMLVideoElement
          ).load();
          (
            document.getElementById(
              `video${swiper.activeIndex + 1}`
            ) as HTMLVideoElement
          ).play();
          setIsPlaying(swiper.activeIndex + 1);
          if (swiper.activeIndex == 0) {
            resetProgress();
          }
        }}
        onAutoplayStart={(swiper: any) => {
          (
            document.getElementById(
              `video${swiper.activeIndex + 1}`
            ) as HTMLVideoElement
          ).load();
          (
            document.getElementById(
              `video${swiper.activeIndex + 1}`
            ) as HTMLVideoElement
          ).play();
        }}
      >
        <div className="swiper-pagination hidden md:block"></div>
        <div className="w-full absolute flex justify-center items-center bottom-[10%]">
          <div className="swiper-pagi-mob gap-5 items-center sm:gap-0  grid grid-cols-5  sm:grid sm:grid-cols-5 md:hidden">
            <span
              className=" w-[32px] h-[32px] justify-self-start"
              onClick={() => swiper.slidePrev()}
            >
              <img src="/assets/images/arrow-left.png" alt="" />
            </span>
            <span
              className={`before flex justify-center items-center ${
                isPlaying == 1 ? "opacity-0" : "opacity-1"
              }`}
            >
              <img
                src={`/assets/images/bg-world-paging_inactive0${
                  isPlaying == 1 ? "1" : isPlaying - 1
                }.png`}
                alt=""
              />
            </span>
            <span className="current  flex justify-center items-center">
              <img
                src={`/assets/images/bg-world-paging_active0${isPlaying}.png`}
                alt=""
              />
            </span>
            <span
              className={`after  flex justify-center items-center ${
                isPlaying == storyList.length ? "opacity-0" : "opacity-1"
              }`}
            >
              <img
                src={`/assets/images/bg-world-paging_inactive0${
                  isPlaying == storyList.length ? isPlaying : isPlaying + 1
                }.png`}
                alt=""
              />
            </span>
            <span
              className=" w-[32px] h-[32px] justify-self-end"
              onClick={() => swiper.slideNext()}
            >
              <img src="/assets/images/arrow-right.png" alt="" />
            </span>
          </div>
          <div className="swiper-line block sm:block md:hidden w-full h-[2px] bg-black-01 absolute z-[4] " />
        </div>
        <div className="swiper-button-prev !top-[unset] bottom-[52px] !left-[2%] lg:!left-[10%] !hidden sm:!hidden md:!flex">
          <img src="/assets/images/arrow-left.png" alt="" />
        </div>
        <div className="swiper-button-next !top-[unset] bottom-[52px] !right-[2%] lg:!right-[10%] !hidden sm:!hidden md:!flex">
          <img src="/assets/images/arrow-right.png" alt="" />
        </div>
        {storyList.map((item: any, idx: number) => (
          <SwiperSlide className="h-full" key={idx + 1}>
            <div className="flex flex-col h-screen">
              <video
                onLoadedData={() => {
                  console.log(`loaded video ${this} ${idx + 1}`);
                }}
                onLoad={() => {
                  console.log(`start video ${idx + 1}`);
                }}
                onWaiting={() => {
                  console.log(`wait video ${idx + 1}`);
                }}
                muted
                preload="none"
                id={`video${idx + 1}`}
                className="object-cover h-full w-full relative"
              >
                <source src={item.url} type="video/mp4" />
              </video>
              <div className="overlay-story opacity-[0.8] sm:opacity-[0]"></div>
              <div className="z-20 flex flex-col items-center justify-center absolute h-fit bottom-[20%] sm:bottom-0  sm:h-full ">
                <div className="w-[90%] sm:w-[65%]">
                  <div className="w-full flex justify-center title-story-slide font-friz-bold  text-4xl text-center">
                    <span>{item.title}</span>
                  </div>
                  <div className="flex justify-center desc-story-slide relative mt-4">
                    <div className="absolute top-[-10px] w-full flex justify-center">
                      <svg
                        width="37"
                        height="20"
                        viewBox="0 0 37 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.22932 8.11312L5.81666 5.69783L1.89844 9.62034L6.4058 14.1233L18.5252 2L24.5474 8.03823"
                          stroke="#B59E78"
                          strokeWidth="1.99776"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M28.4744 11.8773L30.887 14.2926L34.8053 10.3795L30.2979 5.86719L18.1879 17.9998L12.1562 11.9616"
                          stroke="#B59E78"
                          strokeWidth="1.99776"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M22.3097 9.99757L18.3555 6.03906L14.4013 9.99757L18.3555 13.9561L22.3097 9.99757Z"
                          stroke="#B59E78"
                          strokeWidth="1.99776"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <p className="w-full lf:w-[80%] text-center font-lato text-sm sm:text-base md:text-lg lg:text-xl p-4">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
