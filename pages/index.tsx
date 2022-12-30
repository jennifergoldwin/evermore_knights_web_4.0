import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Characters from "../components/Characters";
import Feature from "../components/Feature";
import UFeature from "../components/UFeature";
import World from "../components/World";
import Story from "../components/Story";
import HomePage from "../components/Home";
import Blog from "../components/Blog";
import $ from "jquery";

export default function Home() {
  const [indexSection, setIndexSection] = React.useState(0);
  const myPage = {
    // Scroll to the block
    scrollThere: function (targetElement: any, speed: any) {
      var _self = this;
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: targetElement.offset().top,
          },
          {
            duration: speed,
            complete: function () {
              _self.setViewportClasses(); // On complete set viewport classes
            },
          }
        );
    },

    //Check if element is in the viewport
    isInViewport: function (element: any) {
      console.log(element);
      var _self = this;
      // check for the section which is the main currently
      var elementMiddle = element.offset().top + element.outerHeight() / 2;
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop! + $(window).height()!;
      return elementMiddle > viewportTop! && elementMiddle < viewportBottom;
    },

    // Set classes for the current element, prev and next
    setViewportClasses: function () {
      var _self = this;
      // add classes for main, prev and next sections
      $(".inView").removeClass("inView");
      $(".prev-inView").removeClass("prev-inView");
      $(".next-inView").removeClass("next-inView");
      $(".section").each(function (i: any, obj: any) {
        if (_self.isInViewport($(this))) {
          $(this).addClass("inView");
          if ($(this).prev()) $(this).prev().addClass("prev-inView");
          if ($(this).next()) $(this).next().addClass("next-inView");
          return false;
        }
      });

      // Make colors darker
      // $(".inView").css("opacity", "1");
      // $(".prev-inView").css("opacity", "0.3");
      // $(".next-inView").css("opacity", "0.3");
    },

    initEvents: function () {
      var _self = this;

      $(window)
        .off()
        .on("wheel", function (e: any) {
          e.preventDefault;
          if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            //scroll up
            if ($(".prev-inView").length > 0)
              _self.scrollThere($(".prev-inView"), 500);
          } else {
            //scroll down
            if ($(".next-inView").length > 0)
              _self.scrollThere($(".next-inView"), 500);
          }
        });
    },

    init: function () {
      var _self = this;
      _self.setViewportClasses();
      _self.initEvents();
    },
  };

  React.useEffect(() => {
    myPage.init();
  }, []);
  return (
    <>
      <div>
        <Head>
          <title>Evermore Knights</title>
          <meta name="description" content="Evermore Knights version 4.0" />
          <link rel="icon" href="/logo-ek.ico" />
        </Head>

        <Header />
        <Navbar />

        <div className="fullPage-wrapper">
          <section className="section">
            <HomePage />
          </section>
          <section className="section">
            <Story />
          </section>
          <section className="section">
            <About />
          </section>

          <section className="section">
            <Characters />
          </section>
          <section className="section">
            <UFeature />
          </section>
          <section className="section">
            <World />
          </section>
          <section className="section">
            <Feature />
          </section>
          <section className="section">
            <Blog title="LATEST NEWS" isAvailNewsPage />
          </section>
        </div>
      </div>
    </>
  );
}
