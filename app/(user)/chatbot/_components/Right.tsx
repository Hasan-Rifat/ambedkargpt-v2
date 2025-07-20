import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "@/public/chat/indiai.svg";
import img2 from "@/public/chat/digital-India.svg";
import Image from "next/image";
const Right = () => {
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
  ];
  const data2 = {
    title: "Sample Questions",
    questions: [
      "Dr. Ambedkar, what did you mean when you said, ‘I was born a Hindu, but I will not die a",
      "In your view, Dr. Ambedkar, what role does education play in dismantling the structures of oppression in Indian society?",
    ],
  };
  return (
    <div className="">
      {/* search */}
      <div>
        <div className="flex items-center gap-5 bg-white rounded-xl px-8 py-5 shadow-sm">
          <IoSearchOutline />

          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-gray-700 placeholder-gray-500 text-lg tracking-wider bg-transparent"
          />
        </div>
      </div>

      {/* sponsor */}
      <div className="my-10">
        <div className=" flex items-center justify-between gap-4">
          {data.map((item) => (
            <div key={item.id}>
              <Image src={item.img} alt={`Sponsor ${item.id}`} />
            </div>
          ))}
        </div>
        <p className="text-black font-semibold ">
          AI for Everyone, Everywhere.
        </p>
      </div>

      {/* question */}
      <div className="rounded-[25px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8 ">
        <h3 className="pb-6 text-[#303030] font-bold tracking-[1.4px]">
          {data2.title}
        </h3>
        <ul>
          {data2.questions.map((question, index) => (
            <li className="pb-6 text-black text-base" key={index}>
              {question}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Right;
