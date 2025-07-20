// /* import Link from "next/link";
// import React from "react";
// import PrimaryButton from "./PrimaryButton";

// export default function Header() {
//   const routes: Array<{
//     path: string;
//     name: string;
//   }> = [
//     {
//       path: "/",
//       name: "Home",
//     },
//     {
//       path: "/about-us",
//       name: "About Us",
//     },
//     {
//       path: "/news",
//       name: "News",
//     },
//     {
//       path: "/work-with-us",
//       name: "Work With Us",
//     },
//     {
//       path: "/contact-us",
//       name: "Contact us",
//     },
//   ];

//   return (
//     <header className="py-5">
//       <div className="container">
//         <div className="flex items-center justify-between">
//           <div>
//             <Link href="/">
//               <span>A</span>mbedkarGPT
//             </Link>
//           </div>
//           <div>
//             <nav
//               className="bg-[rgba(255,255,255,0.50)] rounded-[50px] py-2 px-6 "
//               style={{
//                 boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
//                 backdropFilter: "blur(4.05px)",
//               }}
//             >
//               <ul className="flex space-x-4">
//                 {routes.map((route) => (
//                   <li key={route.path}>
// <sp className={`${isActive(route.path) ? " border-b border-b-primary" :"border-b border-b-transparent"}`}an>
// </sp>                    <Link href={route.path}>
// {route.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//           <div>
//             <PrimaryButton>Donate Now</PrimaryButton>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
//  */

// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import PrimaryButton from "./PrimaryButton";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const routes: Array<{
//     path: string;
//     name: string;
//   }> = [
//     {
//       path: "/",
//       name: "Home",
//     },
//     {
//       path: "/about-us",
//       name: "About Us",
//     },
//     {
//       path: "/news",
//       name: "News",
//     },
//     {
//       path: "/work-with-us",
//       name: "Work With Us",
//     },
//     {
//       path: "/contact-us",
//       name: "Contact us",
//     },
//   ];

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header className="py-5 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="text-xl font-bold">
//               <span className="text-primary">A</span>mbedkarGPT
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <nav
//               className="bg-[rgba(255,255,255,0.50)] rounded-[50px] py-2 px-6"
//               style={{
//                 boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
//                 backdropFilter: "blur(4.05px)",
//               }}
//             >
//               <ul className="flex space-x-4">
//                 {routes.map((route) => (
//                   <li key={route.path}>
//                     <Link
//                       href={route.path}
//                       className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
//                     >
// <sp className={`${isActive(route.path) ? " border-b border-b-primary" :"border-b border-b-transparent"}`}an>
// </sp>
// {route.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Donate Button - Desktop */}
//           <div className="hidden lg:block">
//             <PrimaryButton>Donate Now</PrimaryButton>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={toggleMobileMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden mt-4">
//             <nav className="bg-white rounded-lg shadow-lg p-4">
//               <ul className="space-y-2">
//                 {routes.map((route) => (
//                   <li key={route.path}>
//                     <Link
//                       href={route.path}
//                       className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
// <sp className={`${isActive(route.path) ? " border-b border-b-primary" :"border-b border-b-transparent"}`}an>
// </sp>
// {route.name}
//                     </Link>
//                   </li>
//                 ))}
//                 <li className="pt-2">
//                   <PrimaryButton>Donate Now</PrimaryButton>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const routes: Array<{
    path: string;
    name: string;
  }> = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about-us",
      name: "About Us",
    },
    {
      path: "/news",
      name: "News",
    },
    {
      path: "/work-with-us",
      name: "Work With Us",
    },
    {
      path: "/contact-us",
      name: "Contact us",
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if route is active
  const isActive = (path: string) => {
    return pathname === path || (path !== "/" && pathname.startsWith(path));
  };

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">A</span>mbedkarGPT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav
              className="bg-[rgba(255,255,255,0.50)] rounded-[50px] py-2 px-6"
              style={{
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(4.05px)",
              }}
            >
              <ul className="flex space-x-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(route.path)
                          ? "text-primary font-semibold"
                          : "text-gray-700 hover:text-primary"
                      }`}
                    >
                      <span
                        className={`${
                          isActive(route.path)
                            ? " border-b border-b-primary"
                            : "border-b border-b-transparent"
                        }`}
                      >
                        {route.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Donate Button - Desktop */}
          <div className="hidden lg:block">
            <PrimaryButton>Donate Now</PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4">
            <nav className="bg-white rounded-lg shadow-lg p-4">
              <ul className="space-y-2">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive(route.path)
                          ? "text-primary font-semibold bg-blue-50"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span
                        className={`${
                          isActive(route.path)
                            ? " border-b border-b-primary"
                            : "border-b border-b-transparent"
                        }`}
                      >
                        {route.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <PrimaryButton>Donate Now</PrimaryButton>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
