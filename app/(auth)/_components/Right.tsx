import React from "react";
import Image from "next/image";
import authImage from "@/public/auth/auth.jpg";

const Right = () => {
  return (
    <div className="bg-[#AEDFFF] w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center ">
        {/* Image Container - Centered with max-width */}
        <div className="w-full max-w-[450px] mb-6 aspect-[3/4] relative">
          <Image
            src={authImage}
            alt="Auth illustration"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 450px"
            className="rounded-2xl md:rounded-3xl object-cover"
            quality={90}
          />
        </div>

        {/* Quote Section - Centered with text alignment */}
        <div className="w-full max-w-[450px] text-center">
          <h4 className="text-black font-medium text-lg md:text-xl mb-1">
            &quot;Educate, Agitate, Organize.&quot;
          </h4>
          <h5 className="text-accent font-medium text-base md:text-lg">
            – Dr. B.R. Ambedkar
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Right;
