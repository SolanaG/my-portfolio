import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import "./skillsTools.css";

const SkillsTools = () => {
  return (
    <section id="skillsAndTools">
      <h2>Skills & Tools</h2>
      <div className="container skillsTools__container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="skillsTools__content">
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>React</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>Chakra UI</h4>
            </article>
          </div>
        </div>
        <div className="backend">
          <h3>Backend Development</h3>
          <div className="skillsTools__content">
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>Node JS</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>Express</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="skillsTools__detail">
              <AiOutlineCaretRight className="skillsTools__detail-icon" />
              <h4>PostreSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
