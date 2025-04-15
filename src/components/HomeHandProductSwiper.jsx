import React from "react";
import { Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { homePageHandProductData } from "../staticData";
import "./style/CommanSwiper.css";
import { Link } from "react-router-dom";

export default function HomeHandProductSwiper() {
  return (
    <div>
      <Swiper
        // pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1070: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
      >
        {
          homePageHandProductData.map((fdata,i)=>(
            <SwiperSlide key={i}>
            <Link className="cursor-pointer" to="/handproduct">
            <div className="card bg-base-100  border border-base-300 rounded-xl">
              <figure>
                <img
                  src={fdata.img}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body p-3 md:p-5">
                <h2 className="card-title text-sm md:text-lg">{fdata.heading}</h2>
                <p className="text-xs md:text-sm">{fdata.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm md:btn-sm btn-primary text-white ">Buy Now</button>
                </div>
              </div>
            </div></Link>
          </SwiperSlide>
          ))
        }
        
      </Swiper>
    </div>
  );
}

