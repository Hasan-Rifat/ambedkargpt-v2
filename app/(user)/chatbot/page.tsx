import React from "react";
import ChatBox from "./_components/ChatBox";
import Right from "./_components/Right";

const page = () => {
  return (
    <section className="">
      <div className="max-w-[1264px] grid grid-cols-12  gap-8">
        <div className="w-full h-full col-span-8">
          <ChatBox />
        </div>
        <div className="w-full h-full col-span-4">
          <Right />
        </div>
      </div>
    </section>
  );
};

export default page;
