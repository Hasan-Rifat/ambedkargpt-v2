/* eslint-disable react-hooks/exhaustive-deps */
// import Heading from "@/src/components/shared/Heading";
// import React from "react";
// import icon from "@/public/home/person.jpg"; // Adjust the path as necessary
// import Image from "next/image";
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { BsArrowRightCircle } from "react-icons/bs";
// import { RxDotsHorizontal } from "react-icons/rx";

// const MeetOurTeam = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Kinjalk Singh",
//       role: "Founder",
//     },
//     {
//       id: 2,
//       name: "Tanmay Singh Rana",
//       role: "CEO",
//     },
//     {
//       id: 3,
//       name: "Mayank Kulshrestha",
//       role: "Full Stack Developer",
//     },
//   ];
//   return (
//     <section className="py-[100px]">
//       <div className="container">
//         <div>
//           <Heading
//             title="Meet Our Team"/*  */
//             description="Ambedkarite Innovators: Uplifting Bahujan with Skills"
//           />
//           <div className="grid grid-cols-3 gap-9">
//             {teamMembers.map((member) => (
//               <div
//                 style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
//                 key={member.id}
//                 className="rounded-2xl bg-white flex  gap-4 items-center p-3"
//               >
//                 <div>
//                   <Image
//                     width={88}
//                     height={88}
//                     src={icon}
//                     alt="icon"
//                     className="w-[100px] h-[100px] rounded-full mb-4"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-black text-2xl font-bold mt-2 ">
//                     {member.name}
//                   </h3>
//                   <p className="text-[#039] text-xl font-semibold mt-1 ">
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-center my-5 gap-4">
//             <div>
//               <BsArrowLeftCircle size={35} />
//             </div>
//             <div>
//               <RxDotsHorizontal size={35} />
//             </div>
//             <div>
//               <BsArrowRightCircle size={35} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetOurTeam;

// "use client";
// import React, { useState, useEffect } from "react";
// import Heading from "@/src/components/shared/Heading";
// import Image from "next/image";
// import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
// import { RxDotsHorizontal } from "react-icons/rx";

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
// }

// const MeetOurTeam: React.FC = () => {
//   const teamMembers: TeamMember[] = [
//     {
//       id: 1,
//       name: "Kriplak Singh",
//       role: "Founder",
//     },
//     {
//       id: 2,
//       name: "Tamnoy Singh Rana",
//       role: "CEO",
//     },
//     {
//       id: 3,
//       name: "Meyarur Kulahrestha",
//       role: "Full Stack Developer",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
//   const itemsPerPage = 3;
//   const itemGap = 37; // 37px gap between items

//   const nextSlide = (): void => {
//     if (currentIndex < teamMembers.length - itemsPerPage) {
//       setCurrentIndex((prev) => prev + 1);
//     } else {
//       setTransitionEnabled(false);
//       setCurrentIndex(0);
//       setTimeout(() => setTransitionEnabled(true), 50);
//     }
//   };

//   const prevSlide = (): void => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     } else {
//       setTransitionEnabled(false);
//       setCurrentIndex(teamMembers.length - itemsPerPage);
//       setTimeout(() => setTransitionEnabled(true), 50);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <section className="py-[100px] overflow-hidden ">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <Heading
//             title="Meet Our Team" /*  */
//             description="Ambedkarite Innovators: Uplifting Bahujan with Skills"
//           />
//         </div>

//         <div className="relative overflow-hidden">
//           <div
//             //    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
//             //                 key={member.id}
//             //                 className="rounded-2xl bg-white flex  gap-4 items-center p-3"
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(calc(-${
//                 currentIndex * (100 / itemsPerPage)
//               }% - ${currentIndex * itemGap}px))`,
//               transition: transitionEnabled
//                 ? "transform 500ms ease-in-out"
//                 : "none",
//               gap: `${itemGap}px`,
//               boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
//             }}
//           >
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4

//                 "
//               >
//                 <div className="bg-white p-4 flex items-center rounded-2xl gap-5">
//                   <div className=" w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
//                     <Image
//                       width={96}
//                       height={96}
//                       src="/home/person.jpg"
//                       alt={member.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">
//                       {member.name}
//                     </h3>
//                     <p className="text-lg text-blue-900">{member.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-8 space-x-4">
//           <button
//             onClick={prevSlide}
//             className="text-gray-700 hover:text-blue-600 transition-colors"
//             aria-label="Previous team members"
//           >
//             <BsArrowLeftCircle size={32} />
//           </button>
//           <div className="text-gray-500">
//             <RxDotsHorizontal size={32} />
//           </div>
//           <button
//             onClick={nextSlide}
//             className="text-gray-700 hover:text-blue-600 transition-colors"
//             aria-label="Next team members"
//           >
//             <BsArrowRightCircle size={32} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetOurTeam;
"use client";
import React, { useState, useEffect } from "react";
import Heading from "@/src/components/shared/Heading";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

const MeetOurTeam: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Kriplak Singh",
      role: "Founder",
    },
    {
      id: 2,
      name: "Tamnoy Singh Rana",
      role: "CEO",
    },
    {
      id: 3,
      name: "Meyarur Kulahrestha",
      role: "Full Stack Developer",
    },
    // Add more team members if needed
    {
      id: 4,
      name: "Member 4",
      role: "Role 4",
    },
    {
      id: 5,
      name: "Member 5",
      role: "Role 5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [transitionEnabled, setTransitionEnabled] = useState<boolean>(true);
  const itemsPerPage = 3;
  const itemGap = 37; // 37px gap between items

  // Calculate total number of slides
  const totalSlides = Math.ceil(teamMembers.length / itemsPerPage);

  const nextSlide = (): void => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setTransitionEnabled(false);
      setCurrentIndex(0);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  const prevSlide = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setTransitionEnabled(false);
      setCurrentIndex(totalSlides - 1);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heading
            title="Meet Our Team"
            description="Ambedkarite Innovators: Uplifting Bahujan with Skills"
          />
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${
                currentIndex * (100 / itemsPerPage)
              }% - ${currentIndex * itemGap}px))`,
              transition: transitionEnabled
                ? "transform 500ms ease-in-out"
                : "none",
              gap: `${itemGap}px`,
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-4"
              >
                <div className="bg-white p-4 flex items-center rounded-2xl gap-5">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      width={96}
                      height={96}
                      src="/home/person.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-blue-900">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-4 items-center">
          <button
            onClick={prevSlide}
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Previous team members"
          >
            <BsArrowLeftCircle size={32} />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Next team members"
          >
            <BsArrowRightCircle size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
