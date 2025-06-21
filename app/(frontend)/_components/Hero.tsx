import React from "react";
import HeroForm from "./HeroForm";
import heroImg from "@/public/home/heroImage.svg";
import Image from "next/image";
import PrimaryButton from "@/src/components/shared/PrimaryButton";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import SecondaryButton from "@/src/components/shared/SecondaryButton";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  const data = {
    title: "Artificial Intelligence (AI) Meets, Ambedkar's Intelligence (AI)",
    description:
      "Deep Neural Networks trained on a dataset of 15,000 pages of writings and speeches of Dr. BR Ambedkar.",
    subtitle: "AmbedkarGPT...",
  };
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 py-10">
          <div>
            <h2 className="">
              {data.title.split(",")[0]}
              <br />
              {data.title.split(",")[1]}
            </h2>
            <p className="mt-3">{data.description}</p>
            <h3 className="text-[#039] text-5xl font-bold my-5">
              {data.subtitle}
            </h3>

            <div>
              <HeroForm />
              <div className="flex flex-col md:flex-row items-center  gap-4 mt-5">
                <PrimaryButton className="py-[10px] px-4 my-3 text-base">
                  Chat with Dr. Ambedkar Now{" "}
                  <IoArrowForwardCircleOutline size={40} />
                </PrimaryButton>
                <SecondaryButton className="!py-2 px-5 font-medium text-base">
                  Bheem ChatBOT <MdOutlineArrowOutward size={30} />
                </SecondaryButton>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={heroImg}
              alt="Hero Image"
              className="w-full h-auto max-w-md mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
