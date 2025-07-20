import Heading from "@/src/components/shared/Heading";
import React from "react";
import icon1 from "@/public/home/work/1.svg";
import icon2 from "@/public/home/work/2.svg";
import icon3 from "@/public/home/work/3.svg";
import icon4 from "@/public/home/work/4.svg";
import Image from "next/image";
import PrimaryButton from "@/src/components/shared/PrimaryButton";

const WorkWithUs = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Social Media Influencer",
      description:
        "Generates viral content on social justice, Ambedkar insights, and Bahujan empowerment, attracting engaged audiences.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Politicians & Party Members",
      description:
        "Ambedkar GPT crafts AI/VR uplift narratives that convert Bahujan progress into loyal votes.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Softwere  Developer",
      description:
        "Build AI/VR tools for social justice while mastering cutting-edge skills.",
    },
    {
      id: 4,
      icon: icon4,
      title: "Charitable Organization",
      description:
        "Charities co-create free AI tools with Ambedkar GPT to deliver scalable education, legal aid, and VR upskilling for Bahujans.",
    },
  ];

  const contribute = {
    title: "Ways to Contribute",
    description:
      "Join Ambedkar's Unfinished Revolution: Digitize hidden archives, forge justice-driven tools, donate silenced histories, fund VR liberation labs—and collectively annihilate caste with tech now!",
    buttonText: "Join Our Team",
  };

  return (
    <section className="py-20 ">
      <div className="container">
        <div>
          <Heading
            description="Be Part of the Change – Contribute to AmbedkarGPT"
            title="Work With Us"
          />
          <div className="grid lg:grid-cols-2 gap-20 mt-8 items-center">
            <div className="grid md:grid-cols-2 gap-9">
              {data.map((item) => (
                <div
                  className={`rounded-2xl ${
                    item.id == 2 ? "" : "border border-[#039]"
                  } p-3`}
                  key={item.id}
                  style={
                    item.id === 2
                      ? {
                          background:
                            "linear-gradient(122deg, #CA6BE4 0%, rgba(0, 51, 153, 0.95) 97.82%)",
                        }
                      : undefined
                  }
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-28 h-28 mb-4 mx-auto"
                    />
                  </div>
                  <div>
                    <h3
                      className={`${
                        item.id == 2 ? "text-white" : "text-black"
                      } font-bold text-xl text-center py-5`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${
                        item.id == 2 ? "text-white" : "text-black"
                      } text-center`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <h2 className="text-2xl font-bold mb-4">{contribute.title}</h2>
              <p className=" mb-6 md:max-w-[536px]">{contribute.description}</p>

              <PrimaryButton className="mt-6">
                {contribute.buttonText}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
