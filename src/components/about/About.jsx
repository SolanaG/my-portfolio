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
            Hello, I'm Solana, a Full Stack Developer with a unique background
            in yoga teaching. I'm passionate about using technology to create
            innovative solutions that solve real-world problems. With extensive
            experience in JavaScript, React Js, Redux, Node JS, Express,
            Sequelize, HTML, Chakra UI, and CSS.
            <br />
            But what really sets me apart is my commitment to excellence and my
            collaborative, team-oriented approach. Whether it's working with
            clients, colleagues, or students in my yoga classes, I'm always
            looking for ways to learn, grow, and make a meaningful impact. I
            thrive on taking on challenging objectives and pushing myself to new
            heights.
            <br />
            Yoga has been an integral part of my life for many years, providing
            me with valuable skills in empathy, focus, and balance. By
            cultivating deep concentration through meditation practice, I bring
            a unique perspective to every project I work on. I believe that a
            holistic approach to problem-solving can lead to more innovative and
            effective solutions.
            <br />
            Ultimately, I'm driven by the belief that technology can be a
            powerful force for positive change in the world. However,
            <i>"with great power comes great responsibility"</i>. That's why I'm
            dedicated to use my skills to create projects that make a real
            difference in people's lives. If you're looking for a Full Stack
            Developer who shares your values and your vision for a better world,
            let's connect and make it happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
