import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Resume from "./components/Resume"
import "./index.css";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
