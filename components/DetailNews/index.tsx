/* eslint-disable @next/next/no-img-element */
import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Blog from "../Blog";
const DetailNews = () => {
  return (
    <div className="bg-[#1D1B1B] ">
      <div className="w-full py-16 gap-8  relative bg-[url(/assets/images/bg-blog.png)] bg-top bg-contain bg-no-repeat flex flex-col justify-center p-4 lg:pl-[100px]">
        <div className="flex justify-center ">
          <div className="w-[85%]  flex items-center">
            <svg
              width="25"
              height="29"
              viewBox="0 0 45 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.4126 9.84746L12.754 24.2539L31.4126 38.6603L31.4126 48.5078L-4.20769e-06 24.2539L31.4126 5.53542e-06L31.4126 9.84746Z"
                fill="url(#paint0_linear_331_2264)"
              />
              <path
                d="M38.7803 21.0036L44.0741 23.9223L38.7803 26.8409C37.5858 27.4984 36.6051 28.489 35.9505 29.6929L33.0546 35.0281L30.1587 29.6929C29.5063 28.489 28.5234 27.5006 27.3289 26.8409L22.0352 23.9223L27.3289 21.0036C28.5234 20.3462 29.5041 19.3555 30.1587 18.1517L33.0546 12.8164L35.9505 18.1517C36.6029 19.3555 37.5858 20.3462 38.7803 21.0036Z"
                fill="url(#paint1_linear_331_2264)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_331_2264"
                  x1="-4.94363"
                  y1="40.8705"
                  x2="50.5591"
                  y2="23.6807"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6CD99" />
                  <stop offset="1" stopColor="#A06E05" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_331_2264"
                  x1="18.5667"
                  y1="31.531"
                  x2="53.3986"
                  y2="15.0019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6CD99" />
                  <stop offset="1" stopColor="#A06E05" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className=" pl-4 title-feature font-friz-bold text-xl">
              Back to article list
            </h1>
          </div>
        </div>
        <div className="w-full justify-center items-center flex flex-col">
          <img
            src="/assets/images/detail-content-blog.png"
            className="w-[85%]"
            alt=""
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="yellow-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#E6CD99" offset="0%" />
                <stop stopColor="#A06E05" offset="100%" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex justify-between w-[85%] pt-2">
            <span className="font-inter text-white text-opacity-[0.5]">
              10/11/22
            </span>
            <div className="flex justify-center title-text font-friz-medium items-center gap-4">
              Share{" "}
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.0784 2.9488L8 4L6.0784 5.0512C5.6448 5.288 5.2888 5.6448 5.0512 6.0784L4 8L2.9488 6.0784C2.712 5.6448 2.3552 5.2888 1.9216 5.0512L0 4L1.9216 2.9488C2.3552 2.712 2.7112 2.3552 2.9488 1.9216L4 0L5.0512 1.9216C5.288 2.3552 5.6448 2.712 6.0784 2.9488Z"
                  fill="url(#paint0_linear_331_2384)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_331_2384"
                    x1="-1.25902"
                    y1="6.74045"
                    x2="11.3483"
                    y2="0.710873"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E6CD99" />
                    <stop offset="1" stopColor="#A06E05" />
                  </linearGradient>
                </defs>
              </svg>
              <FaFacebookF style={{ fill: "url(#yellow-gradient)" }} />
              <FaTwitter style={{ fill: "url(#yellow-gradient)" }} />
              <FaTelegramPlane style={{ fill: "url(#yellow-gradient)" }} />
              <FaDiscord style={{ fill: "url(#yellow-gradient)" }} />
              <RiInstagramFill style={{ fill: "url(#yellow-gradient)" }} />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center flex-col items-center">
          <h1 className="w-[85%] font-friz-medium title-feature text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="w-[85%] font-inter font-[400] text-white text-opacity-[0.5] text-sm pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
          <p className="w-[85%] font-inter font-[400] text-white text-opacity-[0.5] text-sm pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
          <p className="w-[85%] font-inter font-[400] text-white text-opacity-[0.5] text-sm pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="w-[85%]  flex items-center">
            <svg
              width="25"
              height="29"
              viewBox="0 0 45 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.4126 9.84746L12.754 24.2539L31.4126 38.6603L31.4126 48.5078L-4.20769e-06 24.2539L31.4126 5.53542e-06L31.4126 9.84746Z"
                fill="url(#paint0_linear_331_2264)"
              />
              <path
                d="M38.7803 21.0036L44.0741 23.9223L38.7803 26.8409C37.5858 27.4984 36.6051 28.489 35.9505 29.6929L33.0546 35.0281L30.1587 29.6929C29.5063 28.489 28.5234 27.5006 27.3289 26.8409L22.0352 23.9223L27.3289 21.0036C28.5234 20.3462 29.5041 19.3555 30.1587 18.1517L33.0546 12.8164L35.9505 18.1517C36.6029 19.3555 37.5858 20.3462 38.7803 21.0036Z"
                fill="url(#paint1_linear_331_2264)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_331_2264"
                  x1="-4.94363"
                  y1="40.8705"
                  x2="50.5591"
                  y2="23.6807"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6CD99" />
                  <stop offset="1" stopColor="#A06E05" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_331_2264"
                  x1="18.5667"
                  y1="31.531"
                  x2="53.3986"
                  y2="15.0019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6CD99" />
                  <stop offset="1" stopColor="#A06E05" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className=" pl-4 title-feature font-friz-bold text-xl">
              Back to news list
            </h1>
          </div>
        </div>

        <Blog
          title="Related Content"
          isAvailNewsPage={false}
          bg="transparent"
          bg1="transparent"
        />
      </div>
    </div>
  );
};

export default DetailNews;
