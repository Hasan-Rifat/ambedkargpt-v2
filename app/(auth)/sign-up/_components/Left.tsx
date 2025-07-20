"use client";
import React from "react";
import Title from "../../_components/Title";
import SubTitle from "../../_components/SubTitle";
import Text from "../../_components/Text";
import Input from "@/src/components/Input";
import PrimaryButton from "@/src/components/shared/PrimaryButton";
import Link from "next/link";
import SocialAuth from "../../_components/SocialAuth";

const Left = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="bg-[#F2F6FF] w-full h-full">
      <div className="max-w-[450px] mx-auto">
        <div className=" pt-[100px] pb-10">
          <Title text={"AmbedkarGPT"} className="text-center" />
          <SubTitle
            className="mt-2 text-center"
            text={"Join AmbedkarGPT Today!"}
          />
          <Text className="mt-4 text-center">
            Access knowledge. Engage with Bheem ChatBOT.
          </Text>
        </div>
        <div className="mt-20">
          <div className="mt-10 grid grid-cols-2 text-base font-medium ">
            <Link
              href={"/"}
              className="text-[#039] border-b border-b-[#039] text-center pb-3"
            >
              Sing Up
            </Link>
            <Link href={"/login"} className="text-[#666] text-center">
              Login
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="mt-10  flex flex-col gap-6">
            <Input name="name" placeholder="Full Name" type="text" />

            <Input name="email" placeholder="Email" type="email" />

            <Input name="phoneNumber" placeholder="Phone Number" type="text" />

            <Input name="country" placeholder="Country" type="text" />

            <Input name="city" placeholder="City" type="text" />

            <Input name="password" type="password" placeholder="Password" />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

            <div className="flex flex-wrap justify-between">
              <div>
                <input
                  type="checkbox"
                  className="mr-2"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label htmlFor="rememberMe" className="text-sm text-[#000]">
                  I agree to the{" "}
                  <span className="text-accent"> terms of use policy</span>
                </label>
              </div>
            </div>
            <PrimaryButton type="submit" className="!rounded-[10px] w-full">
              Sing Up
            </PrimaryButton>
          </form>

          <div>
            <p className="text-center mt-6 text-sm text-[#666]">
              <span className="mr-2"> Have an account?</span>
              <Link href={"/auth/signup"} className="text-[#039]">
                Please Login
              </Link>
            </p>
          </div>

          <SocialAuth />
        </div>
      </div>
    </div>
  );
};

export default Left;
