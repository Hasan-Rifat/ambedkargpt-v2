import React from "react";

const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-[18px] text-black ${className}`}>{children}</p>;
};

export default Text;
