import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Globe } from "lucide-react"; // Replaced Medium with Globe
import { useState } from "react";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <style>
        {` .text{
        color: #001244;
      }
        .bord{
          border: 2px solid  #001244;
        }
      `}
      </style>
      <h2 className="text-3xl font-bold mb-6 mt-10">Contact Me</h2>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block  mb-2">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            id="name"
            className="w-full p-2  bord border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            className="w-full p-2 border bord rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded bord"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </motion.form>

      {/* Social Links Section */}
      {/* Social Links Section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <h3 className="text-2xl mt-24 font-semibold mb-0">
          Connect with me on Social Media
        </h3>

        <div className="mt-8 flex justify-center space-x-6">
          <motion.a
            href="https://x.com/singhaditi_2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale effect on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Twitter className="w-10 h-10 text hover:text-blue-700" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aditi-bais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale effect on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Linkedin className="w-10 h-10 text hover:text-blue-800" />
          </motion.a>
          <motion.a
            href="https://github.com/singhaditi2004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale effect on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Github className="w-10 h-10 text hover:text-blue-800" />
          </motion.a>
          <motion.a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            whileHover={{ scale: 1.2 }} // Scale effect on hover
            whileTap={{ scale: 0.9 }} // Scale effect on tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Globe className="w-10 h-10 text hover:text-blue-700" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
