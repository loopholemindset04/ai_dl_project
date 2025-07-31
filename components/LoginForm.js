"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (isRegister) {
      console.log("Register Data:", data);
    } else {
      console.log("Login Data:", data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="w-full min-w-[343px] lg:min-w-[400px] max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-gray-800 text-3xl font-semibold mb-8">
            {isRegister ? "Register" : "Sign In"}
          </h2>

          <div className="space-y-6">
            {isRegister && (
              <div>
                <label className="text-sm text-gray-700 font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="bg-gray-50 w-full text-sm text-gray-800 px-4 py-3 rounded-md border border-gray-300 focus:border-[#02572d] focus:bg-white transition"
                  placeholder="Enter Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required</p>
                )}
              </div>
            )}

            <div>
              <label className="text-sm text-gray-700 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="bg-gray-50 w-full text-sm text-gray-800 px-4 py-3 rounded-md border border-gray-300 focus:border-[#02572d] focus:bg-white transition"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium mb-2 block">
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="bg-gray-50 w-full text-sm text-gray-800 px-4 py-3 rounded-md border border-gray-300 focus:border-[#02572d] focus:bg-white transition"
                placeholder="Enter Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            {!isRegister && (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded bg-gray-100"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition font-medium"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#02572d] rounded-lg hover:bg-[#67305e] focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
            >
              {isRegister ? "Register" : "Sign In"}
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-500 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="text-center mb-5">
            <span className="text-[#484848]">
              {isRegister ? "Already registered?" : "New to the site?"}{" "}
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 transition font-medium"
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? "Sign In" : "Register here"}
              </button>
            </span>
          </div>

          {/* Social Icons */}
          <div className="space-x-6 flex justify-center">
            {/* Google */}
            <button type="button" className="cursor-pointer">
              <svg
                className="w-6 h-6 hover:scale-125 transition-transform"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#fbbd00" d="M120 256..." />
                {/* (Add full path like in your original SVG) */}
              </svg>
            </button>
            {/* LinkedIn */}
            <button type="button" className="cursor-pointer">
              <svg
                className="w-6 h-6 hover:scale-125 transition-transform"
                viewBox="0 -2 44 44"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#007EBB" d="M746,305..." />
              </svg>
            </button>
            {/* GitHub */}
            <button type="button" className="cursor-pointer">
              <svg
                className="w-6 h-6 text-gray-800 hover:scale-125 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.006 2a9.847..." />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
