/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
interface IFooter {
  fullpageApi: any;
}
const Footer: React.FC<IFooter> = ({ fullpageApi }) => {
  const arrow_trans = {
    rest: {
      opacity: 0,
    },
    play: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.4,
        ease: "easeIn",
      },
    },
  };
  return (
    <motion.div
      id="footer"
      whileInView="play"
      initial="rest"
      animate="rest"
      className="relative flex w-full bg-[#1D1B1B] flex-col justify-center items-center gap-5 py-5 align-bottom h-auto"
    >
      <motion.div
        onClick={() => fullpageApi.moveTo(1, "homePage")}
        variants={arrow_trans}
        className="flex flex-col justify-center items-center"
      >
        <svg
          width="72"
          height="68"
          viewBox="0 0 72 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1006_124)">
            <mask
              id="path-1-outside-1_1006_124"
              maskUnits="userSpaceOnUse"
              x="13"
              y="14"
              width="46"
              height="29"
              fill="black"
            >
              <rect fill="white" x="13" y="14" width="46" height="29" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.879 41.657L36 26.418L24.121 41.657L16 41.657L36 16L56 41.657L47.879 41.657Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.879 41.657L36 26.418L24.121 41.657L16 41.657L36 16L56 41.657L47.879 41.657Z"
              fill="white"
            />
            <path
              d="M36 26.418L36.8387 25.7642L36 24.6883L35.1613 25.7642L36 26.418ZM47.879 41.657L47.0404 42.3108L47.3597 42.7204L47.879 42.7204L47.879 41.657ZM24.121 41.657L24.121 42.7204L24.6403 42.7204L24.9596 42.3108L24.121 41.657ZM16 41.657L15.1613 41.0032L13.8228 42.7204L16 42.7204L16 41.657ZM36 16L36.8387 15.3462L36 14.2703L35.1613 15.3462L36 16ZM56 41.657L56 42.7204L58.1772 42.7204L56.8387 41.0032L56 41.657ZM35.1613 27.0717L47.0404 42.3108L48.7177 41.0032L36.8387 25.7642L35.1613 27.0717ZM24.9596 42.3108L36.8387 27.0717L35.1613 25.7642L23.2823 41.0032L24.9596 42.3108ZM24.121 40.5936L16 40.5936L16 42.7204L24.121 42.7204L24.121 40.5936ZM16.8387 42.3108L36.8387 16.6538L35.1613 15.3462L15.1613 41.0032L16.8387 42.3108ZM35.1613 16.6538L55.1613 42.3108L56.8387 41.0032L36.8387 15.3462L35.1613 16.6538ZM56 40.5936L47.879 40.5936L47.879 42.7204L56 42.7204L56 40.5936Z"
              fill="#B59E78"
              mask="url(#path-1-outside-1_1006_124)"
            />
            <path
              d="M39.1977 47.9356L39.1979 47.9353C39.69 47.0496 40.4325 46.3193 41.3363 45.8342L41.3366 45.834L45.7361 43.4687L46.6072 43.0004L45.7361 42.5321L41.337 40.167C41.3369 40.1669 41.3368 40.1669 41.3368 40.1669C41.3367 40.1668 41.3367 40.1668 41.3366 40.1668C40.432 39.6795 39.6897 38.9507 39.1979 38.0655L39.1977 38.0652L36.7909 33.7414L36.3264 32.9068L35.8618 33.7414L33.4553 38.0649C32.9609 38.9515 32.2198 39.6817 31.3164 40.1666L31.3161 40.1668L26.9166 42.5321L26.0455 43.0004L26.9166 43.4687L31.3158 45.8338C32.2206 46.3211 32.963 47.05 33.4549 47.9353L33.4551 47.9356L35.8618 52.2594L36.3264 53.094L36.7909 52.2594L39.1977 47.9356Z"
              fill="white"
              stroke="#B59E78"
              strokeWidth="1.06339"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1006_124"
              x="0.0918179"
              y="0.541037"
              width="71.8164"
              height="67.375"
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
                result="effect1_dropShadow_1006_124"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1006_124"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="font-inter font-bold text-white">Back to Top</div>
      </motion.div>
      <div className="grid grid-cols-3">
        <img src="/assets/images/nomina.png" alt="" />
        <img src="/assets/images/muse.png" alt="" />
        <img src="/assets/images/creoengine.png" alt="" />
      </div>
      <p className="text-white text-sm sm:text-base text-opacity-50 w-[100%] px-4 sm:px-0 sm:w-[55%] text-center font-inter">
        © 2022 Nomina Games, Muse, Creo Engine and any associated logos are
        trademarks, service marks, and/or registered trademarks of Nomina Games
      </p>
      <img src="/assets/images/logo.png" alt="" />
      <span className="text-white text-opacity-50 font-inter text-sm sm:text-base">
        © 2022 Evermore Knights
      </span>
    </motion.div>
  );
};

export default Footer;
