import React from "react";
import { useForm } from "react-hook-form";

const PersonalStep = ({ data, nextStep, updateData,  }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data || {},
  });

  const onSubmit = (formData) => {
    updateData(formData); // Save to parent
    nextStep(); // Move to next step
  };

  return (
    <div className="flex flex-col items-center justify-baseline mt-20 gap-20">
      <h1 className="text-4xl font-bold mx-5 text-center">
        Enter your Personal Details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col w-[65%] md:w-6/10 lg:w-3/10"
      >
        {/* ----------------Full Name------------------- */}
        <div>
          <label className="block">Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="bg-[#fff] border border-[#02572d] px-2 py-1 w-full rounded-lg focus:outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* ----------------Email------------------- */}
        <div>
          <label className="block">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            className="bg-[#fff] border border-[#02572d] px-2 py-1 w-full rounded-lg focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* ----------------Phone Number------------------- */}
        <div>
          <label className="block">Phone</label>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
            className="bg-[#fff] border border-[#02572d] px-2 py-1 w-full rounded-lg focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* ----------------Address------------------- */}
        <div>
          <label className="block">Address</label>
          <input
            {...register("address", {
              required: "Address is required",
            })}
            className="bg-[#fff] border border-[#02572d] px-2 py-1 w-full rounded-lg focus:outline-none"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        {/* ----------------LinkedIn URL------------------- */}
        <div>
          <label className="block">LinkedIn URL(optional)</label>
          <input
            {...register("linkedin_url", {
              pattern: {
                value: /^https:\/\/(www\.)?linkedin\.com\/.*$/i,
                message:
                  "Enter a valid LinkedIn URL (must start with https://linkedin.com/)",
              },
            })}
            className="bg-[#fff] border border-[#02572d] px-2 py-1 w-full rounded-lg focus:outline-none"
          />
          {errors.linkedin_url && (
            <p className="text-red-500">{errors.linkedin_url.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#02572d] text-white p-8 py-2 rounded-lg my-3 w-fit self-center"
        >
          Next
        </button>
        
      </form>
    </div>
  );
};

export default PersonalStep;
