// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import person from "@/public/chat/person.svg";
// import online from "@/public/chat/online.svg";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import HeroForm from "@/app/(frontend)/_components/HeroForm";

// const ChatBox = () => {
//   const [messages, setMessages] = useState<string[]>([
//     "Hello! How can I assist you today?",
//     "I have a question about Dr. B.R. Ambedkar's contributions.",
//     "Sure! What would you like to know?",
//   ]);

//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages((prev) => [...prev, input.trim()]);
//       setInput("");
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);
//   return (
//     <div
//       className="bg-[#ffffff] rounded-[25px] border-solid border-[rgba(0,0,0,0.50)] border relative w-[544px]"
//       style={{ boxShadow: "0px 2px 2px 1px rgba(121, 197, 239, 0.38)" }}
//     >
//       <div className="pt-[31px] pl-[22px] pr-[32px]">
//         <div className="flex items-center justify-between border-b pb-5 border-b-[#B4ABABA8] border-b-opacity-50">
//           <div className="w-[50px] h-[50px] ">
//             <Image
//               src={person}
//               alt="Person"
//               className="w-full h-full  rounded-[50%] "
//             />
//           </div>
//           <div>
//             <p className="text-accent font-semibold tracking-[1.3px]">
//               DR. BR AMDEDKAR
//             </p>
//             <p className="flex items-center gap-2.5">
//               <Image src={online} alt="Online" />
//               <span>Online</span>
//             </p>
//           </div>
//           <div>
//             <BsThreeDotsVertical />
//           </div>
//         </div>
//       </div>

//       {/* Chat Body */}
//       <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 h-[400px]">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] text-blue-800 px-4 py-2  self-end max-w-[40%] ml-auto border border-[rgba(0,0,0,0.50)] rounded-[16px_16px_0px_16px]"
//           >
//             {msg}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Chat Input */}
//       {/* <div className="p-4 border-t flex gap-2">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </div> */}
//       <div className="p-3">
//         <HeroForm
//           value={input}
//           handleSend={handleSend}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSend()}
//         />
//       </div>
//       <p className="p-3 text-xs text-accent font-light text-center">
//         DATASET SOURCE: Ministry Of External Affairs - 17 volumes (Click here)
//       </p>
//     </div>
//   );
// };

// export default ChatBox;
"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import person from "@/public/chat/person.svg";
import online from "@/public/chat/online.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import HeroForm from "@/app/(frontend)/_components/HeroForm";

const ChatBox = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    try {
      const res = await fetch("https://api.ambedkargpt.in/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });

      const data = await res.json();

      if (data.response) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sorry, I couldn't understand the response.",
          },
        ]);
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "There was an error reaching the server.",
        },
      ]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="bg-white rounded-[25px] border border-[rgba(0,0,0,0.50)] relative "
      style={{ boxShadow: "0px 2px 2px 1px rgba(121, 197, 239, 0.38)" }}
    >
      {/* Header */}
      <div className="pt-[31px] pl-[22px] pr-[32px]">
        <div className="flex items-center justify-between border-b pb-5 border-b-[#B4ABABA8] border-opacity-50">
          <div className="flex items-center gap-8">
            <div className="w-[50px] h-[50px]">
              <Image
                src={person}
                alt="Person"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="text-accent font-semibold tracking-[1.3px]">
                DR. BR AMBEDKAR
              </p>
              <p className="flex items-center gap-2.5 text-sm text-gray-500">
                <Image src={online} alt="Online" />
                <span>Online</span>
              </p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto h-[500px] px-4 py-2">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="px-4 py-2 max-w-[70%] border shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] rounded-[16px_16px_16px_0px] text-center max-h-[150px]">
              <h3 className="text-xl text-black font-semibold">Hello</h3>
              <h1 className="!text-2xl !font-bold text-black py-3">
                I&apos;m Bheem ChatBOT
              </h1>
              <p className="text-base text-black">
                Ask me anything about Dr. B.R. Ambedkar’s Writings and Speeches.
              </p>
            </div>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 max-w-[40%] mb-5 border shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto rounded-[16px_16px_0px_16px]"
                : "bg-gray-100 text-black mr-auto rounded-[16px_16px_16px_0px]"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3">
        <HeroForm
          value={input}
          handleSend={handleSend}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
      </div>

      {/* Footer */}
      <p className="p-3 text-xs text-accent font-light text-center">
        DATASET SOURCE: Ministry Of External Affairs - 17 volumes (Click here)
      </p>
    </div>
  );
};

export default ChatBox;
