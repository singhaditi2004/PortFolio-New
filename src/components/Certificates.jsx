import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      name: "Career Essentials in Software Development by Microsoft and LinkedIn",
      issuer: "LinkedIn",
      date: "June 2024",
    },
    {
      name: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn",
      date: "June 2024",
    },
    {
      name: "Basics of java",
      issuer: "Coding Ninjas",
      date: "May 2024",
    },
    {
      name: "Python Zero to Hero",
      issuer: "Guvi",
      date: "September 2024",
    },
    {
      name: "Learn SQL",
      issuer: "CodeChef",
      date: "September 2023",
    },
    
  ];
  //hon Zero to Hero
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-8 text-center mt-10 text-gray-800">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {cert.name}
            </h3>
            <p className="text-orange-700">{cert.issuer}</p>
            <p className="text-gray-500">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
