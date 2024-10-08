import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/logo.png";
import TypewriterText from "./type";
const Introduction = () => {
  return (
    <>
      <style>
        {`
  .div1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #001244; /* Outer border color */
    height: 300px;
    width: 300px;
    border-radius: 50%; /* Makes it a circle */
    padding: 10px; /* Space between outer and inner circles */
  }

  .div2 {
    height: 280px;
    width: 280px;
    border-radius: 50%; /* Inner circle */
    overflow: hidden;
    background-color: #4FD1C5; /* Inner border color */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    height: 95%; /* Adjusted for centering inside */
    width: 95%;
    background-color: orange;
    display: block;
    border-radius: 50%; /* Makes the image circular */
  }
    `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <TypewriterText />

        <center>
          <motion.div
            className="div1 mb-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="div2"
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img className="img" src={profile} />
            </motion.div>
          </motion.div>
        </center>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg "
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
