import React from 'react';
import ProjectCard from './ProjectCard';
import '../Styling/projects.css';

const projects = [
  {
    title: "Ecommerce Clone",
    image: "/amazon.jpeg",
    description: "A responsive clothing e-commerce website built with HTML, CSS, and JavaScript, featuring product listings, a shopping cart, and smooth navigation across all devices..",
    visitLink: "https://guileless-travesseiro-a41d3e.netlify.app/",
    codeLink: "https://github.com/Anas111234/Responsive-Ecommerce"
  },
  {
    title: "Netflix Clone",
    image: "/netflix.jpeg",
    description: "A responsive UI replica of Netflix using HTML , CSS and JavaScript, with smooth sections and engaging visual layout.",
    visitLink: "https://fastidious-banoffee-f67e77.netlify.app/",
    codeLink: "https://github.com/Anas111234/Netflix_Clone"
  },
  {
    title: "Animated Calculator",
    image: "/calculator.jpeg",
    description: "A visually appealing and functional calculator built with JavaScript, featuring animated button interactions.",
    visitLink: "https://calculator-3vfr.onrender.com/",
    codeLink: "https://github.com/Anas111234/Calculator"
  },
  {
    title: "Random Password Generator",
    image: "/rpg.jpeg",
    description: "Generates strong random passwords based on length and character type, built with vanilla JavaScript.",
    visitLink: "https://password-genrator-kbtw.onrender.com/",
    codeLink: "https://github.com/Anas111234/Password_Genrator"
  },
  {
    title: "Stone Paper Scissors Game",
    image: "/sps.jpeg",
    description: "A classic game made interactive using JavaScript, allowing users to play against a computer with live scoring.",
    visitLink: "https://stone-paper-scissor-hy0z.onrender.com/",
    codeLink: "https://github.com/Anas111234/Stone-Paper-Scissor"
  },
  {
    title: "Tic Tac Toe",
    image: "/ttt.jpeg",
    description: "Fully functional Tic Tac Toe game with logic to detect wins and draws. Built with HTML, CSS, and JS.",
    visitLink: "https://tic-tac-toe-l6ix.onrender.com/",
    codeLink: "https://github.com/Anas111234/Tic-Tac-Toe"
  },
  {
    title: "Bubble Hitting Game",
    image: "/bh.jpeg",
    description: "A fast-paced bubble-hitting game built with JavaScript to improve user interaction and timing skills.",
    visitLink: "https://bubblino-game.onrender.com/",
    codeLink: "https://github.com/Anas111234/Bubblino-Game"
  },
  {
    title: "Weather App",
    image: "/wa.avif",
    description: "A weather forecast web app built using JavaScript and a public API, showing real-time temperature and conditions by city.",
    visitLink: "https://superb-empanada-70e691.netlify.app/",
    codeLink: "https://github.com/Anas111234/Weather_App"
  },
  {
    title: "Language Translator",
    image: "/lt.jpeg",
    description: "A JavaScript-based language translator using an external API, allowing users to translate between multiple languages instantly.",
    visitLink: "https://spectacular-choux-64decd.netlify.app/",
    codeLink: "https://github.com/Anas111234/Language-translator"
  },
  {
    title: "QR Code Generator",
    image: "/qr.jpeg",
    description: "A simple yet interactive QR code generator app built using JavaScript, perfect for sharing links and contact info.",
    visitLink: "https://teal-empanada-f8cc06.netlify.app/",
    codeLink: "https://github.com/Anas111234/QR-_Code_Genrator"
  },
  {
    title: "EchoEvaluator (MERN)",
    image: "/ee.jpg",
    description: "MERN stack app to calculate carbon footprint through categorized questions, educate users, and suggest eco-friendly habits.",
    visitLink: "https://frontend-echoevaluator-kruj.onrender.com",
    codeLink: "https://github.com/Anas111234/EchoEvaluator"
  }
];


const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
