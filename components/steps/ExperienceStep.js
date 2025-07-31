import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ExperienceStep = ({ data, nextStep, prevStep, updateData }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      experiences: data?.length
        ? data
        : [
            {
              company: "",
              role: "",
              duration: "",
            },
          ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (formData) => {
    const cleaned = formData.experiences.filter(
      (exp) =>
        exp.company.trim() !== "" &&
        exp.role.trim() !== "" &&
        exp.duration.trim() !== ""
    );
    updateData(cleaned);
    nextStep();
  };

  const onBack = (formData) => {
    const cleaned = formData.experiences.filter(
      (exp) =>
        exp.company.trim() !== "" &&
        exp.role.trim() !== "" &&
        exp.duration.trim() !== ""
    );
    updateData(cleaned);
    prevStep();
  };

  return (
    <div className="flex flex-col items-center justify-baseline mt-20 gap-10">
      <h1 className="text-4xl font-bold mx-5 text-center">
        Share Your Experience
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col w-4/5 md:w-3/5 lg:w-2/5"
      >
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border border-gray-300 bg-[#f2f2f2] p-4 rounded-lg space-y-4 relative"
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Experience #{index + 1}
            </h3>
            <input
              {...register(`experiences.${index}.company`)}
              placeholder="Company"
              className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
            />
            <input
              {...register(`experiences.${index}.role`)}
              placeholder="Role"
              className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
            />
            <input
              {...register(`experiences.${index}.duration`)}
              placeholder="Duration (e.g., Jan 2022 – Present)"
              className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
            />
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-2 right-2 bg-[#c64227] text-white px-3 py-1 rounded-lg text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({ company: "", role: "", duration: "" })}
          className="bg-[#02572d] text-white px-6 py-2 rounded-lg w-fit self-start"
        >
          + Add Experience
        </button>

        <div className="flex gap-4 pt-4 justify-center">
          <button
            type="button"
            onClick={handleSubmit(onBack)}
            className="bg-[#02572d] text-white px-8 py-2 rounded-lg"
          >
            Prev
          </button>
          <button
            type="submit"
            className="bg-[#02572d] text-white px-8 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceStep;
