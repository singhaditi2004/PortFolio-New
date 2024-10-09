import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  Eye,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

// Custom Alert Component
const Alert = ({ title, description }) => (
  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md">
    <h3 className="font-bold">{title}</h3>
    <p>{description}</p>
  </div>
);
const driveFileId = "10Leh9zdFTRqwBVKIKqDEVcBQGQ4LUn7D";
const Resume = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const driveLink = `https://drive.google.com/uc?id=${driveFileId}&export=download`;

  const handleOpenDriveLink = () => {
    window.open(`https://drive.google.com/file/d/${driveFileId}/view`, "_top");
  };

  const handleDownload = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };
  <style>
    {` .text{
  color: #001244;
}
  
`}
  </style>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">
            Aditi Singh Bais
          </h1>
          <h2 className="text-xl text-center text-gray-600 mb-8">
            Android Developer
          </h2>

          <div className="flex justify-center space-x-4 mb-8">
            <SocialLink
              icon={<Github size={25} />}
              href="https://github.com/singhaditi2004"
            />
            <SocialLink
              icon={<Linkedin size={25} />}
              href="https://linkedin.com/in/aditi-bais"
            />
            <SocialLink
              icon={<Mail size={25} />}
              href="mailto:aditibais26@gmail.com"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <ActionButton
              icon={<Eye size={20} />}
              text="Preview Resume"
              onClick={() => setIsPreviewOpen(true)}
              className="bg-teal-500 hover:bg-teal-600"
            />
            <ActionButton
              icon={<Download size={20} />}
              text="Download Resume"
              onClick={handleDownload}
              href={driveLink}
              className="bg-blue-500 hover:bg-blue-600"
            />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen && (
          <PreviewModal
            driveFileId={driveFileId}
            onClose={() => setIsPreviewOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4"
          >
            <Alert
              title="Download Started"
              description="Your resume download has begun."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text hover:hover:text-blue-700 transition-colors"
    whileHover={{ scale: 1.5 }} // Scale effect on hover
    whileTap={{ scale: 0.9 }} // Scale effect on tap
    transition={{ type: "spring", stiffness: 300 }}
  >
    {icon}
  </motion.a>
);

const ActionButton = ({ icon, text, onClick, href, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${className} text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition-colors duration-300`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </motion.a>
);

const PreviewModal = ({ driveFileId, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Resume Preview</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <iframe
        src={`https://drive.google.com/file/d/${driveFileId}/preview`}
        className="w-full h-[80vh]"
        title="Resume Preview"
      ></iframe>
    </motion.div>
  </motion.div>
);

export default Resume;
