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
import { RiInstagramFill } from "react-icons/ri";
import { CgMenu } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import logo from "../../public/assets/images/logo.png";
import Image from "next/image";
const Header = () => {
  const [active, setActive] = React.useState(false);
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
  return (
    <header className="opacity-100 fixed w-full top-0 z-40">
      <div
        id="header-top"
        className=" hidden lg:flex relative  bg-navbar  justify-between items-center px-6 py-3 font-friz-bold w-full"
      >
        <h1 className="hidden sm:flex logo main w-1/2 sm:w-1/3">
          <a
            href="#homePage"
            title="Evermore Knights"
            className="cursor-pointer"
          >
            <Image src={logo} alt="evermore knights" />
          </a>
        </h1>
        <div className="hidden sm:flex">
          <ul id="menu" className="flex justify-around gap-4">
            <li data-menuanchor="storyPage" id="story">
              <a
                className="header-link game"
                href="#storyPage"
                onClick={() => handleActiveLink(0)}
              >
                GAME INTRO
              </a>
            </li>
            {/* <li dadata-menuanchor="blogPage">
              <a
                className="header-link blog"
                href="#blogPage"
                onClick={() => handleActiveLink(1)}
              >
                BLOG
              </a>
            </li> */}
          </ul>
        </div>
        <div className="sosmed_wrapper hidden sm:flex gap-1 w-1/3 justify-end items-center">
          <a
            href="https://www.facebook.com/EvermoreKnightsOfficial"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://twitter.com/EvermoreKnights"
            target="_blank"
            rel="noreferrer"
            className="btn-footer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://discord.com/invite/evermoreknights"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <FaDiscord />
          </a>

          <a
            href="https://www.instagram.com/evermore.knights/"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.tiktok.com/@evermoreknights"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
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
      {/* mobile view */}
      <div className="relative block lg:hidden">
        <input
          className="nav-burger black"
          type="checkbox"
          name="toggle-nav"
          onClick={() => setActive(!active)}
        />
        <label htmlFor="toggle-nav" className="nav-burger black">
          {active ? (
            <MdClose className="text-2xl" />
          ) : (
            <CgMenu className="text-3xl" />
          )}
          {/* <span className="menu-icon"></span> */}
        </label>
        <section className={`${active ? "flex" : "hidden"} side-nav-panel`}>
          <ul id="menu" className="py-2">
            <a href="#homePage">
              <li
                data-menuanchor="homePage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li">
                    <div className="btn-li"></div>
                  </div>
                </div>
                {/* desc navbar */}
                <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
                  HOME
                </div>
              </li>
            </a>
            <a href="#storyPage">
              <li
                data-menuanchor="storyPage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>
                <div className=" font-friz-bold  justify-self-start -ml-3 nav-title">
                  STORY
                </div>
              </li>
            </a>

            <a href="#aboutPage">
              <li
                data-menuanchor="aboutPage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>
                <div className=" font-friz-bold  justify-self-start -ml-3 nav-title">
                  ABOUT
                </div>
              </li>
            </a>

            <a href="#characterPage">
              <li
                data-menuanchor="characterPage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>
                <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
                  CHARACTER
                </div>
              </li>
            </a>

            <a href="#uFeaturePage">
              <li
                data-menuanchor="uFeaturePage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>
                <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
                  UNIQUE FEATURE
                </div>
              </li>
            </a>

            <a href="#worldPage">
              <li
                data-menuanchor="worldPage"
                className="sub_nav mob flex gap-8  items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>
                <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
                  WORLD MAP
                </div>
              </li>
            </a>

            <a href="#featurePage">
              <li
                data-menuanchor="featurePage"
                className="sub_nav mob flex gap-8 items-center justify-items-center"
              >
                <div className="nav-link">
                  <div className="border-wrapper b-btn-li-none">
                    <div className="btn-li"></div>
                  </div>
                </div>

                <div className="font-friz-bold  justify-self-start -ml-3 nav-title">
                  FEATURES
                </div>
              </li>
            </a>

            {/* <li
              data-menuanchor="blogPage"
              className="sub_nav mob flex gap-8 items-center justify-items-center"
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
          {/* <Navbar /> */}
          {/* <ul id="menu" className="py-2">
            <li
              onClick={() => handleActiveLink(0)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
             
              <div
                className={`${
                  activeLink[0].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                HOME
              </div>
            </li>

            <li
              onClick={() => handleActiveLink(1)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[1].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                STORY
              </span>
            </li>
            <li
              onClick={() => handleActiveLink(2)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[2].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                ABOUT
              </span>
            </li>
            <li
              onClick={() => handleActiveLink(3)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[3].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                CHARACTER
              </span>
            </li>
            <li
              onClick={() => handleActiveLink(4)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[4].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                UNIQUE FEATURE
              </span>
            </li>
            <li
              onClick={() => handleActiveLink(5)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[5].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                WORLD MAP
              </span>
            </li>
            <li
              onClick={() => handleActiveLink(6)}
              className="sub_nav mob flex gap-8  items-center justify-items-center"
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
              <span
                className={`${
                  activeLink[6].status
                    ? "showWhite text-xl"
                    : "showGrey text-lg"
                }  font-friz-bold  justify-self-start -ml-3`}
              >
                FEATURES
              </span>
            </li>
          </ul> */}
        </section>
      </div>
      {/* <div
        className={`${
          active ? "flex" : "hidden"
        } bg-navbar w-full h-full  flex-col`}
      >
        <div id="gnb">
          <ul
            id="menu"
            className="flex flex-col w-full justify-center items-center gap-4"
          >
            <li data-menuanchor="secondPage">
              <a
                className={`${
                  activeLink[0].status ? "active" : ""
                } header-link`}
                href="#secondPage"
                onClick={() => handleActiveLink(0)}
              >
                GAME INTRO
              </a>
            </li>
            <li data-menuanchor="thirdPage">
              <a
                className={`${
                  activeLink[1].status ? "active" : ""
                } header-link`}
                href="#thirdPage"
                onClick={() => handleActiveLink(1)}
              >
                BLOG
              </a>
            </li>
          </ul>
        </div>

        <div className="sosmed_wrapper grid grid-cols-3  justify-items-center">
          <a
            href="https://www.facebook.com/EvermoreKnightsOfficial"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://twitter.com/EvermoreKnights"
            target="_blank"
            rel="noreferrer"
            className="btn-footer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://discord.gg/evermoreknights"
            target="_blank"
            rel="noreferrer"
            className="btn-footer"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://www.instagram.com/evermore.knights/"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <FaDiscord />
          </a>

          <a
            href="https://www.tiktok.com/@evermoreknights"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.tiktok.com/@evermoreknights"
            rel="noreferrer"
            target="_blank"
            className="btn-footer"
          >
            <FaYoutube />
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
