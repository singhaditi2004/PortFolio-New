import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building } from "lucide-react";

const Internship = () => {
  const internships = [
    {
      company: "TWO 8",
      role: "IT Intern",
      period: "Sep. 2023 - Dec. 2023",
      color: "bg-blue-500",
    },
    {
      company: "Geeks For Geeks",
      role: "Technical Content Writer Intern",
      period: "Mar. 2024 - Sept. 2024",
      color: "bg-green-500",
    },
    {
      company: "uKnovwa",
      role: "Technical Writer Intern",
      period: "Oct. 2024 - current",
      color: "bg-purple-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16 bg-gray-100"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Internship Journey
      </h2>
      <div className="relative">
        {internships.map((internship, index) => (
          <motion.div
            key={index}
            className="mb-16 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${internship.color} text-white shadow-lg`}
              whileHover={{ scale: 1.1 }}
            >
              <Briefcase size={24} />
            </motion.div>
            <div className="ml-8 flex-grow">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {internship.role}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building size={18} className="mr-2" />
                  <span>{internship.company}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar size={18} className="mr-2" />
                  <span>{internship.period}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        <div
          className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"
          style={{ transform: "translateX(-50%)" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default Internship;
