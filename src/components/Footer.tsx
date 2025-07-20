import React from "react";
import Image from "next/image";
import img from "@/public/shared/indianflag.svg";
import SecondaryButton from "./shared/SecondaryButton";
import PrimaryButton from "./shared/PrimaryButton";

const Footer = () => {
  const left = {
    text: "AmbedkarGPT",
    description: "Be the part of AmbedkarGPT",
    link: "Join Our Team",
  };

  const right = [
    {
      id: 1,
      text: "Let’s Chat With",
      link: "Bheem ChatBOT",
      icon: <></>,
    },
    {
      id: 2,
      text: "Support Our Cause",
      link: "Donate Now",
      icon: <></>,
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 items-center justify-center">
          <div className="flex flex-col gap-4 lg:justify-center lg:items-center">
            <h2 className="text-3xl font-bold text-black">{left.text}</h2>
            <p className="text-black !pt-3 !mb-8">{left.description}</p>
            <SecondaryButton className="!text-black !border-black ">
              {left.link}
            </SecondaryButton>
          </div>
          <div>
            <Image src={img} alt="Indian Flag" className="w-full h-auto mb-4" />
          </div>
          <div className="flex flex-col gap-4 pl-[10%]">
            {right.map((item) => (
              <div key={item.id} className="mb-4">
                <p className="text-black !mb-2 font-semibold">{item.text}</p>
                {item.id === 1 ? (
                  <SecondaryButton className="!text-black !border-black">
                    {item.link}
                  </SecondaryButton>
                ) : (
                  <PrimaryButton>{item.link}</PrimaryButton>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl text-black font-semibold text-center py-14">
            We are not slaves. We are fighters.&quot; — Now fight with code,
            data, and solidarity.
          </p>
          <p className="text-sm font-medium text-center">
            Terms of use and privacy policy
          </p>
          <p className="text-xs text-black font-medium text-center pt-2">
            AmbedkarGPT. All rights reserved 2025©{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
