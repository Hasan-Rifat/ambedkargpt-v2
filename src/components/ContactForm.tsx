// "use client";

// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="bg-white rounded-lg border border-brand-color p-4 flex flex-col gap-6 items-center">
//       <div className="flex flex-col gap-6 w-full">
//         {/* Name and Email Row */}
//         <div className="flex gap-8 w-full">
//           <div className="flex flex-col gap-1.5 w-full">
//             <label className="text-black text-lg font-medium">Name</label>
//             <div className="bg-white rounded-lg border border-gray-300 p-4">
//               <input
//                 type="text"
//                 placeholder="Enter your name here"
//                 className="text-gray-500 w-full outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-1.5 w-full">
//             <label className="text-black text-lg font-medium">Email</label>
//             <div className="bg-white rounded-lg border border-gray-300 p-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="text-gray-500 w-full outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Phone and Address Row */}
//         <div className="flex gap-8 w-full">
//           <div className="flex flex-col gap-1.5 w-full">
//             <label className="text-black text-lg font-medium">Phone</label>
//             <div className="bg-white rounded-lg border border-gray-300 p-4">
//               <input
//                 type="tel"
//                 placeholder="Enter your phone"
//                 className="text-gray-500 w-full outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-1.5 w-full">
//             <label className="text-black text-lg font-medium">Address</label>
//             <div className="bg-white rounded-lg border border-gray-300 p-4">
//               <input
//                 type="text"
//                 placeholder="Enter your address"
//                 className="text-gray-500 w-full outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Message Box */}
//         <div className="flex flex-col gap-1.5 w-full">
//           <label className="text-black text-lg font-medium">
//             Purpose of Message
//           </label>
//           <div className="bg-white rounded-lg border border-gray-300 p-4 h-48">
//             <textarea
//               placeholder="Enter your text..."
//               className="text-gray-500 w-full h-full outline-none resize-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button
//         className="rounded-full px-5 py-3.5 bg-gradient-to-r from-blue-900 to-indigo-700 text-white font-medium"
//         type="button"
//       >
//         Get in touch
//       </button>
//     </div>
//   );
// };

// export default ContactForm;
"use client";

import React from "react";
import PrimaryButton from "./shared/PrimaryButton";

const ContactForm = () => {
  const fields = [
    {
      type: "row",
      items: [
        {
          id: "name",
          label: "Name",
          type: "text",
          placeholder: "Enter your name here",
          width: "w-full",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
          width: "w-full",
        },
      ],
    },
    {
      type: "row",
      items: [
        {
          id: "phone",
          label: "Phone",
          type: "tel",
          placeholder: "Enter your phone",
          width: "w-full",
        },
        {
          id: "address",
          label: "Address",
          type: "text",
          placeholder: "Enter your address",
          width: "w-full",
        },
      ],
    },
    {
      type: "single",
      item: {
        id: "message",
        label: "Purpose of Message",
        type: "textarea",
        placeholder: "Enter your text...",
        height: "h-48",
      },
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-[#039] p-4 flex flex-col gap-6 items-center ">
      <div className="flex flex-col gap-6 w-full">
        {fields.map((fieldGroup, index) => (
          <div
            key={index}
            className={`flex ${
              fieldGroup.type === "row" ? "gap-8" : ""
            } w-full`}
          >
            {fieldGroup.type === "row" ? (
              fieldGroup.items?.map((field) => (
                <div
                  key={field.id}
                  className={`flex flex-col gap-1.5 ${field.width}`}
                >
                  <label className="text-black text-lg font-medium">
                    {field.label}
                  </label>
                  <div className="bg-white rounded-[10px] border border-[#d9e1ec] p-4">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="text-[#8b8b8b] w-full outline-none"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-black text-lg font-medium">
                  {fieldGroup.item?.label}
                </label>
                <div
                  className={`bg-white rounded-[10px] border border-[#d9e1ec] p-4 ${fieldGroup.item?.height}`}
                >
                  <textarea
                    placeholder={fieldGroup.item?.placeholder}
                    className="text-[#8b8b8b] w-full h-full outline-none resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <PrimaryButton> Get in touch</PrimaryButton>
    </div>
  );
};

export default ContactForm;
