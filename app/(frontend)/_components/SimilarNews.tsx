import React from "react";
import Image from "next/image";
import img1 from "@/public/home/similar-news/1.svg";
import img2 from "@/public/home/similar-news/2.svg";
import img3 from "@/public/home/similar-news/3.svg";
import ThirdButton from "@/src/components/shared/ThirdButton";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";

const SimilarNews = () => {
  const news = [
    {
      id: 1,
      img: img1,
      title: "The global financial landscape and its implications for all...",
      date: "Sep 9, 2024",
    },
    {
      id: 2,
      img: img2,
      title: "A comprehensive analysis of the state of global affairs...",
      date: "Sep 9, 2024",
    },
    {
      id: 3,
      img: img3,
      title: "Examining the challenges and responses of nations...",
      date: "Sep 9, 2024",
    },
  ];
  return (
    <section>
      <div className="container">
        <div>
          <h2 className="text-[#039] text-3xl font-bold flex items-center gap-2 mb-10">
            Similar News <HiArrowNarrowRight size={32} />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-[10px] ">
                <div>
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto rounded-t-[10px]"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-[#202124] !text-lg !font-medium">
                    {item.title}
                  </h2>
                  <p className="text-primary font-semibold mt-3">
                    CNN - {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <ThirdButton className="mb-10 !px-5 !py-3">
              Load more <IoIosArrowRoundDown size={32} />
            </ThirdButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarNews;
