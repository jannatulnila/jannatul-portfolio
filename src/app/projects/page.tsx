// import Projects from "../components/projects";


// const ProjectsPage = () => {
//     return (
//         <div>
//             <Projects></Projects>
//         </div>
//     );
// };

// export default ProjectsPage;

// "use client";
// import React from "react";
// import { projects } from "@/contents/projects";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa6";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProjectsPage: React.FC = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <main className="py-10">
//       <div className="container max-w-7xl px-4 md:px-20 mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-black-500 to-blue-600">
//           All Projects
//         </h1>

//         <div className="flex flex-col gap-8">
//           {projects.map((project, index) => (
//             <article
//               key={index}
//               className="bg-white dark:bg-dark/50 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
//                 <Slider {...settings}>
//                   {project.images.map((img, i) => (
//                     <Image
//                       key={i}
//                       src={img}
//                       width={800}
//                       height={450}
//                       className="w-full h-auto rounded-lg"
//                       alt={project.title}
//                     />
//                   ))}
//                 </Slider>
//               </div>

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <h4 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-black dark:to-blue-400">
//                   {project.title}
//                 </h4>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.techStack.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-black/10 dark:bg-blue-900/30 text-black dark:text-blue-400 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4 mt-auto flex-wrap">
//                   <Link
//                     href={project.liveLink}
//                     target="_blank"
//                     className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//                   >
//                     <FaExternalLinkAlt className="w-3 h-4" />
//                     <span>Live Link</span>
//                   </Link>
//                   <Link
//                     href={project.clientRepo}
//                     target="_blank"
//                     className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//                   >
//                     <FaGithub className="w-5 h-5" />
//                     <span>Client</span>
//                   </Link>
//                   {project.serverRepo && (
//                     <Link
//                       href={project.serverRepo}
//                       target="_blank"
//                       className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
//                     >
//                       <FaGithub className="w-5 h-5" />
//                       <span>Server</span>
//                     </Link>
//                   )}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProjectsPage;

"use client";
import React, { useState } from "react";
import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <main className="py-10">
      <div className="container max-w-7xl px-4 md:px-20 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-black-500 to-blue-600">
          All Projects
        </h1>

        <div className="flex flex-col gap-8">
          {currentProjects.map((project, index) => (
            <article
              key={index}
              className="bg-white dark:bg-dark/50 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
              {/* Slider */}
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
                <Slider {...settings}>
                  {project.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      width={800}
                      height={450}
                      className="w-full h-auto rounded-lg"
                      alt={project.title}
                    />
                  ))}
                </Slider>
              </div>

              {/* Text content */}
              <div className="w-full md:w-1/2 flex flex-col">
                <h4 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-600 dark:from-black dark:to-blue-400">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/10 dark:bg-blue-900/30 text-black dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto flex-wrap">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-4" />
                    <span>Live Link</span>
                  </Link>
                  <Link
                    href={project.clientRepo}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>Client</span>
                  </Link>
                  {project.serverRepo && (
                    <Link
                      href={project.serverRepo}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Server</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-md font-medium border ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-dark/50 text-black dark:text-white border-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
