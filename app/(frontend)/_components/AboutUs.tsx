import Image from "next/image";
import React from "react";
import icon from "@/public/home/icon.png"; // Adjust the path as necessary
import Heading from "@/src/components/shared/Heading";

const AboutUs = () => {
  const data = [
    {
      id: 1,
      title: "Our Vision",
      subtitle: "A Future Built on Justice & Equality",
      description:
        "To fulfill Dr. Ambedkar’s dream of an equal India, where every Bahujan rises with skills, dignity, and recognition through the power of AI and the Metaverse.",
    },
    {
      id: 2,
      title: "Our Mission",
      subtitle: "AI for Awareness & Education",
      description:
        "Using AI and VR, we teach Bahujan skills like stitching and coding. This breaks caste barriers and fosters equality.",
    },
    {
      id: 3,
      title: "Our Values",
      subtitle: "Prioritise skills that ensure economic independence",
      description:
        "Empowerment, inclusivity, resilience, recognition, justice—building Ambedkar’s vision of dignity through transformative technology, forever.",
    },
  ];
  return (
    <section className="py-[100px]">
      <div className="container">
        <div>
          <Heading
            title="About Us"
            description="Bringing Ambedkar’s Vision to the Digital Age"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-24 md:gap-x-10 gap-y-36 gap-9">
          {data.map((item) => (
            <div
              style={{
                background:
                  "linear-gradient(180deg, #609EFD 0%, #916BDF 142.31%)",
              }}
              key={item.id}
              className="rounded-[20px] relative h-[271px] "
            >
              <div className="bg-[#D1ECFF] p-6 w-[100px] h-[100px] rounded-full absolute -top-[20%] left-1/2 transform -translate-x-1/2">
                <Image width={66} height={66} src={icon} alt="icon" />
              </div>

              <div className="mt-14">
                <h3 className="text-white text-2xl font-bold mt-10 text-center">
                  {item.title}
                </h3>
                <p className="text-white text-xl font-semibold mt-2 text-center px-14">
                  {item.subtitle}
                </p>
              </div>
              <div className="bg-white h-[160px] rounded-[10px] max-w-[283px] mx-auto">
                <p className="text-black text-base mt-4 p-5 ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
