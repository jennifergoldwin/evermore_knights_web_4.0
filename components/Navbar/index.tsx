import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { myPage } from "../../service";
import $ from "jquery";
const Navbar = () => {
  // const [active, setActive] = React.useState(false);
  // const handleClick = () => {
  //   setActive(!active);
  // };
  const [idxHover, setIdxHover] = React.useState(0);
  const [activeLink, setActiveLink] = React.useState([
    { idx: 0, status: false },
    { idx: 1, status: false },
    { idx: 2, status: false },
    { idx: 3, status: false },
    { idx: 4, status: false },
    { idx: 5, status: false },
    { idx: 6, status: false },
    { idx: 7, status: false },
    // { idx: 3, status: false },
  ]);
  const handleActiveLink = (idx: any, e: any, href: any) => {
    // e.preventDefault();
    // var targetEl = $("a[id=" + href + "]");
    // // myPage.scrollThere(targetEl, 400);
    // let nav = document.querySelectorAll(".border-wrapper") as NodeList;
    // for (let i = 0; i < nav.length; i++) {
    //   let curr = nav[i] as HTMLElement;
    //   curr.classList.remove("b-btn-li");
    //   curr.classList.add("b-btn-li-none");
    //   (curr.childNodes[0] as HTMLElement).classList.remove("bg-white");
    //   (curr.childNodes[0] as HTMLElement).classList.add("bg-grey");
    // }
    // let curr = nav[idx] as HTMLElement;
    // curr.classList.remove("b-btn-li-none");
    // curr.classList.add("b-btn-li");
    // (curr.childNodes[0] as HTMLElement).classList.remove("bg-grey");
    // (curr.childNodes[0] as HTMLElement).classList.add("bg-white");
    setActiveLink(
      activeLink.map((link) =>
        link.idx === parseInt(idx)
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
    <nav className="hidden lg:flex fixed h-full  justify-center items-center left-[20px] z-30">
      <ul id="menu" className="py-2">
        <li
          data-menuanchor="homePage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#homePage">
            <div className="border-wrapper b-btn-li">
              <div className="btn-li"></div>
            </div>
          </a>
          {/* desc navbar */}
          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            HOME
          </div>
        </li>

        <li
          data-menuanchor="storyPage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#storyPage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>
          <div className=" font-friz-bold  justify-self-start -ml-3 nav-title">
            STORY
          </div>
        </li>

        <li
          data-menuanchor="aboutPage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#aboutPage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>
          <div className=" font-friz-bold  justify-self-start -ml-3 nav-title">
            ABOUT
          </div>
        </li>

        <li
          data-menuanchor="characterPage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#characterPage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>
          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            CHARACTER
          </div>
        </li>

        <li
          data-menuanchor="uFeaturePage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#uFeaturePage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>
          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            UNIQUE FEATURE
          </div>
        </li>

        <li
          data-menuanchor="worldPage"
          className="sub_nav flex gap-8  items-center justify-items-center"
        >
          <a className="nav-link" href="#worldPage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>
          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            WORLD MAP
          </div>
        </li>

        <li
          data-menuanchor="featurePage"
          className="sub_nav flex gap-8 items-center justify-items-center"
        >
          <a className="nav-link" href="#featurePage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>

          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            FEATURES
          </div>
        </li>

        {/* <li
          data-menuanchor="blogPage"
          className="sub_nav flex gap-8 items-center justify-items-center"
        >
          <a className="nav-link" href="#blogPage">
            <div className="border-wrapper b-btn-li-none">
              <div className="btn-li"></div>
            </div>
          </a>

          <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
            BLOG
          </div>
        </li> */}
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
