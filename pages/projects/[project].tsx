import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import NavBar from '../../components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import projectsData from '../../app/projects/projects-detailed.json';

type ProjectDetailsType = {
  id: string;
  title: string;
  creationDate?: string;
  description: string;
  tags?: string[];
  logo?: string | null;
  images?: string[];
  links: {
    [key: string]: string;
  };
} | null;

const ProjectPage = () => {
  const router = useRouter();
  const { project } = router.query;
  const [projectDetails, setProjectDetails] = useState<ProjectDetailsType>(null);

  useEffect(() => {
    const projectInfo = projectsData.find(p => p.id === project);
    if (projectInfo) {
      //@ts-ignore
      setProjectDetails(projectInfo);
    } else {
      setProjectDetails(null);
    }
  }, [project]);

  if (!projectDetails) {
    return (
      <div>
        <NavBar />
        <div className="min-h-screen bg-gradient-to-t from-gray-900 to-gray-800 text-white flex justify-center items-center">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-t from-gray-900 to-black min-h-screen">
      <NavBar />
      <div className="flex flex-col min-h-screen text-white overflow-y-hidden">
        <div className="flex items-center ml-4 sm:ml-24 mt-6 text-xl">
          <a href="/projects" className="text-gray-400 hover:text-white flex items-center gap-2 group">
            <span className="transform group-hover:translate-x-[-5px] transition-transform">←</span>
            Projects
          </a>
        </div>
        <main className="container mx-auto px-6 py-8 md:flex md:flex-col lg:flex-row md:items-start md:justify-between mb-30">
          <div className="flex flex-col lg:flex-row mx-4 sm:mx-24">
            {/* Left Side: Title, Logo, Text */}
            <div className="flex flex-col flex-grow mb-6 lg:mb-0 lg:basis-8/12 xl:basis-8/12 mr-4 w-full">
              <div className="flex items-center mb-4">
                <h1 className="text-4xl md:text-5xl font-bold">{projectDetails.title}</h1>
                {projectDetails.logo && (
                  <div className="flex-shrink-0 ml-4 w-12 h-12">
                    <Image
                      src={projectDetails.logo}
                      alt="Logo"
                      layout="responsive"
                      width={48} // Set the original width of the logo
                      height={48} // Set the original height of the logo
                    />
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                {Object.entries(projectDetails.links).map(([key, url], index, array) => (
                  <span key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 md:text-lg">{key}</a>
                    {index < array.length - 1 && ' | '}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 my-2">{projectDetails.creationDate}</p>
              <p className="my-4">
                <ReactMarkdown components={{
                  p: ({ node, ...props }) => (
                    <p className="mb-4" {...props} />
                  ),
                }}>{projectDetails.description}
                </ReactMarkdown>
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {projectDetails.tags?.map((tag, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right Side: Image Gallery */}
            <div className="flex flex-col flex-grow lg:basis-4/12 xl:basis-4/12">
              {projectDetails.images?.map((image, index) => (
                <div key={index} className="w-full max-h-[300px] mb-4">
                  <Image
                    src={image}
                    alt={`${projectDetails.title} screenshot ${index + 1}`}
                    layout="responsive"
                    width={500} // Original aspect ratio width
                    height={300} // Original aspect ratio height
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>


          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectPage;
