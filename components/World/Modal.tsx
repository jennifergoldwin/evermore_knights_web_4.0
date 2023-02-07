/* eslint-disable @next/next/no-img-element */
import React from "react";
interface Imodal {
  url: string;
  desc: string;
  showModal: boolean;
  setShowModal: any;
}
const Modal: React.FC<Imodal> = ({ url, desc, showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className="bg-popup-world justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-6 max-w-3xl">
              {/*content*/}
              <div
                className=" shadow-lg relative flex flex-col w-full bg-[url(/assets/images/bg-modal-world-mob.png)] bg-top bg-no-repeat outline-none focus:outline-none"
                style={{ backgroundSize: "100% 100%" }}
              >
                <div className="relative p-6 flex-auto">
                  <img src={url} alt="" />
                  <p className="font-lato text-opacity-[0.5] text-black text-[0.6rem] sm:text-xs py-6">
                    {desc}
                  </p>
                </div>
              </div>

              <p className="text-[#FFFFFF] font-inter font-bold pt-2 cursor-pointer">
                Tap to close
              </p>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Modal;
