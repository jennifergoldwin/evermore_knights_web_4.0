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
    // { idx: 2, status: false },
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
      <div className="relative  bg-navbar flex justify-between items-center px-6 py-3 font-friz-bold w-full">
        <h1 className="logo main w-1/2 sm:w-1/3">
          <a href="#firstPage" title="evermore knights">
            <img src="/assets/images/logo.png" alt="evermore knights" />
          </a>
        </h1>
        <button
          onClick={() => setActive(!active)}
          className=" inline-flex  sm:hidden text-white outline-none"
        >
          {active ? <MdClose /> : <GiHamburgerMenu />}
        </button>
        <div className="hidden sm:flex" id="gnb w-1/3">
          <ul id="menu" className="flex justify-around gap-4">
            <li>
              <a
                className={`${
                  activeLink[0].status ? "active" : ""
                } header-link`}
                href="#gamePage"
                onClick={() => handleActiveLink(0)}
              >
                GAME INTRO
              </a>
            </li>
            <li>
              <a
                className={`${
                  activeLink[1].status ? "active" : ""
                } header-link`}
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
      <div
        className={`${active ? "flex" : "hidden"} bg-navbar w-full  flex-col`}
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
      </div>
    </header>
  );
};

export default Header;
