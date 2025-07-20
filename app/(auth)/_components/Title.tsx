import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h2 className={`text-[32px] font-medium text-black ${className}`}>
      {text}
    </h2>
  );
};

export default Title;
