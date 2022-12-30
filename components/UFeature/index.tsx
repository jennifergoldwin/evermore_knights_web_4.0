/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const UFeature = () => {
  const tabs = [
    {
      bg: "bg-nft-char",
      img: "/assets/images/nft-char.png",
      label: "NFT CHARACTER",
    },
    {
      bg: "bg-nft-weapon",
      img: "/assets/images/nft-weapon.png",
      label: "NFT WEAPON",
    },
  ];
  const [selectedTab, setSelectedTab] = React.useState(0);
  //   console.log(`ss ${tabs.indexOf(selectedTab)}`);
  return (
    <div
      className={`${tabs[selectedTab].bg} w-full flex justify-center items-center flex-col`}
    >
      <div className="border-b-[1.5pt] border-underline w-fit mt-[100px] mb-8  text-xl">
        <ul className="flex gap-4">
          {tabs.map((item: any, idx: number) => (
            <li
              key={item.label}
              className={`${
                idx === selectedTab
                  ? "font-friz-bold title-text"
                  : "font-friz-regular"
              } ${
                idx == 0
                  ? "border-r-[1.5pt] pr-4 border-gradient-underline"
                  : ""
              } my-2`}
              onClick={() => {
                setSelectedTab(idx),
                  console.log(idx),
                  console.log(tabs[selectedTab].bg);
              }}
            >
              {`${item.label}`}

              {idx === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        <motion.div
          className="flex items-center justify-center flex-col pb-4"
          key={selectedTab ? tabs[selectedTab].label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <img src={tabs[selectedTab].img} alt="" />
          <span className="text-center w-[65%] font-lato font-[400] pb-4">
            Every weapon will be unique in both appearance and attributes. Build
            them as you wish to better assist you in your adventure!
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default UFeature;
