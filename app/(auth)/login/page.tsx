"use client";
import React from "react";
import Right from "../_components/Right";
import Left from "./_components/Left";

const page = () => {
  return (
    <main>
      <section>
        {/* <div className="grid lg:grid-cols-2 gap-4 p-4 h-full">
          <Left />
          <Right />
        </div> */}
        <div className="grid lg:grid-cols-2 gap-4 h-full md:flex md:flex-col-reverse lg:flex-row lg:grid">
          <Left />
          <Right />
        </div>
      </section>
    </main>
  );
};

export default page;
