/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
interface Imodal {
  isShown: boolean;
  setIsShown: any;
  src: any;
  id: any;
}
const Modal: React.FC<Imodal> = ({ isShown, setIsShown, src, id }) => {
  React.useEffect(() => {
    handleClick();
  });

  const handleClick = () => {
    const video = document.getElementById(
      `video-modal-${id}`
    ) as HTMLVideoElement;
    // video.src = src;
    if (isShown) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div
      className={`${
        isShown ? "block" : "hidden"
      } absolute text-[#E6CD99] w-full h-full z-10 bg-[#1D1B1B] bg-opacity-[0.8] `}
      id="channelModal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isShown ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.8 }}
        className="h-full flex justify-center items-center flex-col"
      >
        <div className="w-[95%] h-auto lg:w-[60%] flex flex-col">
          <button
            onClick={() => {
              setIsShown(false);
              handleClick();
            }}
            type="button"
            className="float-right font-extrabold text-3xl grid justify-items-end"
            aria-label="Close"
          >
            <MdClose />
          </button>
          <div className="outer-video w-full h-full">
            <div className="absolute top-0 left-0 z-20">
              <img
                src="/assets/images/arrow.png"
                alt=""
                className="w-[40px] h-[40px] rotate-[315deg] p-2"
              />
            </div>
            <div className="absolute top-0 right-0 z-10">
              <img
                src="/assets/images/arrow.png"
                alt=""
                className="w-[40px] h-[40px] rotate-[45deg] p-2"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-10">
              <img
                src="/assets/images/arrow.png"
                alt=""
                className="w-[40px] h-[40px] rotate-[225deg] p-2"
              />
            </div>
            <div className="absolute bottom-0 right-0 z-10">
              <img
                src="/assets/images/arrow.png"
                alt=""
                className="w-[40px] h-[40px] rotate-[135deg] p-2"
              />
            </div>
            <video
              className="w-full h-full"
              preload="none"
              controls
              id={`video-modal-${id}`}
              src={src}
            />
          </div>

          {/* <div className="w-full relative pt-[48.25%] max-w-full">
            <iframe
              id="video-modal"
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full "
              src={`${src}`}
            ></iframe>
          </div> */}
          {/* <iframe
            className="responsive-iframe w-full h-[382px] left-0 top-[2px]"
            loading="lazy"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
