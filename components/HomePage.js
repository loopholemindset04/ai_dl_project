import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import MobileHomePage from "./MobileHomePage";
import LoginForm from "./LoginForm";

const HomePage = () => {
  return (
    <>
      <MobileHomePage />
      <div className="hidden lg:flex h-screen justify-center mx-10">
        {/* ----------------------Left side div------------------------- */}
        <div className="w-1/2 flex flex-col p-4">
          <div className="h-1/3 flex items-center">
            <Image
              src="/sample_logo(no-bg).png"
              height={100}
              width={100}
              alt="Sample Logo"
            />
            <span className="text-3xl">Sample Name</span>
          </div>
          <div className="h-2/3 flex flex-col p-2 gap-5">
            <span className="text-6xl p-2 font-bold">Sample Name</span>
            <span className="text-2xl p-2">
              Find your Path. Find your People. Get Ahead.
            </span>
          </div>
        </div>

        {/* ----------------------Right side div------------------------- */}
        <div className="flex w-1/2 items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default HomePage;
