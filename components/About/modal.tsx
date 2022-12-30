import React from "react";
import { MdClose } from "react-icons/md";
interface Imodal {
  isShown: boolean;
  setIsShown: any;
}
const Modal: React.FC<Imodal> = ({ isShown, setIsShown }) => {
  return (
    <div
      className={`${
        isShown ? "block" : "hidden"
      } absolute text-[#E6CD99] w-full h-full z-10 bg-[#1D1B1B] bg-opacity-[0.8] `}
      id="channelModal"
    >
      <div className="h-full flex justify-center items-center flex-col">
        <div>
          <button
            onClick={() => setIsShown(false)}
            type="button"
            className="float-right font-bold text-2xl"
            aria-label="Close"
          >
            <MdClose />
          </button>
          <iframe
            className="responsive-iframe w-[710px] h-[382px] left-0 top-[2px]"
            loading="lazy"
            src="https://www.youtube.com/embed/GBZBlU7Bsyc?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
