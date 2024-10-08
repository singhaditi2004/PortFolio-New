import React from "react";
import { motion } from "framer-motion";

const Internship = () => {
  const internships = [
    {
      company: "TWO 8",
      role: "IT Intern",
      period: "Sep. 2023 - Dec. 2023",
    },
    {
      company: "Geeks For Geeks",
      role: "Technical Content Writer Intern",
      period: "Mar. 2024 - Sept. 2024",
    },
    {
      company: "uKnovwa",
      role: "Technical Writer Intern",
      period: "Oct. 2024 - current",
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
      <h2 className="text-3xl font-bold mb-6 mt-10">Internships</h2>
      {internships.map((internship, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="mb-4 shadow-lg p-6"
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
