import React from "react";
import Right from "@/app/(auth)/_components/Right";
import Left from "./_components/Left";

const Page = () => {
  return (
    <main>
      <section>
        <div className="grid lg:grid-cols-2 gap-4 h-full md:flex md:flex-col-reverse lg:flex-row lg:grid">
          <Left />
          <Right />
        </div>
      </section>
    </main>
  );
};

export default Page;
