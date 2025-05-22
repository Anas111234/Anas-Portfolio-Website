import React from 'react';
import '../Styling/home.css';

const Home = () => {
  return (
    <section className="home bg">
      <div className="hero-content">
        <div className="profile-img-container">
          <img src="/anas.jpeg" alt="Anas Shaikh" className="profile-img" />
        </div>
        <h1 className="hero-title">Hey, I'm <span className="highlight">Anas Shaikh</span></h1>
        <p className="hero-subtitle">Full-stack Developer | Problem Solver | Code Enthusiast</p>
        <p className="hero-desc">
          Passionate about building cutting-edge web applications that make an impact. I specialize in <span className="tech">MERN Stack</span> and love bringing ideas to life with clean, efficient, and user-friendly code. Let's collaborate and create something amazing!
        </p>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anas-shaikh-2b6503347" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Anas111234" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.facebook.com/shaikh.anas.829404" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/_anas._sk" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
       <i className="fab fa-instagram"></i>
           </a>
      <a href="https://wa.me/9326183927" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
         <i className="fab fa-whatsapp"></i>
         </a>

        </div>
      </div>
    </section>
  );
};

export default Home;
