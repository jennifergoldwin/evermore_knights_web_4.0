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
