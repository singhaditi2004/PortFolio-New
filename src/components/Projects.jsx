import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      name: "EduBridge",
      description:
        "EduBridge connects teachers with schools, providing a platform for job opportunities and recruitment. It allows users to manage profiles, search for jobs, and communicate through in-app messaging, with both free and premium features available.",
      tech: "Android, AWS, Firebase, Java",
      link: "https://github.com/singhaditi2004/EduBridge",
      welink: "",
    },
    {
      name: "Care For All",
      description:
        "Care For All is an NGO initiative designed to streamline the collection of data from volunteers and donors. This platform efficiently gathers information, which is then seamlessly sent to Google Sheets for easy access and management. By enhancing data organization, Care For All aims to foster better connections between volunteers and the NGO.",
      tech: "Android, Firebase, Java",
      link: "https://github.com/singhaditi2004/Care-For-All",
      welink: "",
    },
    {
      name: "Portfolio website",
      description:
        "Care For All is an NGO initiative designed to streamline the collection of data from volunteers and donors. This platform efficiently gathers information, which is then seamlessly sent to Google Sheets for easy access and management. By enhancing data organization, Care For All aims to foster better connections between volunteers and the NGO.",
      tech: "React, Bootstrap, Tailwind",
      link: "https://github.com/singhaditi2004/PortFolio-New",
      welink: "https://github.com/singhaditi2004/PortFolio-New",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <style>
        {`
        .icon{
          color: #001244;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        `}
      </style>
      <h2 className="text-3xl font-bold mb-6 mt-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 icon">{project.name}</h3>
            <p>{project.description}</p>
            <p className=" font-semibold mt-5">Tech Stack: {project.tech}</p>
            <div className="flex items-center mt-4">
              <Github className="mr-2 icon" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon hover:underline"
              >
                View on GitHub
              </a>
              {project.welink && (
                <div className="icon">
                  <Globe className="ml-12 mr-2 " />
                  <a
                    href={project.welink} // Ensure you're using the correct property for the link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
