import Image from "next/image";
import React from "react";
import Button from "../CustomButton";
import { IoMdSearch } from "react-icons/io";

const Hero = () => {
  return (
    <div className="container-custom bg-hero-bg w-full flex flex-col md:flex-row justify-between items-center  h-[547px] ">
      
      <div className="basis-[50%]  flex flex-col justify-center items-center h-full w-full ">
        <div className="flex flex-col justify-start items-start ">
          <div className="relative">
            <span className=" font-semibold text-[64px] text-start text-teal_blue">
              VISA EXPERT
            </span>
            <Image
              className="w-[148px] h-[98px] z-50 absolute top-0 left-0"
              src="/birdSmall.svg"
              alt="hero passport"
              width={500}
              height={500}
            />
          </div>
          <p className=" font-light text-[16px] ">
            Travel made easy! Our exceptional visa processing facilities
            eliminate the usual headaches, letting you focus on the excitement
            of your upcoming trip.
          </p>
          <div className="mt-2 flex flex-col justify-start items-start ">
            <span className=" text-[16px] font-semibold ">
              Find your visa needs in one click – Choose your country
            </span>
            <div className=" flex  justify-start items-start mt-2">
              <input placeholder="Thailand Visa" className=" w-[360px] h-[40px] shadow-md rounded-md pl-2 " />

              <button className="custom-btn-fill flex justify-center items-center">{<IoMdSearch size={28}/>}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-[50%] h-full flex justify-end items-center relative">
        <Image
          className="w-[315px] h-[338px] absolute z-20"
          src="/HeroPassportIcon.png"
          alt="hero passport"
          width={500}
          height={500}
        />
        <Image
          className="w-[455px] h-[303px] absolute"
          src="/HeroBirdIcon.png"
          alt="hero passport"
          width={500}
          height={500}
        />
        <Image
          className="w-[662px] h-[76px] absolute"
          src="/HeroVISA ExpartTextIcon.png"
          alt="hero passport"
          width={500}
          height={500}
          // style={{ objectFit: 'cover' }}
          // fill
        />
      </div>
    </div>
  );
};

export default Hero;
