import React from 'react';
import '../Styling/about.css';

const About = () => {
  return (
    <section id="about" className="about-section bg">
      <div className="about-wrapper">
        <h2 className="about-title">About Me</h2>

        <div className="about-layout">
          {/* Text & Timeline Section */}
          <div className="about-left">
           <p className="about-intro">
  Hi, I'm <strong>Anas</strong>, a <strong>BSc IT graduate</strong> with a strong passion for <span>coding</span> and building impactful web applications. My journey started with <strong>Python</strong> and <strong>Java</strong>, and now I specialize in the <strong>MERN stack</strong> to create modern, full-stack applications.
</p>
<p className="about-intro">
  I enjoy combining creative problem-solving with technical skills to bring ideas to life. From designing user-friendly interfaces to optimizing back-end performance, I love tackling challenges that lead to innovative solutions. One of my projects, <strong>EchoEvaluator</strong>, reflects my interest in combining technology with real-world impact, specifically around climate change awareness.
</p>
<p className="about-intro">
  I'm always eager to learn, grow, and connect with like-minded individuals. If you'd like to collaborate or discuss exciting web development projects, feel free to reach out!
</p>



            <div className="traits">
              <div className="trait-card">🚀 Fast Learner</div>
              <div className="trait-card">🤝 Team Player</div>
              <div className="trait-card">💡 Problem Solver</div>
            </div>

            <div className="timeline">
  <h3>🎓 Education</h3>

  <div className="timeline-item">
    <div className="circle">📘</div>
    <div>
      <h4>BSc IT – Mumbai University</h4>
      <p>2022 – 2025</p>
      <small>CGPA: <strong>9.0</strong></small>
    </div>
  </div>

  <div className="timeline-item">
    <div className="circle">📗</div>
    <div>
      <h4>HSC – Maharashtra State Board</h4>
      <p>2020 – 2022</p>
      <small>Science Stream – <strong>59%</strong></small>
    </div>
  </div>

  <div className="timeline-item">
    <div className="circle">📙</div>
    <div>
      <h4>SSC – Maharashtra State Board</h4>
      <p>2019 – 2020</p>
      <small><strong>83%</strong></small>
    </div>
  </div>
</div>


            <div className="about-buttons">
              <a href="#contact" className="btn hire">Hire Me</a>
              <a href="/Shaikh_Anas_CV.pdf" className="btn download" download>Download CV</a>
            </div>
          </div>

          {/* Code Box */}
          <div className="about-right">
            <div className="code-box">
              <pre>
                <code>{`const anas = {
  education: "BSc IT",
  interests: ["Web Dev", "UI/UX", "Clean Code"],
  stack: ["MongoDB", "Express", "React", "Node"],
  goals: "Create Impactful Application"
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
