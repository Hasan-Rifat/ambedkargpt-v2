import Link from "next/link";
import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function Header() {
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

  return (
    <header className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <span>A</span>mbedkarGPT
            </Link>
          </div>
          <div>
            <nav
              className="bg-[rgba(255,255,255,0.50)] rounded-[50px] py-2 px-6 "
              style={{
                boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
                backdropFilter: "blur(4.05px)",
              }}
            >
              <ul className="flex space-x-4">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <PrimaryButton>Donate Now</PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}
