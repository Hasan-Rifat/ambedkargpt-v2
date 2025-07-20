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
            <Link href={"/sign-up"} className="text-[#666] text-center">
              Sing Up
            </Link>
            <Link
              href={"/login"}
              className="text-[#039] border-b border-b-[#039] text-center pb-3"
            >
              Login
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="mt-10  flex flex-col gap-6">
            <Input name="email" placeholder="Email" type="text" />
            <Input name="password" type="password" placeholder="Password" />
            <div className="flex flex-wrap justify-between">
              <div>
                <input
                  type="checkbox"
                  className="mr-2"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label htmlFor="rememberMe" className="text-sm text-[#000]">
                  Remember me
                </label>
              </div>
              <div>
                <Link
                  href={"/"}
                  className="text-[#D93F21]
              text-sm font-light"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <PrimaryButton type="submit" className="!rounded-[10px] w-full">
              Login
            </PrimaryButton>
          </form>

          <div>
            <p className="text-center mt-6 text-sm text-[#666]">
              <span className="mr-3">New here?</span>
              <Link href={"/auth/signup"} className="text-[#039]">
                Create an Account
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
