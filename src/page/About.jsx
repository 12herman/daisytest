import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import profileImg from "../assets/about/image.png";
import { customerReview, homePageThreeCard, videoCardData } from "../staticData";

export default function About() {
  return (
    <Layout>
      <h2 className="text-2xl md:text-5xl md:hidden block mt-20 md:mt-0 w-full">
        Your Health is our{" "}
        <span className="text-primary font-bold">First Piority</span>
      </h2>
      <section className="flex justify-center items-center gap-x-7 md:grid md:grid-cols-5  md:mt-28">
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-5xl hidden md:block">
            Your Health is our <br />{" "}
            <span className="text-primary font-bold">First Piority</span>
          </h2>
          <p className="mt-2 md:mt-5 opacity-70 text-sm md:text-base">
            Make sure your browser console has no Swiper-related errors like
            version mismatches or missing styles. Make sure your browser console
            has no Swiper-related errors like version mismatches or missing
            styles Make sure your browser console has no Swiper-related errors
            like version mismatches or missing styles. Make sure your browser
            console has no Swiper-related errors like version mismatches or
            missing styles
          </p>
        </div>
        <div className="md:col-span-2 md:place-items-center ">
          <div className="w-[150px] h-[150px]  md:w-[80%] lg:w-[70%] xl:w-[60%] md:h-[300px]  bg-primary rounded-2xl relative">
            <span className="w-[90px] h-[90px] bg-secondary block rounded-lg absolute -right-10 -top-10 -z-10 opacity-50"></span>
            <span className="w-[60px] h-[60px] bg-secondary block rounded-full absolute -left-8 -bottom-5 -z-10 opacity-50"></span>
            <img
              className="w-[230px] absolute left-1/2 -translate-x-1/2 bottom-0"
              src={profileImg}
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[230px] h-[20px] 
                  bg-green-600/40 blur-md rounded-full z-0"
            />
          </div>
        </div>
      </section>

      <section className="mt-5 lg:mt-20">
  <Heading headone="Our" headtwo="Main" slogan="Vision" />
  <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5 mt-5 lg:mt-10">
    {videoCardData.map((tcdata, i) => (
      <div
        key={i}
        className="card w-full border border-base-300 rounded-xl bg-base-100 sm:w-72 md:w-80 cursor-pointer overflow-hidden"
      >
        <div className="card-body p-0">
          {/* Replace this block depending on video type */}
          {/* Option 1: HTML5 Video */}
          {/* <video
            src={tcdata.videoUrl}
            controls
            className="w-full h-44 object-cover rounded-t-xl"
          /> */}
          {/* Option 2: YouTube Embed (if using YouTube links) */}
          <iframe
            src={tcdata.videoUrl}
            title={`video-${i}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-44 rounded-t-xl"
          ></iframe>

          <div className="p-4">
            <h2 className="text-center font-medium text-sm md:text-xl">{tcdata.heading}</h2>
            <p className="text-center opacity-80 text-xs md:text-sm">{tcdata.para}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


          {/* 3 cards */}
            <section className=" mt-5 lg:mt-20">
              <Heading headone="Our" headtwo="Main" slogan ="Vision"/>
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

      <section className="mt-5 lg:mt-20  mb-10">
        <Heading headone="Our" headtwo="Customer" slogan ="Review"/>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 mt-5 md:mt-10">
        {customerReview.map((data,i)=>(
          <div key={i} className="card card-sm bg-base-200 mb-8 break-inside-avoid rounded-ee-[2.5rem] text-start">
          <div className="card-body gap-4">
            <p className="text-base-content/70 px-1 text-[0.75rem] leading-[1.75] [text-wrap:balance]">{data.content}</p>
            <div className="flex flex-row-reverse items-center gap-3">
              <div className="avatar">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-base-content w-12 rounded-full outline-offset-2 hover:brightness-90 focus-visible:outline-2"
                >
                  <div
                    className="size-12 rounded-full"
                    style={{
                      backgroundImage:
                        `url(${data.img})`,
                      backgroundSize: "auto 48px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "-816px 0px",
                    }}
                  ></div>
                </a>
              </div>
              <div className="flex flex-col items-end text-xs">
                <div className="text-base-content font-bold">{data.name}</div>
                <div className="text-base-content/70">{data.jobtitle}</div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      </section>


    </Layout>
  );
}
