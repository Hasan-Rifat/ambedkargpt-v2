import React from "react";

interface SecondaryButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <div>
      <button
        type={type}
        className={`bg-white border-primary border text-primary rounded-[50px] py-3.5 px-[34.5px] font-medium flex items-center justify-center gap-2.5 ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default SecondaryButton;
