import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1 className="text-4xl font-bold text-blue-600 underline text-center my-10">
        Tailwind Working!
      </h1>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .app {
          min-height: 100vh;
          background: #f5f7fb;
          color: #1f2937;
          transition: 0.3s;
        }

        .app.dark {
          background: #111827;
          color: #f9fafb;
        }

        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 8%;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .dark nav {
          background: #1f2937;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 22px;
          align-items: center;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: inherit;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: #2563eb;
        }

        .theme-button {
          border: none;
          background: #2563eb;
          color: white;
          padding: 9px 13px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }

        section {
          padding: 80px 8%;
          max-width: 1100px;
          margin: auto;
        }

        .hero {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .hero h1 {
          font-size: clamp(40px, 7vw, 70px);
          margin-bottom: 15px;
        }

        .highlight-name,
        .highlight-greeting {
          color: #2563eb;
        }

        .dark .highlight-name,
        .dark .highlight-greeting {
          color: #60a5fa;
        }

        .hero h2 {
          font-size: 28px;
          color: #2563eb;
          margin-bottom: 20px;
        }

        .hero p {
          max-width: 700px;
          font-size: 18px;
          line-height: 1.7;
          color: #6b7280;
        }

        .dark .hero p,
        .dark .section-text {
          color: #d1d5db;
        }

        .section-title {
          font-size: 36px;
          margin-bottom: 25px;
          color: #2563eb;
          font-weight: 700;
        }

        .section-text {
          font-size: 18px;
          line-height: 1.8;
          color: #4b5563;
        }

        .education-card,
        .project-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          margin-bottom: 18px;
        }

        .project-card + .project-card {
          margin-top: 8px;
        }

        .dark .education-card,
        .dark .project-card {
          background: #1f2937;
        }

        .education-card h3,
        .project-card h3,
        .project-card h4 {
          font-size: 25px;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .certificate-link {
          display: inline-block;
          margin-top: 12px;
          color: #2563eb;
          font-weight: 700;
          text-decoration: none;
        }

        .certificate-link:hover {
          text-decoration: underline;
        }

        .dark .certificate-link {
          color: #93c5fd;
        }

        .education-card p,
        .project-card p {
          line-height: 1.7;
          color: #6b7280;
        }

        .dark .education-card p,
        .dark .project-card p {
          color: #d1d5db;
        }

        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .skill {
          background: #2563eb;
          color: white;
          padding: 13px 22px;
          border-radius: 30px;
          font-weight: bold;
        }

        #contact {
          text-align: center;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-top: 25px;
          width: 100%;
        }

        .contact-button {
          display: inline-block;
          text-decoration: none;
          background: #2563eb;
          color: white;
          padding: 13px 22px;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.2s;
        }

        .contact-button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        footer {
          text-align: center;
          padding: 30px;
          background: #111827;
          color: white;
          margin-top: 40px;
        }

        @media (max-width: 700px) {
          nav {
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }

          section {
            padding: 60px 6%;
          }

          .hero {
            min-height: 75vh;
          }

          .hero h1 {
            font-size: 42px;
          }

          .hero h2 {
            font-size: 23px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="logo">P.K. Ullas</div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Home */}
      <section className="hero" id="home">
        <h1>
          <span className="highlight-greeting">Hi, I'm</span>{" "}
          <span className="highlight-name">P.K. Ullas</span> 👋
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p>
          Welcome to my personal portfolio. I am pursuing B.Tech in Computer
          Science & Engineering at REVA University and building my skills in
          Java, Python, and SQL.
        </p>
      </section>

      {/* About */}
      <section id="about">
        <h2 className="section-title">ABOUT ME</h2>

        <p className="section-text">
          I am a Computer Science & Engineering student interested in
          programming, problem solving, databases, and software development.
          I enjoy learning new technologies and improving my technical skills
          through projects and practice.
        </p>
      </section>

      {/* Education */}
      <section id="education">
        <h2 className="section-title">EDUCATION</h2>

        <div className="education-card">
          <h3>B.Tech / Computer Science & Engineering</h3>

          <p>
            <strong>REVA University</strong>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className="section-title">SKILLS </h2>

        <div className="skills-container">
          <div className="skill">Java</div>
          <div className="skill">Python</div>
          <div className="skill">SQL</div>
          <div className="skill">HTML</div>
          <div className="skill">C Programming</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title">PROJECTS</h2>

        <div className="project-card">
          <h3>STUDENT MANAGEMENT SYSTEM</h3>

          <p>
            A student management application concept using Java and SQL for
            managing student records, courses, and academic information, with
            Python used for data processing and reporting.
          </p>
        </div>

        <div className="project-card">
          <h4>SMART INDIA HACKATHON</h4>
          <p>
            Development of AI-based intelligent system for video analytics platform for border surveillance using existing CCTV infrastructure.
          </p>
          <a
            className="certificate-link"
            href="/SIH.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Tap to view images"
          >
            Tap to view images
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title">CONTACTS </h2>

        <p className="section-text">
          You can connect with me through email and my social profiles.
        </p>

        <div className="contact-buttons">
          {/* Email */}
          <a
            className="contact-button"
            href="mailto:pkullas02@gmail.com"
          >
            📧 Email
          </a>

          {/* GitHub */}
          <a
            className="contact-button"
            href="https://github.com/pkullas"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            className="contact-button"
            href="https://www.linkedin.com/in/pk-ullas"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>

          {/* Instagram */}
          <a
            className="contact-button"
            href="https://www.instagram.com/pk._.ullas?stkn=bTh0eXJ0N2s0Ymw5"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        ©️ 2026 P.K. Ullas. All rights reserved.
      </footer>
    </div>
  );
}

export default App;