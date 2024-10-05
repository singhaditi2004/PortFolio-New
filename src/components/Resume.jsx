import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import photo from "../assets/view.png";
import download from "../assets/download.png";
const Resume = () => {
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
          className="text-5xl font-bold mb-4 mt-14"
        >
          Resume
        </motion.h1>
        <div className="btn-container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg"
          >
            <button type="button" className="btn jhk ">
              Preview <img src={photo} className="photo" alt="Resume Photo" />
            </button>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg mt-4"
          >
            <button type="button" className="btn side ">
              Download{" "}
              <img src={download} className="photo" alt="Resume Photo" />
            </button>
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
