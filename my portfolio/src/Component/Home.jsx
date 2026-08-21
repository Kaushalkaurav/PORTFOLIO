import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Rocket,
  Database,
  Code2,
  Braces,
  Cpu,
  ChevronDown,
} from "lucide-react";

const skillsLeft = [
  {
    icon: Braces,
    title: "REACT",
    subtitle: "UI Library",
  },
  {
    icon: Cpu,
    title: "NODE.JS",
    subtitle: "Runtime",
  },
  {
    icon: Code2,
    title: "JAVASCRIPT",
    subtitle: "Language",
  },
];

const skillsRight = [
  {
    title: "JAVA",
    subtitle: "Programming",
    icon: "☕",
  },
  {
    icon: Database,
    title: "MYSQL",
    subtitle: "Database",
  },
  {
    icon: Code2,
    title: "WEB DEV",
    subtitle: "Full Stack",
  },
];

function SkillItem({ item, side }) {
  const Icon = item.icon;

  return (
    <div className={`skill-item ${side}`}>
      {side === "left" && (
        <div className="skill-line">
          <span />
        </div>
      )}

      <div className="skill-content">
        <div className="skill-icon">
          {Icon ? (
            <Icon size={38} strokeWidth={1.5} />
          ) : (
            <span className="java-icon">{item.icon}</span>
          )}
        </div>

        <div>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
      </div>

      {side === "right" && (
        <div className="skill-line">
          <span />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-page">

      {/* ================= BACKGROUND ================= */}

      <div className="background-grid" />

      <div className="red-glow glow-one" />
      <div className="red-glow glow-two" />

      {/* Decorative corners */}

      <div className="corner corner-top-left" />
      <div className="corner corner-top-right" />

      <div className="corner corner-bottom-left" />
      <div className="corner corner-bottom-right" />

      {/* ================= BIG BACKGROUND TEXT ================= */}

      <div className="huge-text huge-text-top">
        FULL STACK
      </div>

      <div className="huge-text huge-text-bottom">
        DEVELOPER
      </div>

      {/* ================= HERO ================= */}

      <section className="hero-section">

        {/* LEFT INTRO */}

        <div className="hero-left">

          <div className="namaste">
            नमस्ते <span>🙏</span>
          </div>

          <div className="hello">
            Hello, I'm
          </div>

          <h1>
            KAUSHAL
            <span>KAURAV</span>
          </h1>

          <div className="designation">
            B.Tech CSE Student
            <span>|</span>
            Full Stack Developer
          </div>

          <p className="hero-description">
            I build modern web applications,
            <br />
            solve complex problems, and turn
            <br />
            ideas into real-world products.
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              <Rocket size={19} />

              <span>
                View Projects
              </span>

              <ArrowRight size={19} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="secondary-btn"
            >
              <Download size={19} />

              <span>
                Download Resume
              </span>
            </a>

          </div>

        </div>

        {/* ================= CENTER PHOTO ================= */}

        <div className="hero-center">

          <div className="photo-glow" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="photo-circle">

            <img
              src="/profile.png"
              alt="Kaushal Kaurav"
              className="profile-image"
            />

          </div>

        </div>

        {/* ================= LEFT SKILLS ================= */}

        <div className="skills-left">

          {skillsLeft.map((item, index) => (
            <SkillItem
              key={index}
              item={item}
              side="left"
            />
          ))}

        </div>

        {/* ================= RIGHT SKILLS ================= */}

        <div className="skills-right">

          {skillsRight.map((item, index) => (
            <SkillItem
              key={index}
              item={item}
              side="right"
            />
          ))}

        </div>

      </section>

      {/* ================= BOTTOM SOCIAL AREA ================= */}

      <div className="hero-bottom">

        <div className="connect">

          <span>
            LET'S CONNECT
          </span>

          <div className="connect-line" />

          <div className="socials">

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="GitHub">
              GH
            </a>

            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="WhatsApp">
              WA
            </a>

            <a href="#" aria-label="Email">
              <Mail size={19} />
            </a>

          </div>

        </div>

        {/* CENTER TEXT */}

        <div className="bottom-center">

          <span>BUILD</span>

          <b>•</b>

          <span>CREATE</span>

          <b>•</b>

          <span>LEARN</span>

          <b>•</b>

          <span>INNOVATE</span>

        </div>

        {/* SCROLL */}

        <div className="scroll-down">

          <div className="scroll-circle">
            <ChevronDown size={19} />
          </div>

          <span>
            SCROLL DOWN
          </span>

        </div>

      </div>

    </main>
  );
}