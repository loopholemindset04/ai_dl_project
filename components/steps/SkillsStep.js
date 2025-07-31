import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const SkillsStep = ({ data, nextStep, prevStep, updateData }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      skills: data?.length
        ? data.map((skill) => ({ name: skill }))
        : [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (formData) => {
    const skillList = formData.skills
      .map((skill) => skill.name.trim())
      .filter((s) => s !== "");
    updateData(skillList);
    nextStep();
  };

  const onBack = (formData) => {
    const skillList = formData.skills
      .map((skill) => skill.name.trim())
      .filter((s) => s !== "");
    updateData(skillList);
    prevStep();
  };

  return (
    <div className="flex flex-col items-center justify-baseline mt-20 gap-10">
      <h1 className="text-4xl font-bold mx-5 text-center">
        What Are Your Skills?
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col w-4/5 md:w-3/5 lg:w-2/5"
      >
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-3 items-center">
              <input
                {...register(`skills.${index}.name`, { required: true })}
                placeholder={`Skill #${index + 1}`}
                className="bg-[#fff] border border-[#02572d] px-3 py-2 w-full rounded-lg focus:outline-none"
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="bg-[#c64227] text-white px-4 py-2 rounded-lg"
                >
                  X
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => append({ name: "" })}
          className="bg-[#02572d] text-white px-6 py-2 rounded-lg w-fit self-start"
        >
          + Add Skill
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

export default SkillsStep;
