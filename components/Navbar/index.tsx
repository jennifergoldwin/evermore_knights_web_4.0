import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Navbar = () => {
  // const [active, setActive] = React.useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };
  const [idxHover, setIdxHover] = React.useState(0);
  const [activeLink, setActiveLink] = React.useState([
    { idx: 0, status: true },
    { idx: 1, status: false },
    { idx: 2, status: false },
    { idx: 3, status: false },
    { idx: 4, status: false },
    { idx: 5, status: false },
    { idx: 6, status: false },
    { idx: 7, status: false },
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
  const navbarTransition1 = {
    rest: {
      opacity: 1,
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
      <ul id="menu" className="py-2">
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[0].status ? "play" : "rest"}
          onClick={() => handleActiveLink(0)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#homePage">
            <div
              className={`${
                activeLink[0].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[0].status ? "bg-white" : "bg-grey"
                } btn-li `}
              ></div>
            </div>
          </a>
          {/* desc navbar */}
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[0].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            HOME
          </motion.div>
        </motion.li>

        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[1].status ? "play" : "rest"}
          onClick={() => handleActiveLink(1)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#storyPage">
            <div
              className={`${
                activeLink[1].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[1].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[1].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            STORY
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[2].status ? "play" : "rest"}
          onClick={() => handleActiveLink(2)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#aboutPage">
            <div
              className={`${
                activeLink[2].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[2].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[2].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            ABOUT
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[3].status ? "play" : "rest"}
          onClick={() => handleActiveLink(3)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#characterPage">
            <div
              className={`${
                activeLink[3].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[3].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[3].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            CHARACTER
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[4].status ? "play" : "rest"}
          onClick={() => handleActiveLink(4)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#uFeaturePage">
            <div
              className={`${
                activeLink[4].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[4].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[4].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            UNIQUE FEATURE
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[5].status ? "play" : "rest"}
          onClick={() => handleActiveLink(5)}
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a href="#worldPage">
            <div
              className={`${
                activeLink[5].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[5].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>
          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[5].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            WORLD MAP
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[6].status ? "play" : "rest"}
          onClick={() => handleActiveLink(6)}
          className="sub_nav flex gap-8 items-center justify-items-center"
        >
          <a href="#featurePage">
            <div
              className={`${
                activeLink[6].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[6].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>

          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[6].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            FEATURES
          </motion.div>
        </motion.li>
        <motion.li
          whileHover="play"
          initial="rest"
          animate={activeLink[7].status ? "play" : "rest"}
          onClick={() => handleActiveLink(7)}
          className="sub_nav flex gap-8 items-center justify-items-center"
        >
          <a href="#blogPage">
            <div
              className={`${
                activeLink[7].status ? "b-btn-li" : "b-btn-li-none"
              }`}
            >
              <div
                className={`${
                  activeLink[7].status ? "bg-white" : "bg-grey"
                } btn-li`}
              ></div>
            </div>
          </a>

          <motion.div
            variants={navbarTransition}
            className={`${
              activeLink[7].status ? "showWhite text-base" : "showGrey text-sm"
            }  font-friz-bold  justify-self-start -ml-3`}
          >
            BLOG
          </motion.div>
        </motion.li>
      </ul>
      {/* <ul id="menu">
        <motion.li className="sub_nav grid grid-cols-2 items-center justify-items-center  gap-1">
          <div className="flex items-center gap-2">
           
            <motion.a href="#homePage" onClick={() => handleActiveLink(0)}>
              <div className={`${activeLink[0].status ? "b-btn-li" : ""}`}>
                <div
                  className={`${
                    activeLink[0].status ? "bg-white" : "bg-grey"
                  } btn-li `}
                ></div>
              </div>
            </motion.a>
           
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
         
          <span
            className={`${
              activeLink[0].status ? "showTrans" : "opacity-0"
            }  font-friz-bold text-xs justify-self-start -ml-3`}
          >
            HOME
          </span>
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
      </ul> */}
    </nav>
  );
};

export default Navbar;
