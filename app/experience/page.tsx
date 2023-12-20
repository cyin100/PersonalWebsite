import React from 'react';
import NavBar from '../../components/navbar';
import experienceData from './experience.json'; // Make sure to have experience.json file

export default function Experience() {
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-900 to-gray-800 text-white">
        <main className="container mx-auto px-6 text-center drop-shadow-xl mb-10">
          
          <h1 className="text-5xl font-bold mb-8 mt-14">
            <span>Experience</span>
          </h1>

          <p className="text-gray-400 mb-4">Here are some of the roles I&apos;ve held and projects I&apos;ve worked on. For more details, you can connect with me on <a href="https://linkedin.com/in/your-linkedin" className="underline hover:text-white">LinkedIn</a>.</p>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left mx-auto">
            {experienceData.map((experience, index) => (
              <div key={index} className="group rounded-lg border border-gray-300 p-4 hover:bg-gray-100 hover:dark:bg-neutral-800/30 transition-colors">
                <h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
                <h4 className="text-xl mb-2">{experience.company}</h4>
                <p className="text-gray-400 text-sm">{experience.period}</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {experience.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm hover:text-gray-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
