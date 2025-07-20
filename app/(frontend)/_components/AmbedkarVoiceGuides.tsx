import React from "react";
import icon1 from "@/public/home/icon1.svg";
import icon2 from "@/public/home/icon2.svg";
import Image from "next/image";

const AmbedkarVoiceGuides = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Experience His Speeches in VR",
      description:
        "Feel like he’s speaking directly to you with immersive presence.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Learn with Inspiration",
      description:
        "Discover his vision of equality while being motivated to act and lead.",
    },
  ];
  return (
    <section className=" py-[100px]">
      <div className="container shadow-lg bg-[#AEDFFF] rounded-2xl py-11 px-[184px]  flex flex-col gap-10 items-center justify-center relative">
        <div>
          <h2 className="text-center font-bold">
            {" "}
            Dr. Ambedkar’s Voice Guides You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="border border-accent p-5 rounded-2xl"
              >
                <div className="flex flex-col items-center gap-4 mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20"
                  />
                  <div>
                    <h3 className="text-xl font-bold my-8 text-center">
                      {item.title}
                    </h3>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbedkarVoiceGuides;
