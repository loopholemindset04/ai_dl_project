import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#fff] hidden lg:block">
      <div className=" lg:flex lg:justify-between lg:p-4 lg:mx-10">
        <h1 className="text-2xl font-bold">Logo</h1>
        <ul
          className="flex  justify-between
         items-center gap-5"
        >
          <li>
            <button className="border border-[#9e9e9e] p-2 rounded-xl">
              Join Now
            </button>
          </li>
          <li>
            <button className="border border-[#9e9e9e] p-2 rounded-xl">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
