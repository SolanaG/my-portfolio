import React from "react";
import "./work.css";
import { data } from "../../db";

const Work = () => {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="container work__container">
        {data.map(({ id, image, title, work, github, demo }) => {
          return (
            <article key={id} className="work__item">
              <div className="work__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{work}</h5>
              <div className="work__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
