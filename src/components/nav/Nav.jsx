/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { GiSpotedFlower } from "react-icons/gi";
import { GiMermaid } from "react-icons/gi";
import { RxCode } from "react-icons/rx";
import { BsHexagon } from "react-icons/bs";
import { CgToolbox } from "react-icons/cg";
import { GiHummingbird } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className={`nav-links ${isOpen && "open"}`}>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BsHexagon className="links__icons" />
          <span>home</span>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("about")}
          className={activeNav === "about" ? "active" : ""}
        >
          <GiMermaid className="links__icons" />
          <span>about</span>
        </a>
        <a
          href="#work"
          onClick={() => setActiveNav("work")}
          className={activeNav === "work" ? "active" : ""}
        >
          <RxCode className="links__icons" />
          <span>work</span>
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("experience")}
          className={activeNav === "experience" ? "active" : ""}
        >
          <span className="prueba">
            <GiSpotedFlower className="links__icons" />
            <span>experience</span>
          </span>
        </a>
        <a
          href="#skillsAndTools"
          onClick={() => setActiveNav("skillsAndTools")}
          className={activeNav === "skillsAndTools" ? "active" : ""}
        >
          <CgToolbox className="links__icons" />
          <span>skills & tools</span>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className={activeNav === "contact" ? "active" : ""}
        >
          <GiHummingbird className="links__icons" />
          <span>contact</span>
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
