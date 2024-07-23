import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assests/images/Image.png";
import img2 from "../../assests/images/Image (1).png";
import img3 from "../../assests/images/Image (2).png";
import SliderCard1 from "../SliderCard/SliderCard1";

const SpringSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: img1,
      title: "Bitcoin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
    {
      id: 2,
      img: img2,
      title: "Litecoin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
    {
      id: 3,
      img: img3,
      title: "Ethereum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
    {
      id: 4,
      img: img1,
      title: "Bitcoin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
    {
      id: 5,
      img: img2,
      title: "Litecoin",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
    {
      id: 6,
      img: img3,
      title: "Ethereum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget",
      price: "43.7k",
    },
  ];

  return (
    <div className=" w-[90vw]  mx-auto my-20 px-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        grabCursor
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {sliderData.map((elem, i) => (
          <SwiperSlide key={elem.id}>
            <SliderCard1
              image={elem.img}
              title={elem.title}
              description={elem.description}
              price={elem.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpringSlider;
