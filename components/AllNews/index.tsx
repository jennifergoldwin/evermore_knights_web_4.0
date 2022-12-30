import React from "react";
const blogList = [
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    img: "/assets/images/content-blog.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
];
const AllNews = () => {
  return (
    <div className="bg-[#1D1B1B] ">
      <div className="w-full py-16 gap-8  relative bg-[url(/assets/images/bg-blog.png)] bg-top bg-cover flex flex-col justify-center pl-8 sm:pl-[100px]">
        <div className="flex flex-col justify-between items-center font-friz-bold">
          <h3 className="text-2xl">NEWS</h3>
          <h1 className="title-feature text-3xl">ALL NEWS</h1>
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
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M21.9555 9.41502L23.767 11.2285L26.709 8.29036L23.3246 4.90234L14.2319 14.012L9.70312 9.47828"
              stroke="#B59E78"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M17.3244 8.00347L14.3555 5.03125L11.3865 8.00347L14.3555 10.9757L17.3244 8.00347Z"
              stroke="#B59E78"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 justify-items-center">
          {blogList.map((item: any, index: number) => (
            <div className="w-[60%] flex flex-col" key={index + 1}>
              <img src={item.img} alt="" />
              <h2 className="text-ellipsis overflow-hidden whitespace-nowrap title-feature font-inter font-extrabold text-lg">
                {item.title}
              </h2>
              <p className="font-inter text-white text-opacity-50">
                {item.desc}
              </p>
              <span className="title-feature font-friz-bold">Read more</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNews;
