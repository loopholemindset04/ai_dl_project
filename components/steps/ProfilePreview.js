import React from "react";

const ProfilePreview = ({ data }) => {
  const { personal, skills, experience, projects } = data;

  const renderSection = (title, content, data) => {
    const hasData = Array.isArray(data)
      ? data.length > 0
      : data && Object.keys(data).length > 0;
    if (!hasData) return null;

    return (
      <div className="my-10">
        <h2 className="text-2xl font-semibold text-[#02572d] border-b-2 border-gray-200 pb-2 mb-4">
          {title}
        </h2>
        {content}
      </div>
    );
  };

  return (
    // The background class has been removed from this container
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        {/* --- Header with Personal Info (Updated) --- */}
        <div className="text-center border-b-2 border-gray-200 pb-7 mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#02572d]">
            {personal.name || "Your Name"}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-600 mt-4">
            <span>{personal.email}</span>
            {personal.phone && <span>&bull;</span>}
            <span>{personal.phone}</span>
            {/* Added Address */}
            {personal.address && <span>&bull;</span>}
            <span>{personal.address}</span>
          </div>
          {/* Added LinkedIn URL */}
          {personal.linkedin_url && (
            <a
              href={personal.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-3 block font-medium"
            >
              View LinkedIn Profile
            </a>
          )}
        </div>

        {/* --- Skills Section --- */}
        {renderSection(
          "Skills",
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#02572d] text-white px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>,
          skills
        )}

        {/* --- Experience Section --- */}
        {renderSection(
          "Experience",
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="pl-4 border-l-4 border-[#02572d]">
                <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                <p className="text-md font-semibold text-gray-700">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 italic">{exp.duration}</p>
              </div>
            ))}
          </div>,
          experience
        )}

        {/* --- Projects Section --- */}
        {renderSection(
          "Projects",
          <div className="space-y-6">
            {projects.map((proj, index) => (
              <div key={index} className="pl-4 border-l-4 border-gray-300">
                <h3 className="text-xl font-bold text-gray-800">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mt-1">{proj.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="font-semibold">Tech Stack:</span>{" "}
                  {proj.techStack}
                </p>
              </div>
            ))}
          </div>,
          projects
        )}
      </div>
    </div>
  );
};

export default ProfilePreview;
