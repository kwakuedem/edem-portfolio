import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Picture from "../assets/Picture.png";
import Profile from "../assets/Profile.png";

const slides = [
  { image: "../assets/Picture.png" },
  { image: Profile },
  { image: Picture },
  { image: Profile },
];

function PorfolioItems() {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1536:{slidesPerView: 3}
        }}
        autoplay={500}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper.slideNext()}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="pb-10">
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Profile} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Picture} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Profile} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Picture} />
            </div>
          </SwiperSlide>
          ...
        </div>
      </Swiper>
    </div>
  );
}

export default PorfolioItems;
