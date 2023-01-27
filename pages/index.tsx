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

export default function Home() {
  React.useEffect(() => {
    myPage.init();
  }, []);

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

  // React.useEffect(() => {
  //   $(window).on("mousewheel", function (e: any) {
  //     // get Y-axis value of each div:

  //     var div1y = $("#panel1").offset()!.top,
  //       div2y = $("#panel2").offset()!.top,
  //       div3y = $("#panel3").offset()!.top,
  //       div4y = $("#panel4").offset()!.top,
  //       div5y = $("#panel5").offset()!.top,
  //       div6y = $("#panel6").offset()!.top,
  //       div7y = $("#panel7").offset()!.top,
  //       div8y = $("#panel8").offset()!.top,
  //       // get window's current scroll position:
  //       lastScrollTop = $(this).scrollTop(),
  //       // for getting user's scroll direction:
  //       scrollDirection,
  //       // for determining the previous and next divs to scroll to, based on lastScrollTop:
  //       targetUp,
  //       targetDown,
  //       // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
  //       targetElement;
  //     // get scroll direction:
  //     if (e.originalEvent.wheelDelta > 0) {
  //       scrollDirection = "up";
  //     } else if (e.originalEvent.wheelDelta <= 0) {
  //       scrollDirection = "down";
  //     } // end if

  //     // prevent default behavior (page scroll):
  //     e.preventDefault();

  //     // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  //     if (lastScrollTop === div1y) {
  //       targetUp = $("#panel1");
  //       targetDown = $("#panel2");
  //     } else if (lastScrollTop === div2y) {
  //       targetUp = $("#panel1");
  //       targetDown = $("#panel3");
  //     } else if (lastScrollTop === div3y) {
  //       targetUp = $("#panel2");
  //       targetDown = $("#panel4");
  //     } else if (lastScrollTop === div4y) {
  //       targetUp = $("#panel3");
  //       targetDown = $("#panel5");
  //     } else if (lastScrollTop === div5y) {
  //       targetUp = $("#panel4");
  //       targetDown = $("#panel6");
  //     } else if (lastScrollTop === div6y) {
  //       targetUp = $("#panel5");
  //       targetDown = $("#panel7");
  //     } else if (lastScrollTop === div7y) {
  //       targetUp = $("#panel6");
  //       targetDown = $("#panel8");
  //     } else if (lastScrollTop === div8y) {
  //       targetUp = $("#panel7");
  //       targetDown = $("#panel8");
  //     } else if (lastScrollTop! < div2y) {
  //       targetUp = $("#panel1");
  //       targetDown = $("#panel2");
  //     } else if (lastScrollTop! < div3y) {
  //       targetUp = $("#panel2");
  //       targetDown = $("#panel3");
  //     } else if (lastScrollTop! < div4y) {
  //       targetUp = $("#panel3");
  //       targetDown = $("#panel4");
  //     } else if (lastScrollTop! < div5y) {
  //       targetUp = $("#panel4");
  //       targetDown = $("#panel5");
  //     } else if (lastScrollTop! < div6y) {
  //       targetUp = $("#panel5");
  //       targetDown = $("#panel6");
  //     } else if (lastScrollTop! < div7y) {
  //       targetUp = $("#panel6");
  //       targetDown = $("#panel7");
  //     } else if (lastScrollTop! < div8y) {
  //       targetUp = $("#panel7");
  //       targetDown = $("#panel8");
  //     } else if (lastScrollTop! > div8y) {
  //       targetUp = $("#panel8");
  //       targetDown = $("#footer");
  //     } // end else if

  //     // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  //     if (scrollDirection === "down") {
  //       targetElement = targetDown;
  //     } else if (scrollDirection === "up") {
  //       targetElement = targetUp;
  //     } // end else if

  //     // scroll smoothly to the target element:
  //     scrollThere(targetElement, 400);
  //   });
  // });
  return (
    <>
      <div>
        <Head>
          <title>Evermore Knights</title>
          <meta name="description" content="Evermore Knights version 4.0" />
          <link rel="icon" href="/logo-ek.ico" />
        </Head>

        <Navbar />
        {/* <div className="section" id="panel1">
          <a id="homePage"></a>
          <HomePage />
        </div>
        <Page /> */}
        <div className="fullPage-wrapper">
          <div className="section" id="panel1">
            <a id="homePage"></a>
            <HomePage />
          </div>
          <div className="section" id="panel2">
            <a id="storyPage"></a>
            <Story />
          </div>
          <div className="section" id="panel3">
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
          </div>
        </div>
      </div>
    </>
  );
}
