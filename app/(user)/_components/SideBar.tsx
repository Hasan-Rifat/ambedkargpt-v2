// "use client";

// import React, { useState } from "react";
// import { IoMenuOutline } from "react-icons/io5";
// import img1 from "@/public/sidebar/1.svg";
// import img2 from "@/public/sidebar/2.svg";
// import img3 from "@/public/sidebar/3.svg";
// import img4 from "@/public/sidebar/4.svg";
// import Image from "next/image";
// import Link from "next/link";

// type Route = {
//   name: string;
//   path: string;
//   icon: string;
// };

// const Sidebar: React.FC = () => {
//   const routes: Route[] = [
//     { name: "Messaging", path: "/messaging", icon: img1 },
//     { name: "Chat History", path: "/chat-history", icon: img2 },
//     { name: "Settings", path: "/settings", icon: img3 },
//   ];

//   const [isOpen, setIsOpen] = useState(false);

//   const isBrowser = typeof window !== "undefined";
//   const isRtl = isBrowser && document.documentElement.dir === "rtl";

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden xl:block fixed h-full">
//         <div className="bg-[#D5E7F7] w-[285px] h-[calc(100vh-0px)]  rounded-lg shadow-md overflow-y-auto">
//           <div className="p-2 space-y-2">
//             {routes.map((route, index) => (
//               <Link
//                 key={index}
//                 href={route.path}
//                 className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition"
//               >
//                 <Image
//                   src={route.icon}
//                   alt={route.name}
//                   className="inline-block mr-2"
//                 />
//                 {route.name}
//               </Link>
//             ))}
//             <button className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition">
//               <Image src={img4} alt={"logout"} className="inline-block mr-2" />
//               logout
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Sidebar Toggle */}
//       <div className="xl:hidden flex items-center p-4">
//         <IoMenuOutline
//           className="w-6 h-6 text-gray-600 e cursor-pointer"
//           onClick={() => setIsOpen(true)}
//         />
//       </div>

//       {/* Mobile Drawer */}
//       {isOpen && (
//         <>
//           <div className="fixed inset-0 " onClick={() => setIsOpen(false)} />
//           <div
//             className={`fixed top-4 ${
//               isRtl ? "right-0" : "left-0"
//             } z-50 w-[285px] bg-[#D5E7F7] m-4 rounded-lg shadow-lg h-[calc(100vh-32px)] overflow-y-auto`}
//           >
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-black "
//               onClick={() => setIsOpen(false)}
//             >
//               ✕
//             </button>
//             <div className="p-4 space-y-2 mt-8">
//               {routes.map((route, index) => (
//                 <Link
//                   href={route.path}
//                   key={index}
//                   className="p-2 block rounded hover:bg-gray-100  cursor-pointer transition"
//                 >
//                   <Image
//                     src={route.icon}
//                     alt={route.name}
//                     className="inline-block mr-2"
//                   />
//                   {route.name}
//                 </Link>
//               ))}
//               <button className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition">
//                 <Image
//                   src={img4}
//                   alt={"logout"}
//                   className="inline-block mr-2"
//                 />
//                 logout
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Sidebar;

"use client";

import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import img1 from "@/public/sidebar/1.svg";
import img2 from "@/public/sidebar/2.svg";
import img3 from "@/public/sidebar/3.svg";
import img4 from "@/public/sidebar/4.svg";
import Image from "next/image";
import Link from "next/link";

type Route = {
  name: string;
  path: string;
  icon: string;
};
const SideBar = () => {
  const routes: Route[] = [
    { name: "Messaging", path: "/messaging", icon: img1 },
    { name: "Chat History", path: "/chat-history", icon: img2 },
    { name: "Settings", path: "/settings", icon: img3 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const isBrowser = typeof window !== "undefined";
  const isRtl = isBrowser && document.documentElement.dir === "rtl";

  return (
    <div className="bg-[#D5E7F7] w-64  p-4  h-[100vh]">
      {/* pc version */}
      <div className="hidden xl:block fixed h-full">
        <div className="">
          <div className="p-2 space-y-2">
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition"
              >
                <Image
                  src={route.icon}
                  alt={route.name}
                  className="inline-block mr-2"
                />
                {route.name}
              </Link>
            ))}
            <button className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition">
              <Image src={img4} alt={"logout"} className="inline-block mr-2" />
              logout
            </button>
          </div>
        </div>
      </div>

      <div className="xl:hidden flex items-center p-4">
        <IoMenuOutline
          className="w-6 h-6 text-gray-600 e cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div className="fixed inset-0 " onClick={() => setIsOpen(false)} />
          <div className={`fixed top-4 ${isRtl ? "right-0" : "left-0"} z-50 `}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black "
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="p-4 space-y-2 mt-8">
              {routes.map((route, index) => (
                <Link
                  href={route.path}
                  key={index}
                  className="p-2 block rounded hover:bg-gray-100  cursor-pointer transition"
                >
                  <Image
                    src={route.icon}
                    alt={route.name}
                    className="inline-block mr-2"
                  />
                  {route.name}
                </Link>
              ))}
              <button className="block p-2 rounded cursor-pointer hover:bg-blue-100 transition">
                <Image
                  src={img4}
                  alt={"logout"}
                  className="inline-block mr-2"
                />
                logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
