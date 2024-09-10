"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Photo from "../atoms/Photo";

const Slider = () => {
  const photos = [
    "Photo2.png",
    "Photo1.png",
    "Photo3.png",
    "Photo4.jpg",
    "Photo5.jpg",
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} -translate-x-12 -translate-y-5"></span>`;
    },
  };
  //

  return (
    <div className="md:max-w-[700px] md:ml-auto md:mr-auto lg:max-w-[960px] lg:ml-auto lg:mr-auto xl:max-w-none xl:ml-[88px] 2xl:max-w-[1264px] 2xl:ml-auto 2xl:mr-auto pt-20 md:min-h-[350px] xl:min-h-[678px]">
      <Swiper
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper md:min-h-[350px] xl:min-h-[550px]"
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
            slidesPerView: 2.13,
            spaceBetween: 64,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {photos.map((photoName) => (
          <SwiperSlide key={photoName}>
            <Photo photo={`/images/${photoName}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
