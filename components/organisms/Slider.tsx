"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Photo from "../atoms/Photo";

const Slider = () => {
  const photos = ["Photo2", "Photo1", "Photo3"];

  return (
    <div className="ml-[88px] mt-20">
      <Swiper
        spaceBetween={80}
        slidesPerView={2.15}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) =>
            `<span class="${className}"></span>`,
        }}
        modules={[Pagination]}
      >
        {photos.map((photoName) => (
          <SwiperSlide key={photoName}>
            <Photo photo={`/images/${photoName}.png`} />
          </SwiperSlide>
        ))}
        <div className="">
          <div className="swiper-pagination absolute top-10"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
