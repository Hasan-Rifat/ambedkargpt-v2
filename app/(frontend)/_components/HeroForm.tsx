import React from "react";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineMic } from "react-icons/md";
import { RiTelegram2Fill } from "react-icons/ri";

const HeroForm = () => {
  const icons: {
    icon: React.JSX.Element;
    key: string;
  }[] = [
    { icon: <GrAttachment />, key: "attachment" },
    { icon: <MdOutlineMic />, key: "mic" },
  ];

  const formData: {
    placeholder: string;
    icon: React.JSX.Element;
  } = {
    placeholder: "Ask me any questions about my writings and speeches ?",
    icon: <RiTelegram2Fill size={32} />,
  };
  return (
    <div
      className="bg-[rgba(255,255,255,0.50)] rounded-[10px] border-solid border-[rgba(0,0,0,0.50)] border p-3 flex flex-col gap-6 items-start justify-start relative"
      style={{
        boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex flex-row gap-2 items-center">
        {icons.map(({ icon, key }) => (
          <div key={key} className="bg-accent text-white rounded-full p-2.5">
            {icon}
          </div>
        ))}
      </div>
      <div className="w-full h-full p-2 border border-gray-300 rounded flex justify-between items-center">
        {/* <div className="">{formData.placeholder}</div> */}
        <div className="w-full h-full relative">
          <textarea
            name="chat"
            placeholder={formData.placeholder}
            rows={1}
            className="w-full h-full "
          ></textarea>
        </div>

        <div className="flex ">
          <div className="bg-accent text-white rounded-full p-2.5  ">
            {formData.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroForm;
