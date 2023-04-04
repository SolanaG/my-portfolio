import React from "react";
import "./about.css";
import ME from "../../assets/pexels.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            My name is Solana, and I'm a Full Stack Developer with a passion for
            creating innovative solutions. I have experience in a wide range of
            technologies, including JavaScript, React Js, Redux, Node JS,
            Express, Sequelize, HTML, Chakra UI, and CSS.
            <br />
            I'm a committed, dedicated, and optimistic person. Driven to meet
            objectives and create projects that can make a real impact. <br />
            Feeling happiest when i'm learning and doing teamwork. <br />I
            belive that technology has the power to change the world and, as you
            know, <i>"with great power comes great responsibility"</i>...
            <br />
            So let's go for it!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
