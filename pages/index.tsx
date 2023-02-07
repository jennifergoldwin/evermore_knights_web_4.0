/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { ReactElement } from "react";
import "swiper/css";
import "swiper/css/pagination";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Characters from "../components/Characters";
import Feature from "../components/Feature";
import UFeature from "../components/UFeature";
import World from "../components/World";
import Story from "../components/Story";
import HomePage from "../components/Home";
import Blog from "../components/Blog";
import $ from "jquery";
import { myPage } from "../service";
import Layout from "../components/Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
export default function Home() {
  const navbar_hidden = {
    rest: {
      display: "block",
    },
    play: {
      display: "none",
      transition: {
        type: "spring",
        duration: 1.4,
        ease: "easeIn",
      },
    },
  };

  function isScrolledIntoView(elem: any) {
    var $elem = $(elem);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop! + $window.height()!;

    var elemTop = $elem.offset()!.top;
    var elemBottom = elemTop + $elem.height()!;

    return elemBottom <= docViewBottom && elemTop >= docViewTop!;
  }

  // React.useEffect(() => {
  //   if (homeVisible) {
  //     (document.getElementById("panel1") as HTMLElement).style.visibility =
  //       "visible";
  //     (document.getElementById("panel2") as HTMLElement).style.visibility =
  //       "hidden";
  //   } else if (!homeVisible) {
  //     (document.getElementById("panel1") as HTMLElement).style.visibility =
  //       "hidden";
  //   }
  // }, [homeVisible]);

  // React.useEffect(() => {
  //   if (storyVisible) {
  //     (document.getElementById("panel2") as HTMLElement).style.visibility =
  //       "visible";
  //     console.log("story true");
  //   } else if (!storyVisible) {
  //     (document.getElementById("panel2") as HTMLElement).style.visibility =
  //       "hidden";
  //     console.log("story false");
  //   }
  // }, [storyVisible]);
  // React.useEffect(() => {
  //   const scrollFunc = () => {
  //     let sections = document.querySelectorAll(
  //       ".section"
  //     ) as NodeListOf<HTMLElement>;
  //     sections.forEach((element) => {
  //       if (isScrolledIntoView(element)) {
  //         element.style.visibility = "visible";
  //       } else {
  //         element.style.visibility = "hidden";
  //       }
  //     });
  //   };
  //   window.removeEventListener("scroll", scrollFunc);
  //   window.addEventListener("scroll", scrollFunc, { passive: true });
  //   return () => window.removeEventListener("scroll", scrollFunc);
  // }, []);

  React.useEffect(() => {
    let menu = document.querySelectorAll(
      ".nav-burger"
    ) as NodeListOf<HTMLElement>;
    let arrow = document.getElementById("explore-arrow") as HTMLElement;
    let header = document.getElementById("header-top") as HTMLElement;

    if (window.location.href.includes("#homePage")) {
      menu[0].classList.add("black");
      menu[1].classList.add("black");
      arrow.classList.remove("hidden");
      header.classList.add("!hidden");
    } else if (
      window.location.href.includes("#storyPage") ||
      window.location.href.includes("#aboutPage") ||
      window.location.href.includes("#characterPage") ||
      window.location.href.includes("#uFeaturePage") ||
      window.location.href.includes("#worldPage") ||
      window.location.href.includes("#featurePage")
    ) {
      menu[0].classList.remove("black");
      menu[1].classList.remove("black");
      arrow.classList.add("hidden");
      header.classList.remove("!hidden");
    } else {
      menu[0].classList.add("black");
      menu[1].classList.add("black");
      arrow.classList.remove("hidden");
      header.classList.add("!hidden");
    }
  }, []);
  const anchors = [
    "homePage",
    "storyPage",
    "aboutPage",
    "characterPage",
    "uFeaturePage",
    "worldPage",
    "featurePage",
  ];

  return (
    <>
      <div>
        <Head>
          <title>Evermore Knights</title>
          <meta name="description" content="Evermore Knights version 4.0" />
          <link rel="icon" href="/logo-ek.ico" />
        </Head>

        <Navbar />
        <ReactFullpage
          scrollOverflow
          lazyLoading
          anchors={anchors}
          menu="#menu"
          css3
          afterLoad={(destination) => {
            let header = document.getElementById("header-top") as HTMLElement;
            let arrow = document.getElementById("explore-arrow") as HTMLElement;
            let menu = document.querySelectorAll(
              ".nav-burger"
            ) as NodeListOf<HTMLElement>;
            let game = document.querySelector(
              ".header-link.game"
            ) as HTMLElement;

            // let blog = document.querySelector(
            //   ".header-link.blog"
            // ) as HTMLElement;
            if (window.location.href.includes("#homePage")) {
              game.classList.remove("active");
              // blog.classList.remove("active");
            } else {
              game.classList.add("active");
            }

            // if (window.location.href.includes("#blogPage")) {
            //   game.classList.remove("active");
            //   blog.classList.add("active");
            // }
            if (window.location.href.includes("#homePage")) {
              header.classList.add("!hidden");
              arrow.classList.remove("hidden");
              menu[0].classList.add("black");
              menu[1].classList.add("black");
            } else {
              header.classList.remove("!hidden");
              arrow.classList.add("hidden");
              menu[0].classList.remove("black");
              menu[1].classList.remove("black");
            }
          }}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="ek section" id="panel1" data-anchor="homePage">
                <HomePage fullpageApi={fullpageApi} />
              </div>
              <div className="ek section" id="panel2" data-anchor="storyPage">
                <Story />
              </div>
              <div className="ek section" id="panel3" data-anchor="aboutPage">
                <About />
              </div>
              <div
                className="ek section"
                id="panel4"
                data-anchor="characterPage"
              >
                <Characters />
              </div>
              <div
                className="ek section"
                id="panel5"
                data-anchor="uFeaturePage"
              >
                <UFeature />
              </div>
              <div className="ek section" id="panel6" data-anchor="worldPage">
                <World />
              </div>
              <div className="ek section" id="panel7" data-anchor="featurePage">
                <Feature />
                <Footer fullpageApi={fullpageApi} />
              </div>
              {/* <div className="ek section" id="panel8" data-anchor="blogPage">
                <Blog title="LATEST NEWS" isAvailNewsPage />
                
              </div> */}
              {/* <div className="w-full section lastPage fp-auto-height"></div> */}
            </ReactFullpage.Wrapper>
          )}
        />
        {/* <div className="fullPage-wrapper relative">
          <div
            className="fp-section section relative active"
            id="panel1"
            ref={homeRef}
          >
            <a id="homePage"></a>
            <HomePage />
          </div>
          <div className="fp-section section" id="panel2" ref={storyRef}>
            <a id="storyPage"></a>
            <Story />
          </div> */}
        {/* <div className="section" id="panel3">
            <a id="aboutPage"></a>
            <About />
          </div>

          <div className="section" id="panel4">
            <a id="characterPage"></a>
            <Characters />
          </div>
          <div className="section" id="panel5">
            <a id="uFeaturePage"></a>
            <UFeature />
          </div>
          <div className="section" id="panel6">
            <a id="worldPage"></a>
            <World />
          </div>
          <div className="section" id="panel7">
            <a id="featurePage"></a>
            <Feature />
          </div>
          <div className="section" id="panel8">
            <a id="blogPage"></a>
            <Blog title="LATEST NEWS" isAvailNewsPage />
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
