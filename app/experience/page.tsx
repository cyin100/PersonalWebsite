"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../../components/navbar";
import { motion } from "framer-motion";
import experienceData from './experience.json'; // Importing data from JSON file

interface Experience {
  company: string;
  role: string;
  category: string;
  period: string;
  description: string;
  companylogo: string;
}

interface ExperienceTagProps {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

const ExperienceTag: React.FC<ExperienceTagProps> = ({ name, isSelected, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full ${isSelected ? "bg-blue-500" : "bg-gray-500"}`}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

const ExperienceSection: React.FC = () => {
  const [category, setCategory] = useState<string>("All");
  const filteredExperience = experienceData.filter(
    (exp: Experience) => category === "All" || exp.category === category
  );

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-900 text-white">
      <NavBar/>

      <section id="experience">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Experience
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ExperienceTag
            onClick={handleCategoryChange}
            name="All"
            isSelected={category === "All"}
          />
          <ExperienceTag
            onClick={handleCategoryChange}
            name="Professional"
            isSelected={category === "Professional"}
          />
          <ExperienceTag
            onClick={handleCategoryChange}
            name="Leadership"
            isSelected={category === "Leadership"}
          />
          <ExperienceTag
            onClick={handleCategoryChange}
            name="Other"
            isSelected={category === "Other"}
          />
        </div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredExperience.map((exp, index) => (
            <motion.li
              key={index}
              // ... your animation variants ...
            >
              <div className="mb-4">
                <Image
                  src={exp.companylogo}
                  alt={exp.company}
                  width={128}
                  height={128}
                  quality={100}
                />
              </div>
              <h3 className="text-2xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className="text-sm opacity-50">{exp.period}</p>
              <p className="text-sm opacity-50">{exp.description}</p>
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ExperienceSection;
