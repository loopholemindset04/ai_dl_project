import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const ProjectStep = ({ data, prevStep, updateData, nextStep }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      projects: data?.length
        ? data
        : [
            {
              title: "",
              description: "",
              techStack: "",
            },
          ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (formData) => {
    const cleaned = formData.projects.filter(
      (p) =>
        p.title.trim() !== "" &&
        p.description.trim() !== "" &&
        p.techStack.trim() !== ""
    );
    updateData(cleaned);
    nextStep();
  };

  const onBack = (formData) => {
    const cleaned = formData.projects.filter(
      (p) =>
        p.title.trim() !== "" &&
        p.description.trim() !== "" &&
        p.techStack.trim() !== ""
    );
    updateData(cleaned);
    prevStep();
  };

  return (
    <div className="flex flex-col items-center justify-baseline mt-20 gap-10">
      <h1 className="text-4xl font-bold mx-5 text-center">
        Showcase Your Projects
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
              Project #{index + 1}
            </h3>
            <input
              {...register(`projects.${index}.title`)}
              placeholder="Project Title"
              className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
            />
            <textarea
              {...register(`projects.${index}.description`)}
              placeholder="Short Description"
              className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
              rows="3"
            />
            <input
              {...register(`projects.${index}.techStack`)}
              placeholder="Tech Stack (e.g., React, Node.js, Firebase)"
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
          onClick={() => append({ title: "", description: "", techStack: "" })}
          className="bg-[#02572d] text-white px-6 py-2 rounded-lg w-fit self-start"
        >
          + Add Project
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
            Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectStep;
