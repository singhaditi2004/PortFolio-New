import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const driveFileId = "10Leh9zdFTRqwBVKIKqDEVcBQGQ4LUn7D"; // Replace with your actual file ID
  const driveLink = `https://drive.google.com/uc?id=${driveFileId}&export=download`; // Link for direct download

  const handleOpenDriveLink = () => {
    window.open(`https://drive.google.com/file/d/${driveFileId}/view`, "_top");
  };



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>
      <div className="flex space-x-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleOpenDriveLink}
        >
          Preview Resume
        </motion.button>
        <a href={driveLink} target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </motion.button>
        </a>
      </div>
      
    </div>
  );
};

export default Resume;
