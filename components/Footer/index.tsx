/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full bg-[#1D1B1B] flex-col justify-center items-center gap-5 py-5 align-bottom">
      <div className="flex flex-col px-2 sm:px-0  mf:flex-row md:flex-row lg:flex-row">
        <img src="/assets/images/nomina.png" alt="" />
        <img src="/assets/images/muse.png" alt="" />
        <img src="/assets/images/creoengine.png" alt="" />
      </div>
      <p className="text-white text-opacity-50 w-[100%] px-4 sm:px-0 sm:w-[55%] text-center font-inter">
        © 2022 Nomina Games, Muse, Creo Engine and any associated logos are
        trademarks, service marks, and/or registered trademarks of Nomina Games
      </p>
      <img src="/assets/images/logo.png" alt="" />
      <span className="text-white text-opacity-50 font-inter">
        © 2022 Evermore Knights
      </span>
    </div>
  );
};

export default Footer;
