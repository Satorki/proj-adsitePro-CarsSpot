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
      return `<span class="${className} xl:-translate-x-12 xl:-translate-y-5 translate-x-0 translate-y-0 2xl:translate-x-0 2xl:translate-y-0"></span>`;
    },
  };
  //

  return (
    <div className="sm:max-w-[600px] sm:ml-auto sm:mr-auto md:max-w-[700px] md:ml-auto md:mr-auto lg:max-w-[960px] lg:ml-auto lg:mr-auto xl:max-w-none xl:ml-[88px] 2xl:max-w-[1264px] 2xl:ml-auto 2xl:mr-auto pt-20 sm:min-h-[600px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[678px] 2xl:min-h-[550px]">
      <Swiper
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper min-h-[330px] sm:min-h-[500px] md:min-h-[300px]  lg:min-h-[400px]  xl:min-h-[550px] 2xl:min-h-[400px]"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
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
            spaceBetween: 20,
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
