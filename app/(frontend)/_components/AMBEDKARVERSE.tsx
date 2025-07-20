import Heading from "@/src/components/shared/Heading";
import bg from "@/public/home/video-bg.png";
import { HiArrowNarrowRight } from "react-icons/hi";

import React from "react";

import { FaPlayCircle } from "react-icons/fa";
import ThirdButton from "@/src/components/shared/ThirdButton";

const AMBEDKARVERSE = () => {
  const data = {
    title: "What is AMBEDKARVERSE ??",
    subtle: "Learn Skills AI Can’t Replace With the Help of VR",
    list: [
      {
        title: "Stitching Clothes:",
        description: "Become a skilled tailor and design garments.",
      },
      {
        title: "EV Car Repair:",
        description: "Master electric vehicle maintenance and repair.",
      },
      {
        title: "Physiotherapy",
        description: "Train to heal people through hands-on care.",
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <div>
          <Heading
            title="Welcome To AMBEDKARVERSE!"
            description="Where Ambedkar’s Dream Ignites Bahujan Futures "
          />
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
            <div className=" rounded-2xl bg-[rgba(250,233,233,0.70)] p-8 shadow-lg">
              <p className="text-[26px] font-bold mb-6 text-black text-center">
                {data.subtle}
              </p>
              <ul className="list-disc pl-5">
                {data.list.map((item, index) => (
                  <li key={index} className="mb-3">
                    <strong>{item.title}</strong> <br />{" "}
                    <span className="text-base">{item.description}</span>
                  </li>
                ))}
              </ul>
              <ThirdButton className="mt-10">
                Watch Video to find more <HiArrowNarrowRight size={32} />
              </ThirdButton>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
            className={`max-w-[423px] min-h-[613px] flex items-center justify-center `}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            <FaPlayCircle size={60} color="white" className="relative z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMBEDKARVERSE;
