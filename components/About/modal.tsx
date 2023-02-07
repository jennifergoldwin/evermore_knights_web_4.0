import React from "react";
import { MdClose } from "react-icons/md";
interface Imodal {
  isShown: boolean;
  setIsShown: any;
  src: any;
}
const Modal: React.FC<Imodal> = ({ isShown, setIsShown, src }) => {
  return (
    <div
      className={`${
        isShown ? "block" : "hidden"
      } absolute text-[#E6CD99] w-full h-full z-10 bg-[#1D1B1B] bg-opacity-[0.8] `}
      id="channelModal"
    >
      <div className="h-full flex justify-center items-center flex-col">
        <div className="w-full flex flex-col">
          <button
            onClick={() => setIsShown(false)}
            type="button"
            className="float-right font-bold text-2xl grid justify-items-end"
            aria-label="Close"
          >
            <MdClose />
          </button>
          <div
            className="w-full relative pt-[56.25%] max-w-full"
            // onClick={() => setIsShown(true)}
          >
            <iframe
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full "
              src={`${src}`}
            ></iframe>
          </div>
          {/* <iframe
            className="responsive-iframe w-full h-[382px] left-0 top-[2px]"
            loading="lazy"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
