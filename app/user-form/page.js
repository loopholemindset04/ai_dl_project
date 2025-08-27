"use client";

import PersonalStep from "@/components/steps/PersonalStep";
import SkillsStep from "@/components/steps/SkillsStep";
import ExperienceStep from "@/components/steps/ExperienceStep";
import ProjectStep from "@/components/steps/ProjectStep";
import React, { createContext, useState } from "react";
import FormNavbar from "@/components/FormNavbar";
import ProfilePreview from "@/components/steps/ProfilePreview";
import { useRouter } from "next/navigation";

const stepContext = createContext();

const UserProfile = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [formData, setFormData] = useState({
    personal: {},
    skills: [],
    experience: [],
    projects: [],
  });

  const submitData = async () => {
    try {
      const response = await fetch("api/fetch_user_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (result.acknowledged) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const updateSection = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
    console.log(data);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalStep
            data={formData.personal}
            nextStep={nextStep}
            prevStep={prevStep}
            updateData={(data) => updateSection("personal", data)}
          />
        );
      case 2:
        return (
          <SkillsStep
            data={formData.skills}
            nextStep={nextStep}
            prevStep={prevStep}
            updateData={(data) => updateSection("skills", data)}
          />
        );
      case 3:
        return (
          <ExperienceStep
            data={formData.experience}
            nextStep={nextStep}
            prevStep={prevStep}
            updateData={(data) => updateSection("experience", data)}
          />
        );
      case 4:
        return (
          <ProjectStep
            data={formData.projects}
            prevStep={prevStep}
            updateData={(data) => updateSection("projects", data)}
            nextStep={nextStep}
          />
        );
      default:
        console.log(formData);

        return (
          <div>
            <ProfilePreview data={formData} submitData={submitData} />
          </div>
        );
    }
  };

  return (
    <>
      <stepContext.Provider value={{ step, setStep }}>
        <FormNavbar />
      </stepContext.Provider>
      <div>{renderStep()}</div>
    </>
  );
};

export default UserProfile;
export { stepContext };
