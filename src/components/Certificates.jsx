import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "January 2024",
    },
    {
      name: "Certified Java Developer",
      issuer: "Oracle",
      date: "June 2023",
    },
    {
      name: "Android Developer Certification",
      issuer: "Google",
      date: "September 2022",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
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
