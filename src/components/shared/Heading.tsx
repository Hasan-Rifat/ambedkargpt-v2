import React from "react";

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center mb-20">
      <h1 className="text-black">{title}</h1>
      <h2 className="text-[#039] text-2xl font-semibold">{description}</h2>
    </div>
  );
};

export default Heading;
