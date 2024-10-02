import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "EduBridge",
      description: "A platform connecting teachers with schools",
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
