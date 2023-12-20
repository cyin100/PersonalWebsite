import Image from 'next/image';
import React from 'react';
import NavBar from '../../components/navbar';
import projectsData from './projects.json'; // Update the path

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-gray-900 text-white">
      <NavBar/>

      <main className="container mx-auto px-6 text-center drop-shadow-xl mb-10">
        
        <h1 className="text-5xl font-bold mb-8 mt-14">
          <span>Projects</span>
        </h1>

        <p className="text-gray-400">Click on a project to learn more and view its GitHub repository and live demo if available.</p>
        <p className="text-gray-400">Alternatively, you can view my entire <a href="https://github.com/cyin100" target="_blank" className="underline hover:text-white">GitHub Profile</a></p>

        <div className="mt-4 mb-6 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mx-auto">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`} 
              className="group flex flex-col justify-center items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 sm:items-start sm:text-left"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden w-full h-48 mx-auto mb-6 mt-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={160}
                  quality={100}
                />
              </div>
              <h2 className="mb-3 text-2xl font-semibold text-center sm:text-left">
                {project.title} <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
