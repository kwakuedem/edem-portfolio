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
import Project from "../assets/Project.png";
import Projectpic from "../assets/Projectpic.png";
import Dashboard from "../assets/Dashboard.png";
import Smartgro from "../assets/Smartgro.png";

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
          1536: { slidesPerView: 3 },
        }}
        autoplay={true}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper.slideNext()}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="pb-10">
        <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Smartgro} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Project} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Dashboard} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Projectpic} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center pb-16">
              <img src={Project} />
            </div>
          </SwiperSlide>
          ...
        </div>
      </Swiper>
    </div>
  );
}

export default PorfolioItems;
