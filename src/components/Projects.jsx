import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, Code, X, ChevronRight } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "EduBridge",
      description:
        "EduBridge connects teachers with schools, providing a platform for job opportunities and recruitment. It allows users to manage profiles, search for jobs, and communicate through in-app messaging, with both free and premium features available.",
      tech: ["Android", "AWS", "Firebase", "Java"],
      link: "https://github.com/singhaditi2004/EduBridge",
      welink: "",
    },
    {
      name: "Care For All",
      description:
        "Care For All is an NGO initiative designed to streamline the collection of data from volunteers and donors. This platform efficiently gathers information, which is then seamlessly sent to Google Sheets for easy access and management. By enhancing data organization, Care For All aims to foster better connections between volunteers and the NGO.",
      tech: ["Android", "Firebase", "Java"],
      link: "https://github.com/singhaditi2004/Care-For-All",
      welink: "",
    },
    {
      name: "Portfolio website",
      description:
        "A personal portfolio website showcasing skills, projects, and achievements. Built with modern web technologies to create an engaging and responsive user experience.",
      tech: ["React", "Bootstrap", "Tailwind"],
      link: "https://github.com/singhaditi2004/PortFolio-New",
      welink: "https://github.com/singhaditi2004/PortFolio-New",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto min-h-screen w-full px-4  py-16 bg-gray-100 pt-24"
    >
      <h2 className="text-4xl font-bold mt-20 mb-11 text-center text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
                {project.welink && (
                  <a
                    href={project.welink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 flex items-center"
                  >
                    <Globe className="mr-2" size={20} />
                    Website
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={() =>
                setExpandedProject(expandedProject === index ? null : index)
              }
              className="w-full bg-gray-100 py-2 text-gray-700 hover:bg-gray-200 transition duration-300 flex items-center justify-center"
            >
              {expandedProject === index ? "Show Less" : "Learn More"}
              <ChevronRight
                size={20}
                className={`ml-2 transform transition-transform duration-300 ${
                  expandedProject === index ? "rotate-90" : ""
                }`}
              />
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expandedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {projects[expandedProject].name}
                </h3>
                <button
                  onClick={() => setExpandedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                {projects[expandedProject].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[expandedProject].tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start gap-4">
                <a
                  href={projects[expandedProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-gray-700 transition duration-300"
                >
                  <Github className="mr-2" size={20} />
                  View on GitHub
                </a>
                {projects[expandedProject].welink && (
                  <a
                    href={projects[expandedProject].welink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition duration-300"
                  >
                    <Globe className="mr-2" size={20} />
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
