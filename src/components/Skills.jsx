import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = ["Java", "React", "Python", "Firebase", "AWS"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
