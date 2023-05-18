import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  return (
    <div className="my-12 bg-slate-100 p-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-[100vw] h-96"
            src="https://img.freepik.com/free-vector/many-toys-shelves-floor_1308-33141.jpg?size=626&ext=jpg&ga=GA1.2.1678409348.1676707273&semt=ais"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100vw] h-96"
            src="https://img.freepik.com/free-vector/kids-toys-illustration_24908-57111.jpg?w=826&t=st=1684431022~exp=1684431622~hmac=e499f04533941771c9e17b30251ee1256d240f9efa51ee21b187c09b23168435"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100vw] h-96"
            src="https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350473.jpg?size=626&ext=jpg&ga=GA1.1.1678409348.1676707273&semt=ais"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-[100vw] h-96"
            src="https://img.freepik.com/free-vector/many-toys-wooden-shelf_1308-33309.jpg?size=626&ext=jpg&ga=GA1.2.1678409348.1676707273&semt=ais"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
