import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const HeroSection = ({ products }) => {
  return (
    <div className="mx-auto w-full h-full">
      <Swiper
        className="w-full h-[500px] mx-auto mt-12 flex justify-center items-center"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={products.length < 3 ? products.length : 3}
        navigation
        pagination={{ clickable: true }}
        slidesPerGroup={1}
        loop={products.length > 3}
      >
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover  overflow-hidden"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
