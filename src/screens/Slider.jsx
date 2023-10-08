import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../styles/Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="back">
      <div className="cam">
        <h1>
          Nuestros <span>Trabajos</span>
        </h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper py-4"
      >
        <SwiperSlide>
          <div className="centrar">
            <img src="/images/XIAOMI.gif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrar">
            <img src="/images/XIAOMI.gif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="centrar">
            <img src="/images/XIAOMI.gif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" centrar">
            <img src="/images/XIAOMI.gif" alt="" />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
