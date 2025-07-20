import React from "react";
import topNewsImg from "@/public/home/news/top-news.svg";
import Image from "next/image";
import img1 from "@/public/home/news/1.png";
import img2 from "@/public/home/news/2.png";
import img3 from "@/public/home/news/3.png";
import img4 from "@/public/home/news/4.png";
import img5 from "@/public/home/news/5.png";
import { HiArrowNarrowRight } from "react-icons/hi";

const WorldNews = () => {
  const topNews = {
    img: topNewsImg,
    title: "Understanding the social movements reshaping our world today...",
    description:
      "Social movements galvanise civil society actors to create collective power, visible in public demonstrations, grassroots work and policy advocacy. As Mitlin (2006:7) explains: Social movements gain power by building a critical mass of engaged participants who recognise their common interest in taking action...",
    link: "Read More",
    date: "Mar 10, 2025",
  };

  const news = [
    {
      id: 1,
      img: img1,
      title: "Understanding the role of big data in driving...",
      date: "Mar 10, 2025",
    },
    {
      id: 2,
      img: img2,
      title: "Future of computing and what it means for...",
      date: "Mar 10, 2025",
    },
    {
      id: 3,
      img: img3,
      title: "Exploring the latest developments in AI...",
      date: "Mar 10, 2025",
    },
    {
      id: 4,
      img: img4,
      title: "Trump's Potential Cabinet...",
      date: "Mar 10, 2025",
    },
    {
      id: 5,
      img: img5,
      title: "The evolution of business models in a...",
      date: "Mar 10, 2025",
    },
  ];
  return (
    <section className="pb-28 pt-20 ">
      <div className="container">
        <div className="border-b border-b-[#202124] mb-10">
          <h2 className="text-[#039] text-3xl font-bold">World News</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div
            className="lg:col-span-3 bg-white rounded-[10px] p-6 shadow-lg"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <Image
              src={topNews.img}
              alt="Top News"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-3xl font-medium mb-2">{topNews.title}</h3>
            <p className="text-[#039] text-sm font-medium flex items-center gap-2 py-5">
              <strong>CNN</strong> <span>-</span> {topNews.date}
            </p>
            <p className="">{topNews.description}</p>
          </div>
          <div className="lg:col-span-2">
            <div>
              <h2 className="flex items-center gap-2 text-primary text-3xl">
                Explore More <HiArrowNarrowRight size={32} />
              </h2>
              <div className="mt-6">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 mb-6 p-4 bg-white rounded-[10px] shadow-lg"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-[10px]"
                    />
                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-[#039] text-sm font-medium mt-2">
                        CNN - {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldNews;
