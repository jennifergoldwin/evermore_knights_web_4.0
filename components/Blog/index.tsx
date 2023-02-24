/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const blogList = [
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];
interface IBlog {
  title: String;
  isAvailNewsPage: boolean;
  bg?: any;
  bg1?: any;
}
const Blog: React.FC<IBlog> = ({
  title,
  isAvailNewsPage,
  bg = "bg-[url(/assets/images/bg-blog.png)]",
  bg1 = "bg-[#1D1B1B]",
}) => {
  return (
    <div className={bg1}>
      <div
        className={`${bg} w-full h-screen relative   bg-center bg-cover flex flex-col justify-center pl-4 md:pl-[10%]`}
      >
        <div className="pb-6">
          <h1 className="font-friz-bold title-feature text-xl pb-2">{title}</h1>
          <svg
            width="142"
            height="2"
            viewBox="0 0 142 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="142" height="2" fill="url(#paint0_linear_331_1784)" />
            <defs>
              <linearGradient
                id="paint0_linear_331_1784"
                x1="-22.3475"
                y1="1.68511"
                x2="-22.1093"
                y2="-6.40544"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E6CD99" />
                <stop offset="1" stopColor="#A06E05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              825: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 3,
              },
              420: {
                slidesPerView: 2,
              },
            }}
          >
            {blogList.map((item: any, index: number) => (
              <SwiperSlide
                className="flex justify-start items-start"
                key={index + 1}
              >
                <div className="w-[80%] flex flex-col">
                  <img src={item.img} alt="" />
                  <h2 className="text-ellipsis overflow-hidden whitespace-nowrap title-feature font-inter font-extrabold text-lg">
                    {item.title}
                  </h2>
                  <p className="font-inter text-white text-opacity-50">
                    {item.desc}
                  </p>
                  <span className="title-feature font-friz-bold">
                    Read more
                  </span>
                </div>
              </SwiperSlide>
            ))}
            {isAvailNewsPage && (
              <SwiperSlide className="">
                <div className="flex flex-col h-full justify-center items-center">
                  <svg
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.78796 26L23.625 13L6.78796 1.28314e-06L6.78796 5.27808L16.7891 13L6.78796 20.7219L6.78796 26Z"
                      fill="url(#paint0_linear_331_1763)"
                    />
                    <path
                      d="M2.83716 14.7445L-0.000270323 13.1801L2.83716 11.6157C3.47741 11.2633 4.00308 10.7324 4.35392 10.0871L5.90612 7.22741L7.45831 10.0871C7.80797 10.7324 8.33482 11.2622 8.97507 11.6157L11.8125 13.1801L8.97507 14.7445C8.33482 15.0969 7.80915 15.6279 7.45831 16.2731L5.90611 19.1328L4.35392 16.2731C4.00426 15.6279 3.47741 15.0969 2.83716 14.7445Z"
                      fill="url(#paint1_linear_331_1763)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_331_1763"
                        x1="26.2748"
                        y1="4.09355"
                        x2="-3.47449"
                        y2="13.3072"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E6CD99" />
                        <stop offset="1" stopColor="#A06E05" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_331_1763"
                        x1="13.6716"
                        y1="9.10185"
                        x2="-4.9982"
                        y2="17.9614"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E6CD99" />
                        <stop offset="1" stopColor="#A06E05" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h1 className="font-friz-bold title-feature">
                    Go to news page
                  </h1>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Blog;
{
  /* <Swiper
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
      </Swiper> */
}
{
  /* <div
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
      </div> */
}
