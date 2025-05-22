import React from "react";
import "../Styling/skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "🚀 MERN Stack (Main Expertise)",
      skills: [
        { name: "MongoDB", img: "https://img.icons8.com/color/48/000000/mongodb.png", level: 75 },
        { name: "Express.js", iconClass: null, level: 70 }, // No image or icon
        { name: "React.js", iconClass: "fab fa-react", color: "#61dafb", level: 85 },
        { name: "Node.js", iconClass: "fab fa-node-js", color: "#68a063", level: 70 },
      ],
    },
    {
      title: "🎯 Frontend Development",
      skills: [
        { name: "HTML5", iconClass: "fab fa-html5", color: "#e34c26", level: 95 },
        { name: "CSS3", iconClass: "fab fa-css3-alt", color: "#264de4", level: 90 },
        { name: "JavaScript", iconClass: "fab fa-js", color: "#f0db4f", level: 90 },
        { name: "Responsive Design", iconClass: "fas fa-mobile-alt", color: "#4CAF50", level: 87 },
      ],
    },
    {
      title: "🔧 Tools & Other Skills",
      skills: [
        { name: "Git", iconClass: "fab fa-git-alt", color: "#f1502f", level: 72 },
        { name: "GitHub", iconClass: "fab fa-github", color: "#fff", level: 80 },
        { name: "Basic Java", iconClass: "fab fa-java", color: "#f89820", level: 50 },
        { name: "Debugging", iconClass: "fas fa-bug", color: "#ff4c4c", level: 75 },
      ],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">💼 My Technical Skills</h2>

      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category fade-in">
          <h3 className="category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.skills.map((skill, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-icon">
                  {skill.iconClass ? (
                    <i className={skill.iconClass} style={{ color: skill.color }}></i>
                  ) : skill.img ? (
                    <img src={skill.img} alt={skill.name} />
                  ) : (
                    <span className="no-icon-text">{skill.name}</span> // Fallback for Express.js
                  )}
                </div>
                <div className="skill-info">
                  <div className="skill-name">{skill.name}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
