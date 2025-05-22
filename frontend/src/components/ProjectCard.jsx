import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styling/projects.css';

const ProjectCard = ({ title, image, description, visitLink, codeLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="project-card" layout>
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      
      <motion.button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? "Hide Info" : "View Info"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="project-info"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{description}</p>
            <div className="project-buttons">
              <a href={visitLink} target="_blank" rel="noopener noreferrer">Visit</a>
              <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
