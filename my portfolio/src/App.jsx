import { createElement, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Database, ExternalLink, GraduationCap, Layers3, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaJava, FaDatabase, FaCode, FaGithub, FaArrowRight, FaDownload } from "react-icons/fa";
import { Mail, ChevronDown } from "lucide-react";
import "./portfolio.css";
import "./reference-hero.css";

const nav = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" },
];

const technologies = [
  { group: "Frontend", icon: Code2, items: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"] },
  { group: "Backend", icon: Terminal, items: ["Node.js", "Web development"] },
  { group: "Data & languages", icon: Database, items: ["Java", "MySQL"] },
];

const projects = [
  { number: "01", name: "Personal Portfolio", type: "Frontend development", description: "A responsive personal portfolio built with React and Vite, featuring custom visual design, smooth section navigation, accessible controls, and an adaptive dark/light theme.", stack: ["React", "Vite", "CSS", "Lucide"], href: "https://github.com/Kaushalkaurav/PORTFOLIO", label: "View source" }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading"><p className="eyebrow"><span className="red-line" />{eyebrow}</p><h2>{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}</div>;
}

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("kaushal-theme") === "light" ? "light" : "dark"; }
    catch { return "dark"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("kaushal-theme", theme); } catch { /* storage may be unavailable */ }
  }, [theme]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(item => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-20% 0px -45% 0px", threshold: [0, 0.2, 0.5] });
    nav.forEach(item => { const target = document.getElementById(item.id); if (target) observer.observe(target); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = event => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = () => setMenuOpen(false);
  const copyProfile = async () => {
    try {
      await navigator.clipboard.writeText("https://github.com/Kaushalkaurav");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.open("https://github.com/Kaushalkaurav", "_blank", "noopener,noreferrer");
    }
  };

  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={navigate} aria-label="Kaushal Kaurav, home">
          <span className="brand-symbol">K<span>K</span><i>.</i></span>
          <span className="brand-name">Kaushal <strong>Kaurav</strong></span>
        </a>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation" id="primary-navigation">
          {nav.map(item => <a href={"#" + item.id} key={item.id} onClick={navigate} className={active === item.id ? "nav-active" : ""} aria-current={active === item.id ? "location" : undefined}>{item.name}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setTheme(value => value === "dark" ? "light" : "dark")} title="Toggle color theme">{theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}</button>
          <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
          <button className="icon-button menu-toggle" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
      </div>
    </header>

    <main id="main-content">
      <section id="home" className="hero reference-hero section-anchor">
        <div className="ref-dots ref-dots-left" aria-hidden="true" />
        <div className="ref-dots ref-dots-right" aria-hidden="true" />
        <div className="ref-hero-inner">
          <div className="ref-heading" aria-hidden="true">
            <span>FULL STACK</span>
            <div><i /> DEVELOPER <i /></div>
          </div>
          <div className="ref-hero-content">
            <motion.div className="ref-intro"
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}>
              <div className="ref-namaste">नमस्ते <span>🙏</span></div>
              <p className="ref-hello">Hello, I'm</p>
              <h1>KAUSHAL<br /><span>KAURAV</span></h1>
              <p className="ref-designation">B.Tech CSE Student <b>|</b> Full Stack Developer</p>
              <p className="ref-summary">I build modern web applications, solve complex problems, and turn ideas into real-world products.</p>
              <div className="ref-actions">
                <a className="ref-primary" href="#projects">View Projects <FaArrowRight aria-hidden="true" /></a>
                <a className="ref-secondary" href="#resume"><FaDownload aria-hidden="true" /> View Resume</a>
              </div>
              <div className="ref-connect">
                <p>LET'S CONNECT</p>
                <div className="ref-socials">
                  <a className="ref-social" href="https://github.com/Kaushalkaurav" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
                  <a className="ref-social ref-social-contact" href="#contact" aria-label="Contact section"><Mail size={23} /></a>
                </div>
              </div>
            </motion.div>
            <div className="ref-center">
              <div className="ref-photo-ring" aria-hidden="true" />
              <motion.img src="/profile.png" alt="Kaushal Kaurav" className="ref-portrait"
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://github.com/Kaushalkaurav.png"; }}
              />
            </div>
            <div className="ref-skills ref-skills-left" aria-label="Frontend technologies">
              <motion.div className="ref-skill" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:.25}}><span>REACT</span><FaReact size={43} /></motion.div>
              <motion.div className="ref-skill" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:.4}}><span>JAVASCRIPT</span><FaJs size={40} /></motion.div>
              <motion.div className="ref-skill" initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} transition={{delay:.55}}><span>NODE.JS</span><FaNodeJs size={40} /></motion.div>
            </div>
            <div className="ref-skills ref-skills-right" aria-label="Other technologies">
              <motion.div className="ref-skill" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:.25}}><FaJava size={42} /><span>JAVA</span></motion.div>
              <motion.div className="ref-skill" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:.4}}><FaDatabase size={40} /><span>MYSQL</span></motion.div>
              <motion.div className="ref-skill" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{delay:.55}}><FaCode size={40} /><span>WEB DEV</span></motion.div>
            </div>
          </div>
          <div className="ref-bottom">
            <div className="ref-motto"><i /><span>BUILD <b>•</b> CREATE <b>•</b> LEARN <b>•</b> INNOVATE</span><i /></div>
            <a href="#about" className="ref-scroll" aria-label="Scroll to About section"><span className="ref-mouse"><span /></span><span>SCROLL DOWN</span><ChevronDown size={19} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-anchor about-section">
        <div className="page-width about-layout">
          <div><SectionHeading eyebrow="01 / INTRODUCTION" title={<>A little <em>about me.</em></>} /><div className="about-monogram" aria-hidden="true"><span>KK</span><span className="monogram-sub">DEVELOPER / CREATOR</span></div></div>
          <div className="about-copy"><p className="lead">I'm Kaushal Kaurav, a B.Tech Computer Science student with an interest in full-stack web development.</p><p>I enjoy turning ideas into websites and applications that are intuitive, responsive, and useful. I'm continuing to build my skills across frontend development, backend technologies, and databases.</p><p>This portfolio is a growing record of my work and learning. Explore the projects section for code and implementation details as they become available.</p><div className="about-facts"><div><GraduationCap size={19} /><span>B.Tech · Computer Science</span></div><div><Layers3 size={19} /><span>Focus · Full-stack development</span></div></div></div>
        </div>
      </section>

      <section id="skills" className="section section-anchor skills-section">
        <div className="page-width">
          <SectionHeading eyebrow="02 / TOOLKIT" title={<>Technologies <em>I work with.</em></>} subtitle="A growing toolkit for building from interface to implementation." />
          <div className="skill-grid">{technologies.map(({group, icon, items}, index) => <article className="skill-panel" key={group}><div className="skill-top"><div className="skill-icon-box">{createElement(icon, { size: 23 })}</div><span className="skill-index">0{index+1} / 03</span></div><h3>{group}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section id="projects" className="section section-anchor projects-section">
        <div className="page-width"><div className="projects-header"><SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects <em>& experiments.</em></>} subtitle="A transparent look at what's built and what I'm developing next." /><span className="project-count">01 / PROJECT</span></div>
          <div className="project-card"><div className="project-art" aria-hidden="true"><div className="mini-window"><div className="mini-window-top"><i /><i /><i /></div><div className="mini-window-content"><span>KAUSHAL</span><strong>BUILD<br />CREATE<span>.</span></strong><div className="mini-window-bars"><i /><i /><i /></div></div></div><span className="project-art-label">PORTFOLIO / 2026</span></div>
            <div className="project-description">{projects.map(project => <div key={project.number}><p className="eyebrow">{project.number} / {project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(skill => <span key={skill}>{skill}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ExternalLink size={17} /></a></div>)}</div>
          </div>
          <p className="projects-note">Additional projects will appear here when their details and working links are ready. No placeholder case studies or invented results.</p>
        </div>
      </section>

      <section id="resume" className="section section-anchor resume-section">
        <div className="page-width resume-panel"><div><p className="eyebrow"><span className="red-line" /> 04 / RESUME</p><h2>More than <em>a title.</em></h2><p>Want to understand my background? Explore the profile and project source while the latest résumé PDF is being prepared.</p></div><a className="button button-outline" href="https://github.com/Kaushalkaurav" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={18} /></a></div>
      </section>

      <section id="contact" className="section section-anchor contact-section">
        <div className="page-width contact-layout"><div><SectionHeading eyebrow="05 / SAY HELLO" title={<>Have an idea?<br /><em>Let's connect.</em></>} /><p className="contact-lead">I'm interested in connecting with developers, collaborators, and people building useful things. Reach out through GitHub.</p><div className="contact-actions"><a className="button button-primary" href="https://github.com/Kaushalkaurav" target="_blank" rel="noreferrer">Visit GitHub <ExternalLink size={18} /></a><button className="button button-outline" onClick={copyProfile}>{copied ? <Check size={17} /> : <ExternalLink size={17} />}{copied ? "Profile link copied" : "Copy profile link"}</button></div></div><div className="contact-decoration" aria-hidden="true"><span>@</span><p>LET'S MAKE IT HAPPEN</p></div></div>
      </section>
    </main>

    <footer className="site-footer"><div className="page-width footer-inner"><a href="#home" className="footer-logo">KK<span>.</span></a><span>© {new Date().getFullYear()} Kaushal Kaurav. Built with care.</span><a href="#home" className="back-to-top">BACK TO TOP <ArrowUpRight size={16} /></a></div></footer>
  </div>;
}
export default App;
