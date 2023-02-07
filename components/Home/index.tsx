/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { RiInstagramFill } from "react-icons/ri";
interface IHomePage {
  fullpageApi: any;
}
const HomePage: React.FC<IHomePage> = ({ fullpageApi }) => {
  React.useEffect(() => {
    let header = document.getElementById("header-top") as HTMLElement;
    let arrow = document.getElementById("explore-arrow") as HTMLElement;
    header.classList.add("!hidden");
    arrow.classList.remove("hidden");
  }, []);

  return (
    <div id="home-section" className="relative flex h-screen">
      {/* <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/-ERMKXPYQl4?controls=0?autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <video
        data-keepplaying
        loop
        autoPlay
        muted
        className="object-cover h-full w-full relative hidden sm:block"
      >
        <source src="/assets/video/landpage.mp4" type="video/mp4" />
      </video>
      <video
        data-keepplaying
        loop
        autoPlay
        muted
        className="object-cover h-full w-full relative block sm:hidden"
      >
        <source src="/assets/video/landpage_mob.mp4" type="video/mp4" />
      </video>
      <div className="flex absolute w-full h-full">
        <div className="flex justify-center items-center absolute w-full translate-y-[40%] sf:translate-y-[15%]  lf:translate-y-[12%] md:translate-y-[15%]">
          <motion.img
            whileInView="play"
            initial="rest"
            animate="rest"
            src="/assets/images/logo_shine.png"
            alt=""
          />
        </div>
        {/* <div className="flex absolute justify-center w-full top-[50%]">
          <img src="/assets/images/leaf.png" alt="" />
        </div> */}
        <div className="home-mob-style ">
          <div className="absolute bg-gradient-black-1 h-[400px] bottom-0 w-full z-[1]"></div>
          {/* <div className="lg:absolute bottom-[10%] lg:bottom-0 flex gap-2 right-0 lg:p-3">
            <img
              className="w-36 sm:w-auto h-auto md:z-20"
              src="/assets/images/appstore.png"
              alt=""
            />
            <img
              className="w-36 sm:w-auto h-auto md:z-20"
              src="/assets/images/googleplay.png"
              alt=""
            />
          </div> */}

          <div className="lg:hidden grid grid-cols-6 gap-3 z-[2]">
            <a
              href="https://www.facebook.com/EvermoreKnightsOfficial"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/EvermoreKnights"
              target="_blank"
              rel="noreferrer"
              className="btn-footer home"
            >
              <FaTwitter />
            </a>

            <a
              href="https://discord.com/invite/evermoreknights"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaDiscord />
            </a>

            <a
              href="https://www.instagram.com/evermore.knights/"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.tiktok.com/@evermoreknights"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@evermoreknights"
              rel="noreferrer"
              target="_blank"
              className="btn-footer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <motion.div
          onClick={() => fullpageApi.moveTo(2, "storyPage")}
          id="explore-arrow"
          className=" fixed bottom-0  flex flex-col justify-center items-center w-full z-[2]"
        >
          <span className="hidden lg:flex font-friz-bold text-glow text-3xl">
            Explore
          </span>
          <svg
            width="71"
            height="68"
            viewBox="0 0 71 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_331_182)">
              <mask
                id="path-1-outside-1_331_182"
                maskUnits="userSpaceOnUse"
                x="13"
                y="25.0078"
                width="45"
                height="29"
                fill="black"
              >
                <rect fill="white" x="13" y="25.0078" width="45" height="29" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.8877 26.8467L35.4271 41.792L46.9665 26.8467L54.8542 26.8467L35.4271 52.0078L16 26.8467L23.8877 26.8467Z"
                />
              </mask>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.8877 26.8467L35.4271 41.792L46.9665 26.8467L54.8542 26.8467L35.4271 52.0078L16 26.8467L23.8877 26.8467Z"
                fill="white"
              />
              <path
                d="M35.4271 41.792L34.5854 42.4419L35.4271 43.532L36.2688 42.4419L35.4271 41.792ZM23.8877 26.8467L24.7294 26.1968L24.4101 25.7833L23.8877 25.7833L23.8877 26.8467ZM46.9665 26.8467L46.9665 25.7833L46.4441 25.7833L46.1248 26.1968L46.9665 26.8467ZM54.8542 26.8467L55.6959 27.4965L57.0187 25.7833L54.8542 25.7833L54.8542 26.8467ZM35.4271 52.0078L34.5854 52.6577L35.4271 53.7478L36.2688 52.6577L35.4271 52.0078ZM16 26.8467L16 25.7833L13.8355 25.7833L15.1583 27.4965L16 26.8467ZM36.2688 41.1421L24.7294 26.1968L23.046 27.4965L34.5854 42.4419L36.2688 41.1421ZM46.1248 26.1968L34.5854 41.1421L36.2688 42.4419L47.8082 27.4965L46.1248 26.1968ZM46.9665 27.9101L54.8542 27.9101L54.8542 25.7833L46.9665 25.7833L46.9665 27.9101ZM54.0125 26.1968L34.5854 51.3579L36.2688 52.6577L55.6959 27.4965L54.0125 26.1968ZM36.2688 51.3579L16.8417 26.1968L15.1583 27.4965L34.5854 52.6577L36.2688 51.3579ZM16 27.9101L23.8877 27.9101L23.8877 25.7833L16 25.7833L16 27.9101Z"
                fill="#B59E78"
                mask="url(#path-1-outside-1_331_182)"
              />
              <path
                d="M32.3579 20.6861L32.3577 20.6864C31.8804 21.5535 31.1609 22.2678 30.2858 22.7419L30.2855 22.7421L26.012 25.0617L25.1511 25.529L26.012 25.9963L30.2851 28.3157C30.2852 28.3157 30.2852 28.3158 30.2852 28.3158C31.1612 28.7921 31.8807 29.505 32.3577 30.3716L32.3579 30.3719L34.6957 34.6122L35.1613 35.4567L35.6269 34.6122L37.9645 30.3723C38.4439 29.5042 39.1621 28.79 40.0368 28.3161L40.0371 28.3159L44.3106 25.9963L45.1715 25.529L44.3106 25.0617L40.0375 22.7423C40.0374 22.7423 40.0374 22.7423 40.0373 22.7422C39.1614 22.2659 38.4419 21.5531 37.9649 20.6864L37.9647 20.6861L35.6269 16.4458L35.1613 15.6013L34.6957 16.4458L32.3579 20.6861Z"
                fill="white"
                stroke="#B59E78"
                strokeWidth="1.06339"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_331_182"
                x="0.107443"
                y="0.771505"
                width="70.6406"
                height="66.7031"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="6.86425" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.964706 0 0 0 0 0.72549 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_331_182"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_331_182"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </motion.div>
        {/* <div className="flex flex-col-reverse justify-center items-center lg:flex-row absolute w-full bottom-0">
          <div className="hidden lg:flex justify-start items-center w-2/5 pl-4"></div>
          <div className=" flex flex-col justify-center items-center lg:w-1/5 w-full">
            <span className="hidden lg:flex font-friz-bold text-glow text-3xl">
              Explore
            </span>
            <svg
              width="71"
              height="68"
              viewBox="0 0 71 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_331_182)">
                <mask
                  id="path-1-outside-1_331_182"
                  maskUnits="userSpaceOnUse"
                  x="13"
                  y="25.0078"
                  width="45"
                  height="29"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="13"
                    y="25.0078"
                    width="45"
                    height="29"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.8877 26.8467L35.4271 41.792L46.9665 26.8467L54.8542 26.8467L35.4271 52.0078L16 26.8467L23.8877 26.8467Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.8877 26.8467L35.4271 41.792L46.9665 26.8467L54.8542 26.8467L35.4271 52.0078L16 26.8467L23.8877 26.8467Z"
                  fill="white"
                />
                <path
                  d="M35.4271 41.792L34.5854 42.4419L35.4271 43.532L36.2688 42.4419L35.4271 41.792ZM23.8877 26.8467L24.7294 26.1968L24.4101 25.7833L23.8877 25.7833L23.8877 26.8467ZM46.9665 26.8467L46.9665 25.7833L46.4441 25.7833L46.1248 26.1968L46.9665 26.8467ZM54.8542 26.8467L55.6959 27.4965L57.0187 25.7833L54.8542 25.7833L54.8542 26.8467ZM35.4271 52.0078L34.5854 52.6577L35.4271 53.7478L36.2688 52.6577L35.4271 52.0078ZM16 26.8467L16 25.7833L13.8355 25.7833L15.1583 27.4965L16 26.8467ZM36.2688 41.1421L24.7294 26.1968L23.046 27.4965L34.5854 42.4419L36.2688 41.1421ZM46.1248 26.1968L34.5854 41.1421L36.2688 42.4419L47.8082 27.4965L46.1248 26.1968ZM46.9665 27.9101L54.8542 27.9101L54.8542 25.7833L46.9665 25.7833L46.9665 27.9101ZM54.0125 26.1968L34.5854 51.3579L36.2688 52.6577L55.6959 27.4965L54.0125 26.1968ZM36.2688 51.3579L16.8417 26.1968L15.1583 27.4965L34.5854 52.6577L36.2688 51.3579ZM16 27.9101L23.8877 27.9101L23.8877 25.7833L16 25.7833L16 27.9101Z"
                  fill="#B59E78"
                  mask="url(#path-1-outside-1_331_182)"
                />
                <path
                  d="M32.3579 20.6861L32.3577 20.6864C31.8804 21.5535 31.1609 22.2678 30.2858 22.7419L30.2855 22.7421L26.012 25.0617L25.1511 25.529L26.012 25.9963L30.2851 28.3157C30.2852 28.3157 30.2852 28.3158 30.2852 28.3158C31.1612 28.7921 31.8807 29.505 32.3577 30.3716L32.3579 30.3719L34.6957 34.6122L35.1613 35.4567L35.6269 34.6122L37.9645 30.3723C38.4439 29.5042 39.1621 28.79 40.0368 28.3161L40.0371 28.3159L44.3106 25.9963L45.1715 25.529L44.3106 25.0617L40.0375 22.7423C40.0374 22.7423 40.0374 22.7423 40.0373 22.7422C39.1614 22.2659 38.4419 21.5531 37.9649 20.6864L37.9647 20.6861L35.6269 16.4458L35.1613 15.6013L34.6957 16.4458L32.3579 20.6861Z"
                  fill="white"
                  stroke="#B59E78"
                  strokeWidth="1.06339"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_331_182"
                  x="0.107443"
                  y="0.771505"
                  width="70.6406"
                  height="66.7031"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="6.86425" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 0.964706 0 0 0 0 0.72549 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_331_182"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_331_182"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-2 justify-center lg:justify-end lg:w-2/5 w-full">
            <img
              className="w-36 sm:w-auto h-auto"
              src="/assets/images/appstore.png"
              alt=""
            />
            <img
              className="w-36 sm:w-auto h-auto"
              src="/assets/images/googleplay.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-6">
            <a
              href="https://www.facebook.com/EvermoreKnightsOfficial"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/EvermoreKnights"
              target="_blank"
              rel="noreferrer"
              className="btn-footer home"
            >
              <FaTwitter />
            </a>

            <a
              href="https://discord.gg/evermoreknights"
              target="_blank"
              rel="noreferrer"
              className="btn-footer home"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.instagram.com/evermore.knights/"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaDiscord />
            </a>

            <a
              href="https://www.tiktok.com/@evermoreknights"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.tiktok.com/@evermoreknights"
              rel="noreferrer"
              target="_blank"
              className="btn-footer home"
            >
              <FaYoutube />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default HomePage;
