import React from "react";

interface PrimaryButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <div>
      <button
        type={type}
        style={{
          background: "linear-gradient(90deg, #003399 0%, #4B5EB5 100%)",
        }}
        className={`primary-button rounded-[50px] py-3.5 px-[34.5px] font-medium flex items-center justify-center gap-2.5 text-white ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
