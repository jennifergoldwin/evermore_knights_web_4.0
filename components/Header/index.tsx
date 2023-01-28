/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
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
    <header className="opacity-100 fixed w-full top-0 z-10">
      <div
        id="header-top"
        className=" hidden sm:flex relative  bg-navbar  justify-between items-center px-6 py-3 font-friz-bold w-full"
      >
        <h1 className="hidden sm:flex logo main w-1/2 sm:w-1/3">
          <a href="#firstPage" title="evermore knights">
            <img src="/assets/images/logo.png" alt="evermore knights" />
          </a>
        </h1>
        <div className="hidden sm:flex">
          <ul id="menu" className="flex justify-around gap-4">
            <li data-menuanchor="storyPage">
              <a
                className="header-link game"
                href="#storyPage"
                onClick={() => handleActiveLink(0)}
              >
                GAME INTRO
              </a>
            </li>
            <li dadata-menuanchor="blogPage">
              <a
                className="header-link blog"
                href="#blogPage"
                onClick={() => handleActiveLink(1)}
              >
                BLOG
              </a>
            </li>
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
      </div>
      {/* mobile view */}
      <div className="relative block sm:hidden">
        <input
          type="checkbox"
          name="toggle-nav"
          onClick={() => setActive(!active)}
        />
        <label htmlFor="toggle-nav">
          {active ? (
            <MdClose className="text-2xl" />
          ) : (
            <GiHamburgerMenu className="text-2xl" />
          )}
          {/* <span className="menu-icon"></span> */}
        </label>
        <section className={`${active ? "flex" : "hidden"} side-nav-panel`}>
          <ul id="menu" className="py-2">
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
              {/* desc navbar */}
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
          </ul>
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
