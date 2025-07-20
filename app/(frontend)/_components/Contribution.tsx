import Heading from "@/src/components/shared/Heading";
import React from "react";
import img from "@/public/home/society.svg"; // Adjust the path as necessary
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import PrimaryButton from "@/src/components/shared/PrimaryButton";

const Contribution = () => {
  const data = {
    img: img,
    title:
      "From Oppression to Ownership: A Landmark Victory for Social Justice",
    subtitle: "Dedicated Success Story",
    description:
      "After generations of struggle, a Dalit family in Madhya Pradesh secured their land rights, breaking the cycle of fear and oppression. This historic moment was made possible through the unwavering efforts of local activists and officials who believed in justice for all.",
    buttonText: "Read Full Story...",
  };
  const donate = {
    title: "Be a Part of the Change",
    subtitle: "Join as a Contributor",
    description:
      "Your support can help transform more lives. Contribute, share, or be part of a movement that drives real change.",
    buttonText: "Donate Now",
  };
  return (
    <section className="py-28">
      <div className="container">
        <div>
          <Heading
            description="Driving change through knowledge"
            title="Our Contribution To Society"
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8 items-center">
            <div
              className="p-8 bg-white rounded-[10px] md:col-span-3"
              style={{
                boxShadow:
                  "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
              }}
            >
              <div>
                <Image
                  src={data.img}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-lg mb-6"
                />
              </div>
              <h3 className="text-accent text-sm">{data.subtitle}</h3>
              <h2 className="py-3">{data.title}</h2>
              <p className="mb-[49px]">{data.description}</p>
              <Link
                className="text-[#039] underline flex items-end gap-2"
                href={
                  "https://drive.google.com/file/d/1MN4vyV8S0ZImq4Dvuj8O-ifUdYAhTUVb/view?usp=sharing"
                }
              >
                {data.buttonText} <MdOutlineArrowOutward size={24} />
              </Link>
            </div>
            <div className="md:col-span-2 bg-white p-5 rounded-[10px] max-h-[370px]">
              <h2 className="py-3 text-[#101828] ">{donate.title}</h2>
              <p className="mb-6">{donate.description}</p>
              <h3 className="text-accent text-sm py-10 flex items-center gap-2">
                {donate.subtitle} <MdOutlineArrowOutward size={24} />
              </h3>
              <PrimaryButton>
                <Link className="" href="/donate">
                  {donate.buttonText}
                </Link>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;
