interface ThirdButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ThirdButton: React.FC<ThirdButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <div>
      <button
        type={type}
        className={`primary-button rounded-2xl py-5 px-[24px] font-medium flex items-center justify-center gap-2.5 text-white bg-[#039] ${
          className || ""
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default ThirdButton;
