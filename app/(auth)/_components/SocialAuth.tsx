import React from "react";
import FacebookIcon from "@/public/auth/facebook.svg";
import GoogleIcon from "@/public/auth/google.svg";
import Image from "next/image";

const SocialAuth = () => {
  const data = [
    { provider: "Google", icon: GoogleIcon },
    { provider: "Facebook", icon: FacebookIcon },
  ];
  return (
    <div>
      <div className="mt-16 pb-10 ">
        <div className="flex items-center justify-center space-x-4">
          {/* Left border line */}
          <div className="flex-grow border-t border-gray-300" />

          {/* Center text */}
          <span className="text-black text-sm font-playfair-display">
            Or continue with
          </span>

          {/* Right border line */}
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <button
              key={index}
              className={`flex items-center justify-center border border-[#DEDEDE] bg-white rounded-[5px] py-2 px-4 w-full hover:border-accent`}
            >
              <Image
                src={item.icon}
                alt={`${item.provider} logo`}
                width={20}
                height={20}
              />
              <span className="ml-2">{item.provider}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialAuth;
