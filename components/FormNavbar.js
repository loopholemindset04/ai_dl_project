import React, { useContext, useState } from "react";
import { stepContext } from "@/app/user-form/page";

const FormNavbar = () => {
  let { step, setStep } = useContext(stepContext);
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!IsOpen);

  // console.log(step);

  return (
    <>
      <div>
        <ul className="hidden md:flex justify-around p-4 text-white bg-[#02572d] rounded-b-lg text-xl text-center">
          <li className={`p-1${step === 1 ? " text-lime-300" : ""}`}>
            <button
              onClick={() => {
                setStep(1);
              }}
            >
              Personal Info
            </button>
          </li>
          <li className={`p-1${step === 2 ? " text-lime-300" : ""}`}>
            <button
              onClick={() => {
                setStep(2);
              }}
            >
              Skills
            </button>
          </li>
          <li className={`p-1${step === 3 ? "  text-lime-300" : ""}`}>
            <button
              onClick={() => {
                setStep(3);
              }}
            >
              Experience
            </button>
          </li>
          <li className={`p-1${step === 4 ? " text-lime-300" : ""}`}>
            <button
              onClick={() => {
                setStep(4);
              }}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>

      <div className="md:hidden p-4 bg-[#02572d]">
        <button onClick={toggleMenu}>
          {!IsOpen ? (
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          )}
        </button>
        {IsOpen && (
          <div className="bg-[#02572d] text-white text-xl absolute left-0 p-4 w-full">
            <ul>
              <li className={`p-1${step === 1 ? " text-lime-300" : ""}`}>
                <button
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Personal Info
                </button>
              </li>
              <li className={`p-1${step === 2 ? " text-lime-300" : ""}`}>
                <button
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Skills
                </button>
              </li>
              <li className={`p-1${step === 3 ? "  text-lime-300" : ""}`}>
                <button
                  onClick={() => {
                    setStep(3);
                  }}
                >
                  Experience
                </button>
              </li>
              <li className={`p-1${step === 4 ? " text-lime-300" : ""}`}>
                <button
                  onClick={() => {
                    setStep(4);
                  }}
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default FormNavbar;
