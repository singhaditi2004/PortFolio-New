import React from "react";
import { motion } from "framer-motion";

const Internship = () => {
  const internships = [
    {
      company: "Example Tech",
      role: "Software Developer Intern",
      period: "Summer 2023",
    },
    // Add more internships as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Internships</h2>
      {internships.map((internship, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold">{internship.role}</h3>
          <p>{internship.company}</p>
          <p>{internship.period}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Internship;
