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
    className={`px-4 py-2 rounded-full text-gray-300 border border-2 ${isSelected ? "border-blue-500" : "border-gray-500 hover:border-white"}`}
    onClick={() => onClick(name)}
  >
    {name}
  </button>
);

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const ExperienceSection: React.FC = () => {
  const [category, setCategory] = useState<string>("All");
  const filteredExperience = experienceData.filter(
    (exp: Experience) => category === "All" || exp.category === category
  );

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-t from-gray-900 to-black text-white">
        <main className="container mx-auto px-8 md:px-10 lg:px-12 xl:px-16 drop-shadow-xl mb-10">
          <h1 className="text-center text-5xl font-bold mb-8 mt-14">Experience</h1>
          <p className="text-center text-gray-400">I&apos;m actively searching for entry-level software engineer roles starting January 2025.</p>
          <p className="text-center text-gray-400">Interested in hiring me? View my <a href="/files/resume.pdf" target="_blank" className="underline hover:text-white">Resume</a> or connect with me on <a href="https://linkedin.com/in/conneryin" target="_blank" className="underline hover:text-white">LinkedIn</a></p>
          <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6 mt-6">
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
          <ul className="grid md:grid-cols-2 lg:grid-cols-3">
            {filteredExperience.map((exp, index) => (
              <motion.li 
                key={index} 
                className="flex flex-col md:flex-row items-center gap-4 mx-auto rounded-lg border border-transparent w-full h-full px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                  <Image
                    src={exp.companylogo}
                    alt={exp.company}
                    width={128}
                    height={128}
                    quality={100}
                    layout="responsive"
                  />
                </div>
                <div className="flex-grow" style={{ minWidth: '200px' }}> {/* Fixed width */}
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-xl">{exp.role}</p>
                  <p className="text-sm opacity-50">{exp.period}</p>
                  <p className="text-sm opacity-50">{exp.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default ExperienceSection;
