import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Award, Calendar, Building } from "lucide-react";

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      name: "Java Full Stack Developer",
      issuer: "Talent Next Wipro",
      date: "June 2024",
      category: "Development",
      description:
        "Comprehensive course covering Java full stack development including Spring Boot, React, and MySQL.",
    },
    {
      name: "Career Essentials in Software Development by Microsoft and LinkedIn",
      issuer: "LinkedIn",
      date: "June 2024",
      category: "Career",
      description:
        "Essential skills and knowledge for a successful career in software development, curated by industry leaders.",
    },
    {
      name: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn",
      date: "June 2024",
      category: "Programming",
      description:
        "Advanced programming concepts including object-oriented programming, algorithms, and data structures.",
    },
    {
      name: "Basics of Java",
      issuer: "Coding Ninjas",
      date: "May 2024",
      category: "Programming",
      description:
        "Fundamental Java programming concepts including syntax, control structures, and object-oriented principles.",
    },
    {
      name: "Python Zero to Hero",
      issuer: "Guvi",
      date: "September 2024",
      category: "Programming",
      description:
        "Comprehensive Python course covering basics to advanced topics including web development and data analysis.",
    },
    {
      name: "Learn SQL",
      issuer: "CodeChef",
      date: "September 2023",
      category: "Database",
      description:
        "SQL fundamentals including querying, database design, and performance optimization.",
    },
  ];

  const categories = [
    "All",
    ...new Set(certificates.map((cert) => cert.category)),
  ];

  const filteredCertificates = useMemo(() => {
    return certificates.filter(
      (cert) =>
        (selectedCategory === "All" || cert.category === selectedCategory) &&
        (cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, selectedCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-8 text-center mt-10 text-gray-800">
        My Certificates
      </h2>

      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedCertificate(cert)}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {cert.name}
              </h3>
              <p className="text-orange-700 flex items-center">
                <Building size={16} className="mr-2" />
                {cert.issuer}
              </p>
              <p className="text-gray-500 flex items-center mt-2">
                <Calendar size={16} className="mr-2" />
                {cert.date}
              </p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2">
                {cert.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Certificate Details
                </h2>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {selectedCertificate.name}
              </h3>
              <p className="text-orange-700 flex items-center mb-2">
                <Building size={16} className="mr-2" />
                {selectedCertificate.issuer}
              </p>
              <p className="text-gray-500 flex items-center mb-2">
                <Calendar size={16} className="mr-2" />
                {selectedCertificate.date}
              </p>
              <p className="text-gray-700 mb-4">
                {selectedCertificate.description}
              </p>
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 flex items-center">
                  <Award size={20} className="mr-2" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certificates;
