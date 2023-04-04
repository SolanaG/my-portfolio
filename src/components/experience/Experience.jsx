import React from "react";
import "./experience.css";
import { VscCircleSmallFilled } from "react-icons/vsc";
import { useState } from "react";
import { buttons, descriptions } from "../../db";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const activeClass = "active";

  const handleClick = (evt) => {
    setIndex(evt.target.id);
  };
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="container experience__inner">
        <div className="experience__tab">
          {buttons.map((button, i) => {
            return (
              <button
                key={button.text + i}
                id={i}
                className={
                  index === i.toString()
                    ? `simple-button ${activeClass}`
                    : "simple-button"
                }
                onClick={handleClick}
              >
                {button.text}
              </button>
            );
          })}
        </div>

        <div className="experience__description">
          <h3>
            <span>{descriptions[index].title}</span>
            <span className="experience__description-company">
              &nbsp;@&nbsp;
              <a
                href={descriptions[index].link}
                className="inline-link"
                rel="noopener noreferrer"
                target="_blank"
              >
                {descriptions[index].company}
              </a>
            </span>
          </h3>
          <p>{descriptions[index].date}</p>

          <div>
            <ul>
              {descriptions[index].pos_description.map((desc) => {
                return (
                  <li key={desc}>
                    <VscCircleSmallFilled />
                    {desc}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
