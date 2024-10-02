import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationItems = [
    {
      year: "2020-2024",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Gyan Ganga College of Technology",
    },
    // Add more education items as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {educationItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold">{item.degree}</h3>
          <p>{item.institution}</p>
          <p>{item.year}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
