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
import $ from "jquery";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
import Modal from "../components/About/modal";
import { addFullPageApi, modalReducer } from "../context/reducer";
import { initialModalState } from "../context/state";
import { ModalContext } from "../context/ModalContext";
declare global {
  interface Window {
    fullpage_api: any;
  }
}
export default function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  });
  const anchors = [
    "homePage",
    "storyPage",
    "aboutPage",
    "characterPage",
    "uFeaturePage",
    "worldPage",
    "featurePage",
    "lastPage",
  ];
  const [state, dispatch] = React.useReducer(modalReducer, initialModalState);
  const [isShown, setIsShown] = React.useState(false);

  return (
    <>
      <ModalContext.Provider value={{ state, dispatch }}>
        <Head>
          <title>Evermore Knights</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no ,viewport-fit=cover"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="description" content="Evermore Knights version 4.0" />
          <link rel="icon" href="/logo-ek.ico" />
        </Head>

        <Navbar />
        <ReactFullpage
          scrollOverflow={false}
          lazyLoading={true}
          anchors={anchors}
          menu="#menu"
          css3
          afterRender={() => {
            dispatch(addFullPageApi(window.fullpage_api));
          }}
          afterLoad={(destination) => {
            let header = document.getElementById("header-top") as HTMLElement;
            let arrow = document.getElementById("explore-arrow") as HTMLElement;
            let menu = document.querySelectorAll(
              ".nav-burger"
            ) as NodeListOf<HTMLElement>;
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
              <div
                className="ek section about"
                id="panel3"
                data-anchor="aboutPage"
              >
                <About setIsShown={setIsShown} />
              </div>
              <div
                className="ek section character"
                id="panel4"
                data-anchor="characterPage"
              >
                <Characters setIsShown={setIsShown} />
              </div>
              <div
                className="ek section"
                id="panel5"
                data-anchor="uFeaturePage"
              >
                <UFeature />
              </div>
              <div
                className="ek section world"
                id="panel6"
                data-anchor="worldPage"
              >
                <World />
              </div>
              <div
                className="ek feature section"
                id="panel7"
                data-anchor="featurePage"
              >
                <Feature />
              </div>
              {/* <div className="ek section" id="panel8" data-anchor="blogPage">
                <Blog title="LATEST NEWS" isAvailNewsPage />
                
              </div> */}
              <div
                className="section fp-auto-height lastPage"
                data-anchor="lastPage"
              >
                <Footer fullpageApi={fullpageApi} />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
        <Modal
          fullpageApi={state.fullpageApi}
          id="modal"
          isShown={isShown}
          setIsShown={setIsShown}
          // src="https://www.youtube-nocookie.com/embed/-ERMKXPYQl4"
          src={state.srcVideo}
        />
      </ModalContext.Provider>
    </>
  );
}
