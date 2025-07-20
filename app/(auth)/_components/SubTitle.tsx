import React from "react";

const SubTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div>
      <h3 className={`text-[30px] text-black font-semibold ${className}`}>
        {text}
      </h3>
    </div>
  );
};

export default SubTitle;
