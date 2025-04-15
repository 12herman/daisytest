import React from 'react'
// core version + navigation, pagination modules:
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/CommanSwiper.css";
import { homePageSlideOne } from '../staticData'

export default function HomeBannerSwiper() {
  return (
    <div className="w-full h-auto md:h-[300px] bg-primary rounded-xl">        
    <Swiper
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Navigation, Pagination]}
    className="h-full"
  >
    {homePageSlideOne.map((sdata, i) => (
      <SwiperSlide>
        <section className="grid grid-cols-2 ">
          <div
            style={{ backgroundImage: `url(${sdata.img})` }}
            className="col-span-1 block w-full h-[150px] md:h-[300px] bg-contain bg-center bg-no-repeat"
          ></div>
          <div className="flex col-span-1 px-10  w-full h-[150px] md:h-[300px] items-center justify-center">
            <span>
              <h2 className="text-sm md:text-2xl font-medium text-white">
                {sdata.heading}
              </h2>
              <h3 className="text-xs md:text-lg opacity-85 text-white">
                {sdata.subheading}
              </h3>
              <p className="text-sm opacity-70 text-white hidden md:block">
                {sdata.para}
              </p>
            </span>
          </div>
        </section>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  )
}
