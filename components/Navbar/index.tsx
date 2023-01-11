import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Navbar = () => {
  // const [active, setActive] = React.useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };
  const [activeLink, setActiveLink] = React.useState([
    { idx: 0, status: true },
    { idx: 1, status: false },
    { idx: 2, status: false },
    { idx: 3, status: false },
    { idx: 4, status: false },
    { idx: 5, status: false },
    { idx: 6, status: false },
    // { idx: 3, status: false },
  ]);
  const handleActiveLink = (e: any) => {
    setActiveLink(
      activeLink.map((link) =>
        link.idx === parseInt(e)
          ? { ...link, status: true }
          : { ...link, status: false }
      )
    );
  };

  const navbarTransition = {
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
    <nav className="hidden md:block fixed top-[50%] left-[20px] z-30">
      <ul id="menu">
        <motion.li className="sub_nav grid grid-cols-2 items-center justify-items-center  gap-1">
          <div className="flex items-center gap-2">
            {/* tombol persegi */}
            <motion.a href="#homePage" onClick={() => handleActiveLink(0)}>
              <div className={`${activeLink[0].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[0].status ? "bg-white" : "bg-grey"
                  } btn-li `}
                ></div>
              </div>
            </motion.a>
            {/* garis lurus */}
            <svg
              className={`${activeLink[0].status ? "showTrans" : "opacity-0"} `}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          {/* desc navbar */}
          <motion.span
            variants={navbarTransition}
            className={`${
              activeLink[0].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            HOME
          </motion.span>
        </motion.li>

        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#storyPage" onClick={() => handleActiveLink(1)}>
              <div className={`${activeLink[1].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[1].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[1].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[1].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            STORY
          </span>
        </li>
        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#aboutPage" onClick={() => handleActiveLink(2)}>
              <div className={`${activeLink[2].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[2].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[2].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[2].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3 `}
          >
            ABOUT
          </span>
        </li>
        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#characterPage" onClick={() => handleActiveLink(3)}>
              <div className={`${activeLink[3].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[3].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[3].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[3].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            CHARACTER
          </span>
        </li>
        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#uFeaturePage" onClick={() => handleActiveLink(4)}>
              <div className={`${activeLink[4].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[4].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[4].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[4].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            UNIQUE FEATURE
          </span>
        </li>
        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#worldPage" onClick={() => handleActiveLink(5)}>
              <div className={`${activeLink[5].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[5].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[5].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[5].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            WORLD MAP
          </span>
        </li>
        <li className="sub_nav grid grid-cols-2 items-center justify-items-center gap-1">
          <div className="flex items-center gap-2">
            <a href="#featurePage" onClick={() => handleActiveLink(6)}>
              <div className={`${activeLink[6].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[6].status ? "bg-white" : "bg-grey"
                  } btn-li`}
                ></div>
              </div>
            </a>
            <svg
              className={`${activeLink[6].status ? "showTrans" : "opacity-0"}`}
              width="12"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M0 1H12" stroke="white" />
            </svg>
          </div>
          <span
            className={`${
              activeLink[6].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            FEATURES
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
