import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileHomePage = () => {
  return (
    <>
      <div className="lg:hidden min-h-screen flex flex-col justify-evenly items-center">
        {/* -----------------------------Top Section----------------------------------- */}
        <div className="flex flex-col items-center">
          <Image
            src="/sample_logo(no-bg).png"
            height={100}
            width={120}
            alt="Sample Logo"
          />
          <h1 className="text-4xl font-bold p-2">Sample Name</h1>
        </div>

        {/* -----------------------------Middle Section----------------------------------- */}

        <div className=" flex items-center p-4 mx-2">
          <h1 className="text-6xl font-bold text-left">
            Find your Path.
            <br />
            Find your People.
            <br />
            Get Ahead.
          </h1>
        </div>
        <div className="w-full flex flex-col items-center m-2 my-4">
          <Link href="/login" className="w-1/3">
            <button className="w-full border border-[#9e9e9e] bg-[#02572d] text-white p-7 py-2 rounded-xl text-xl">
              Try Now
            </button>
          </Link>
        </div>

        {/* -----------------------------Bottom Section----------------------------------- */}

        {/* <hr className="w-full h-0.5 bg-slate-400 border-0" />
      <div className="text-lg flex flex-col justify-center m-2 my-4">
        <span>Don't have an account?</span>
        <Link href="/signup" className="text-center text-[#536480]">
          Sign Up Now
        </Link>
      </div> */}
      </div>
    </>
  );
};

export default MobileHomePage;
