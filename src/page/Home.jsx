import React from "react";
import Layout from "../components/Layout";
import { homePageThreeCard } from "../staticData";
import Heading from "../components/Heading";
import HomeBannerSwiper from "../components/HomeBannerSwiper";
import HomeFoodSwiper from "../components/HomeFoodSwiper";
import HomeHandProductSwiper from "../components/HomeHandProductSwiper";

export default function Home() {
  return (
    <Layout>
      
      {/* slider */}
      <section className=" mt-18">
          <HomeBannerSwiper/>
      </section>

      {/* 3 cards */}
      <section className=" mt-5 lg:mt-20">
        <Heading headone="Our" headtwo="Services" slogan ="Testing"/>
       <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 mt-5 lg:mt-10">
       {
          homePageThreeCard.map((tcdata,i)=>( <div key={i} className="card w-full border border-base-300 rounded-xl bg-base-100 sm:w-72 md:w-80 cursor-pointer">
            <div  className="card-body">
             {tcdata.emoji}
              <h2 className="text-center font-medium text-sm md:text-xl">{tcdata.heading}</h2>
              <p className="text-center opacity-80 text-xs md:text-sm">{tcdata.para} </p>
            </div>
          </div>))
        }
       </div>
      </section>

      <section className=" mt-5 lg:mt-20">
      <Heading headone="Natural" headtwo="Food" slogan ="Testing"/>
        <div className="mt-5 lg:mt-10"> <HomeFoodSwiper/> </div>
      </section>

      <section className=" my-5 lg:my-20">
      <Heading headone="Hand made" headtwo="Products" slogan ="Testing"/>
        <div className="mt-5 lg:mt-10"> <HomeHandProductSwiper/> </div>
      </section>

    </Layout>
  );
}
