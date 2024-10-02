import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I&apos;m Aditi Singh Bais
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg"
        >
          A passionate <strong>Software Developer</strong> with a keen interest
          in Android development and cloud technologies. Currently in my final
          year of BTech in Computer Science and Engineering at Gyan Ganga
          College of Technology, I&apos;ve developed a strong technical
          foundation through hands-on experience in <strong>Java</strong>,{" "}
          <strong>React</strong>, <strong>Python</strong>,{" "}
          <strong>Firebase</strong>, and <strong>AWS</strong>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg mt-4"
        >
          Throughout my journey, I&apos;ve built projects like{" "}
          <strong>EduBridge</strong>, a platform connecting teachers with
          schools, and have solved over 300 coding problems on platforms like
          LeetCode and CodeChef. My focus lies in creating impactful,
          user-friendly applications that solve real-world problems.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-lg mt-4"
        >
          I am always eager to learn new technologies, collaborate on innovative
          ideas, and make meaningful contributions in the tech world.
        </motion.p>
      </motion.div>
    </>
  );
};

export default Introduction;
