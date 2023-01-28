/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Modal from "./Modal";
const worldMobList = [
  {
    url: "/assets/images/arriane-flag-mob.png",
    title: "Arriane",
    subtitle: "Land of Endless Meadow",
    urlModal: "/assets/images/arriane.png",
    desc: "Out of all the first gods there stands a fair maiden of the skies, her eyes were emerald and her hair was as gold as the sun. Her beauty was unparalleled and often made the other gods jealous. She is named Reya, and her celestial title is Arriane, which means blissful winds. She’s often seen soaring the sky, her domain, with her wings stretched far and wide. Her glee is apparent, it is her favorite thing to do. As she greeted the blue skies, and the wind blew through her face, it was like freedom to the fullest. That feeling resonated to her very being. She wanted to share it with the inhabitants of Temeris.",
  },
  {
    url: "/assets/images/yanshu-flag-mob.png",
    title: "Yanshu",
    subtitle: "Land of Commerce",
    urlModal: "/assets/images/yanshu.png",
    desc: "Yanshu is the nation of highlands and mountainous ranges, where the peaks are said to grace the celestial skies. Dao Yanshu was the First God that founded the land. He believed order and control as a divine purpose given by the Emissaries. Thus, he dedicated his life solely to govern the people of his land. Out of all the First Gods, he’s rarely seen outside of his land, except for the purpose to represent his people. Yanshu, a celestial title sung out by the emissaries during the world's creation, was meant to be a symbol of order and control. He created his government on the highest peak of the mountains and beyond the layers of rocky spires. Undisturbed from outside influence and govern the people with pure conviction. He appointed a seer and granted her the power of divinity to help him in the matters of governance and decisions. Hence the seer spoke on his behalf and greeted the common folks.",
  },
  {
    url: "/assets/images/sanahara-flag-mob.png",
    title: "Sanahara",
    subtitle: "Land of the Erudite",
    urlModal: "/assets/images/sanahara.png",
    desc: "Faer Sanahara always strived for the truth. He was made by the heavenly emissaries from the very flames that formed the Stars of Salvation. He's always been curious about the world around him, always mystified by its intricacies and form. He found the desert to be quite perplexing and felt comfortable below the blazing sun. With that, his determination to bring abundance to a barren sandy land made him resourceful, and cunning. Like the other Gods, Faer decided with absolute certainty that he would govern these lands and bring them to life. When other gods doubted that no people of Temeris would be able to live in such harsh conditions, he thought of that as a challenge. He believed that with his wit and his cunningness, anything can be made to happen. He would then strive to build a massive civilization among the desert known today as Sanahara.",
  },
  {
    url: "/assets/images/zanto-flag-mob.png",
    title: "Zanto",
    subtitle: "Land of Endless Meadow",
    urlModal: "/assets/images/zanto.png",
    desc: "Iei Zanto isn't known for her patience nor is she shameful about it. Despite ruling over the smallest nation in Temeris, she still stands tall and proud. Many had tried to invade and claim her nation, including other nations during the conflict, but she stood her ground with her people and fought off all who dared stand against her and her domain. She holds everything she has dearly and protects them all from harm. Indeed the people of Zanto love their goddess very much. This includes the Kami and the Yokai, which are the local Aeons of Zanto. Despite their differences and origins, they adopted Iei as one of their own.",
  },
  {
    url: "/assets/images/grandar-flag-mob.png",
    title: "Grandar",
    subtitle: "Land of the Pioneers",
    urlModal: "/assets/images/grandar.png",
    desc: "Varo was an adventurous young God. He traveled the oceans of Temeris in search of purpose. Perhaps he felt the need to explore the grand blue horizons which he always adored upon his creation. He wanted it all, and in a sense, he could have it all. He believed that mastery over the waters themselves gives him total control over the world. His responsibilities however are bigger than most, hence, to many, he was the strongest out of all the first essential gods. He continued to traverse throughout the seas, from the sheer cold waters of Faringrad, to the strange dark oceans of Zanto. From the unnamed islands of the outermost Yanshu to the fertile shorelines of Sanahara. He’s seen them all. Not just the lands, but also the turmoil and politics of each and every nation. He scoffed at them, his very brothers and sisters all wasting away in the matters of mortals.",
  },
  {
    url: "/assets/images/valensia-flag-mob.png",
    title: "Valensia",
    subtitle: "The Eden of Temeris",
    urlModal: "/assets/images/valensia.png",
    desc: "Lucia only liked beautiful things. Born from the first flower of the heavenly garden, she was keen on staying until the Emissaries created Temeris. When she was sent to the new world, she was dismayed. What could a floating rock offer? Atyla, the God of Light and creation, approached and cheered for her. She gave her the idea that she could also make Temeris beautiful if she wanted it. After seeing Temeris, traveling thoroughly with her brother, Faer. She admitted she was wrong. Temeris might be a floating rock, but it was a floating rock filled with many possibilities. It accepted Atyla’s power meant the world was actually worth something. It’s not the heavens, but they could still make it like one. She vowed to bring the heavenly garden from to this world, creating the Elysium of Temeris.",
  },
  {
    url: "/assets/images/faringrad-flag-mob.png",
    title: "Faringrad",
    subtitle: "Land of Pious Sorcery",
    urlModal: "/assets/images/faringrad.png",
    desc: "Prana took comfort in cold and darkness, in which the void was where she belonged. When the Emissaries created Temeris out of the stars, she wished to not partake in such a celebration of life. But the only other being she knew, the Lord of Darkness himself, had compelled her. He said this new world required balance. Where there’s light, there’s dark. The new world needed him. Where the darkness goes, she follows. The Lord of Darkness and the Mistress of Night delivered their duty of death and destruction. At first, she hated it. It was, after all, a duty to do. The creatures of Temeris should have been grateful for being graced by their presence, for death was a gift for their otherwise meaningless life. The darkness was what they should bow with fear and not the bogus light. Then she saw it as an opportunity. Since it was their duty to kill, she would gladly do it.",
  },
];
const SwiperWorldMob = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="h-full bg-popup-world">
      <Swiper
        modules={[Navigation, Pagination]}
        id="swiperWorldMob"
        slidesPerView={1}
        allowTouchMove
        pagination={{
          el: ".swiper-pagination-sw-mob",
          clickable: true,
          renderBullet(index, className) {
            return (
              '<div class="' +
              className +
              '">' +
              '<div class="sw-pagi-b btn-li-sw--mob">' +
              '<div class="sw-pagi">' +
              "</div></div></div>"
            );
          },
        }}
      >
        {worldMobList.map((item: any, index: number) => (
          <SwiperSlide
            onClick={() => setShowModal(!showModal)}
            key={index + 1}
            className="h-full flex justify-center items-center"
          >
            <div className="text-center flex justify-center items-center flex-col relative">
              <h1 className="title-feature font-friz-bold text-4xl">
                {item.title}
              </h1>
              <span className="font-friz-regular">{item.subtitle}</span>
              <svg
                width="28"
                height="16"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75349 6.58999L4.94197 4.77649L2 7.72167L5.38432 11.1027L14.484 2L19.0058 6.53376"
                  stroke="#B59E78"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M21.9555 9.41502L23.767 11.2285L26.709 8.29036L23.3246 4.90234L14.2319 14.012L9.70312 9.47828"
                  stroke="#B59E78"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M17.3283 8.00347L14.3594 5.03125L11.3904 8.00347L14.3594 10.9757L17.3283 8.00347Z"
                  stroke="#B59E78"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>

              <img src={item.url} alt="" />
              <div className="flex justify-center items-center font-friz-medium text-sm cursor-pointer">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8.5"
                    y="0.381282"
                    width="11.4816"
                    height="11.4816"
                    transform="rotate(45 8.5 0.381282)"
                    stroke="white"
                    strokeWidth="0.539214"
                  />
                  <rect
                    x="8.5"
                    y="3.62891"
                    width="6.89883"
                    height="6.89883"
                    transform="rotate(45 8.5 3.62891)"
                    fill="white"
                  />
                </svg>
                <span className="pl-1">Tap to see the full info</span>
              </div>
              <div className="absolute bottom-0 ">
                <Modal
                  setShowModal={setShowModal}
                  showModal={showModal}
                  url={item.urlModal}
                  desc={item.desc}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination swiper-pagination-sw-mob" />
    </div>
  );
};

export default SwiperWorldMob;
