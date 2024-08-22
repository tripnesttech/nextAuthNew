"use client"
import Image from "next/image";
import React from "react";
import Button from "../CustomButton";
import CountUp from 'react-countup';

const WhyTripNest = () => {
  return (
    <>
      <div className="container-custom w-full grid grid-cols-1 md:grid-cols-2 ">
        <div className="basis-[50%]  flex flex-col justify-start items-center h-full w-full relative ">
          <div className=" flex-col-start">
            <span>Why TripNest</span>
            <Image
              className="w-[105px] h-[2px] "
              src="/WhyTripNestBar.png"
              alt="no image"
              width={500}
              height={500}
              // className="object-contain"
            />
            <span className=" font-semibold text-[30px] text-teal_blue">
              TripNest is Your Trusted Travel Companion
            </span>
            <p className=" font-light text-[16px]">
              At TripNest, we understand that navigating the visa process can be
              overwhelming and time-consuming. That’s why we’re committed to
              simplifying every step of your journey. With our innovative tools,
              up-to-date visa information, and personalized support, you can
              focus on planning your trip while we handle the details.
            </p>
          </div>
          <div className=" w-full flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="basis-[50%]  flex flex-col justify-center items-start gap-y-6">
              <div className=" flex justify-center items-center gap-2">
                <Image
                  className="w-[24px] h-[24px] "
                  src="/FastandEfficientService.png"
                  alt="no image"
                  width={500}
                  height={500}
                  // className="object-contain"
                />
                <span>Comprehensive Visa Information</span>
              </div>
              <div className=" flex justify-center items-center gap-2">
                <Image
                  className="w-[24px] h-[24px] "
                  src="/FastandEfficientService.png"
                  alt="no image"
                  width={500}
                  height={500}
                  // className="object-contain"
                />
                <span>24/7 Customer Support</span>
              </div>
            </div>
            <div className="basis-[50%]  flex flex-col justify-center items-start gap-y-6 ">
              <div className=" flex justify-center items-center gap-2">
                <Image
                  className="w-[24px] h-[24px] "
                  src="/FastandEfficientService.png"
                  alt="no image"
                  width={500}
                  height={500}
                  // className="object-contain"
                />
                <span>Secure and Easy Booking</span>
              </div>
              <div className=" flex justify-center items-center gap-2">
                <Image
                  className="w-[24px] h-[24px] "
                  src="/FastandEfficientService.png"
                  alt="no image"
                  width={500}
                  height={500}
                  // className="object-contain"
                />
                <span>Fast and Efficient Service</span>
              </div>
            </div>
          </div>
          <Image
            className="w-[553px] h-[68px] absolute bottom-[136px] right-10"
            src="/rupeArrow.png"
            alt="no image"
            width={500}
            height={500}
            // className="object-contain"
          />
          <Button
            title="Get Started Now"
            containerStyles="custom-btn-fill text-[11px] absolute bottom-[95px] left-0"
          />
        </div>
        <div className="basis-[50%]  flex flex-col justify-start items-start h-full w-full ">
          {/* Right Side */}
          <div className=" w-full flex justify-end items-center  gap-4">
            <div className="flex flex-col justify-between items-center gap-4">
              <div className=" w-[220px] h-[103px] bg-sky-blue flex-center-col text-white rounded-md">
               {/* // <span>250+</span> */}
              <span>{  <CountUp delay={0.2} end={250} duration={5.75} />} +</span>
                <span>Satisfied Clients</span>
              </div>
              <Image
                className=" w-[220px] h-[320px] rounded-md "
                src="/whyTropnestImage2.jpg"
                alt="no image"
                width={500}
                height={500}
              />
            </div>
            <div className=" flex flex-col justify-between items-center gap-4">
              
              <Image
                className=" w-[220px] h-[300px] rounded-md "
                src="/whyTropnestImage1.jpg"
                alt="no image"
                width={500}
                height={500}
              />
            

              {/* animate-spin */}
             <Image
                className="w-[130px] h-[130px] " 
                src="/circle.svg"
                alt="no image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTripNest;
