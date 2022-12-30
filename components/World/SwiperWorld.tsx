/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from "swiper/react";
interface ISwiperWorld {
  isShownModal: boolean;
  setIsShown: any;
  idx: number;
}
const worldList = [
  {
    flag: "/assets/images/arriane-flag.png",
    url: "/assets/images/arriane.png",
    title: "Arriane",
    subtitle: "Land of Endless Meadow",
    desc: "Out of all the first gods there stands a fair maiden of the skies, her eyes were emerald and her hair was as gold as the sun. Her beauty was unparalleled and often made the other gods jealous. She is named Reya, and her celestial title is Arriane, which means blissful winds. She’s often seen soaring the sky, her domain, with her wings stretched far and wide. Her glee is apparent, it is her favorite thing to do. As she greeted the blue skies, and the wind blew through her face, it was like freedom to the fullest. That feeling resonated to her very being. She wanted to share it with the inhabitants of Temeris.",
  },
  {
    flag: "/assets/images/yanshu-flag.png",
    url: "/assets/images/yanshu.png",
    title: "Yanshu",
    subtitle: "Land of Commerce",
    desc: "Yanshu is the nation of highlands and mountainous ranges, where the peaks are said to grace the celestial skies. Dao Yanshu was the First God that founded the land. He believed order and control as a divine purpose given by the Emissaries. Thus, he dedicated his life solely to govern the people of his land. Out of all the First Gods, he’s rarely seen outside of his land, except for the purpose to represent his people. Yanshu, a celestial title sung out by the emissaries during the world's creation, was meant to be a symbol of order and control. He created his government on the highest peak of the mountains and beyond the layers of rocky spires. Undisturbed from outside influence and govern the people with pure conviction. He appointed a seer and granted her the power of divinity to help him in the matters of governance and decisions. Hence the seer spoke on his behalf and greeted the common folks.",
  },
  {
    flag: "/assets/images/sanahara-flag.png",
    url: "/assets/images/sanahara.png",
    title: "Sanahara",
    subtitle: "Land of the Erudite",
    desc: "Faer Sanahara always strived for the truth. He was made by the heavenly emissaries from the very flames that formed the Stars of Salvation. He's always been curious about the world around him, always mystified by its intricacies and form. He found the desert to be quite perplexing and felt comfortable below the blazing sun. With that, his determination to bring abundance to a barren sandy land made him resourceful, and cunning. Like the other Gods, Faer decided with absolute certainty that he would govern these lands and bring them to life. When other gods doubted that no people of Temeris would be able to live in such harsh conditions, he thought of that as a challenge. He believed that with his wit and his cunningness, anything can be made to happen. He would then strive to build a massive civilization among the desert known today as Sanahara.",
  },
  {
    flag: "/assets/images/zanto-flag.png",
    url: "/assets/images/zanto.png",
    title: "Zanto",
    subtitle: "Land of Endless Meadow",
    desc: "Iei Zanto isn't known for her patience nor is she shameful about it. Despite ruling over the smallest nation in Temeris, she still stands tall and proud. Many had tried to invade and claim her nation, including other nations during the conflict, but she stood her ground with her people and fought off all who dared stand against her and her domain. She holds everything she has dearly and protects them all from harm. Indeed the people of Zanto love their goddess very much. This includes the Kami and the Yokai, which are the local Aeons of Zanto. Despite their differences and origins, they adopted Iei as one of their own.",
  },
  {
    flag: "/assets/images/grandar-flag.png",
    url: "/assets/images/grandar.png",
    title: "Grandar",
    subtitle: "Land of the Pioneers",
    desc: "Varo was an adventurous young God. He traveled the oceans of Temeris in search of purpose. Perhaps he felt the need to explore the grand blue horizons which he always adored upon his creation. He wanted it all, and in a sense, he could have it all. He believed that mastery over the waters themselves gives him total control over the world. His responsibilities however are bigger than most, hence, to many, he was the strongest out of all the first essential gods. He continued to traverse throughout the seas, from the sheer cold waters of Faringrad, to the strange dark oceans of Zanto. From the unnamed islands of the outermost Yanshu to the fertile shorelines of Sanahara. He’s seen them all. Not just the lands, but also the turmoil and politics of each and every nation. He scoffed at them, his very brothers and sisters all wasting away in the matters of mortals.",
  },
  {
    flag: "/assets/images/valensia-flag.png",
    url: "/assets/images/valensia.png",
    title: "Valensia",
    subtitle: "The Eden of Temeris",
    desc: "Lucia only liked beautiful things. Born from the first flower of the heavenly garden, she was keen on staying until the Emissaries created Temeris. When she was sent to the new world, she was dismayed. What could a floating rock offer? Atyla, the God of Light and creation, approached and cheered for her. She gave her the idea that she could also make Temeris beautiful if she wanted it. After seeing Temeris, traveling thoroughly with her brother, Faer. She admitted she was wrong. Temeris might be a floating rock, but it was a floating rock filled with many possibilities. It accepted Atyla’s power meant the world was actually worth something. It’s not the heavens, but they could still make it like one. She vowed to bring the heavenly garden from to this world, creating the Elysium of Temeris.",
  },
  {
    flag: "/assets/images/faringrad-flag.png",
    url: "/assets/images/faringrad.png",
    title: "Faringrad",
    subtitle: "Land of Pious Sorcery",
    desc: "Prana took comfort in cold and darkness, in which the void was where she belonged. When the Emissaries created Temeris out of the stars, she wished to not partake in such a celebration of life. But the only other being she knew, the Lord of Darkness himself, had compelled her. He said this new world required balance. Where there’s light, there’s dark. The new world needed him. Where the darkness goes, she follows. The Lord of Darkness and the Mistress of Night delivered their duty of death and destruction. At first, she hated it. It was, after all, a duty to do. The creatures of Temeris should have been grateful for being graced by their presence, for death was a gift for their otherwise meaningless life. The darkness was what they should bow with fear and not the bogus light. Then she saw it as an opportunity. Since it was their duty to kill, she would gladly do it.",
  },
];
const SwiperWorld: React.FC<ISwiperWorld> = ({
  isShownModal,
  setIsShown,
  idx,
}) => {
  const [swiper, setSwiper] = React.useState(useSwiper());
  React.useEffect(() => {
    if (swiper != null) {
      swiper.slideTo(idx, 1);
    }
  }, [idx, swiper]);

  return (
    <div
      //   onClick={}
      className={`${
        isShownModal ? "" : "hidden"
      } w-full h-full absolute bg-[#1D1B1B] bg-opacity-[0.8]  flex justify-center items-center flex-col overflow-hidden`}
    >
      <Swiper
        modules={[Navigation]}
        initialSlide={3}
        slidesPerView={1}
        allowTouchMove={false}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <div className="swiper-button-prev !left-[10%]">
          <img src="/assets/images/arrow-left.png" />
        </div>

        <div className="swiper-button-next !right-[10%]">
          <img src="/assets/images/arrow-right.png" />
        </div>
        {worldList.map((item) => (
          <SwiperSlide className="flex justify-center" key={item.title}>
            <div className="h-full w-fit flex justify-center items-center flex-col">
              <div className="bg-[url(/assets/images/bg-swiper-world.png)] bg-center bg-cover relative flex flex-col w-fit">
                <img
                  src={item.flag}
                  alt=""
                  className="absolute left-[-11%] top-[-11%]"
                />
                <div className="w-[695px] p-8">
                  <img src={item.url} alt="arriane" />
                  <div className=" flex flex-col justify-center items-center text-center">
                    <h1 className="font-friz-bold text-xl text-black">
                      {item.title}
                    </h1>
                    <span className="font-friz-medium text-sm text-black">
                      {item.subtitle}
                    </span>
                    <p className="font-lato text-xs text-black text-opacity-[0.5]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="text-white text-center font-lato font-[700] cursor-pointer py-4"
                onClick={() => setIsShown(false)}
              >
                Tap to close
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperWorld;
