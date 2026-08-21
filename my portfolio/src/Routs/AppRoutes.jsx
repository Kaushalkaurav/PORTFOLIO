import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Component/Home";
import About from "../Component/About";
import Project from "../Component/Project";
import Resume from "../Component/Resume";
import Contact from "../Component/Contact";
import Skill from "../Component/Skill";


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;