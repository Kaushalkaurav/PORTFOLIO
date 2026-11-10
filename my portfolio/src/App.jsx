import { createElement, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Database, ExternalLink, GraduationCap, Layers3, Menu, Moon, Sun, Terminal, X } from "lucide-react";
import "./portfolio.css";

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
          <span className="brand-name">KAUSHAL <strong>KAURAV</strong></span>
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
      <section id="home" className="hero section-anchor">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-halo" aria-hidden="true" />
        <div className="page-width hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="pulse-dot" /> NAMASTE <span className="kicker-divider">/</span> WELCOME TO MY PORTFOLIO</p>
            <p className="intro">Hello, I'm</p>
            <h1>KAUSHAL<br /><span>KAURAV<span className="title-dot">.</span></span></h1>
            <div className="role-line"><span>FULL STACK DEVELOPER</span><span className="role-separator">/</span><span>B.TECH CSE STUDENT</span></div>
            <p className="hero-body">I design and build modern web experiences, combining clear thinking with thoughtful interfaces and practical development.</p>
            <div className="hero-ctas">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button button-outline" href="#contact">Get in touch <ArrowRight size={18} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract developer illustration">
            <div className="visual-orbit orbit-outer" /><div className="visual-orbit orbit-mid" /><div className="visual-orbit orbit-inner" />
            <div className="hero-emblem"><span className="emblem-code">&lt;/&gt;</span><span className="emblem-sub">BUILDING THE WEB</span></div>
            <div className="floating-label label-top"><span className="tiny-dot" /> OPEN TO BUILDING</div>
            <div className="floating-label label-bottom"><Terminal size={15} /> CODE. CREATE. REPEAT.</div>
          </div>
          <div className="hero-footer"><a href="#about" className="scroll-cue"><span className="scroll-mark"><ArrowDown size={17} /></span> SCROLL TO EXPLORE</a><div className="hero-footer-right"><span>DESIGN</span><i>·</i><span>DEVELOP</span><i>·</i><span>DELIVER</span></div></div>
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
