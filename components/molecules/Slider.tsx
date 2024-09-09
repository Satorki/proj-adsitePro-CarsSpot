"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Photo from "../atoms/Photo";

const Slider = () => {
  const photos = ["Photo2", "Photo1", "Photo3"];

  return (
    <div className="2xl:max-w-[1264px] xl:ml-[88px] mx-auto mt-20">
      <Swiper
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1400: {
            slidesPerView: 2.15,
            spaceBetween: 80,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        modules={[Pagination]}
      >
        {photos.map((photoName) => (
          <SwiperSlide key={photoName}>
            <Photo photo={`/images/${photoName}.png`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
