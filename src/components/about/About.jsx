import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container section">
    <div className="about">
      <div id="about">
        <h1>Hi, I'm <span className="about-name">Leif</span>.</h1>
        <p>Thanks for checking out my software development portfolio! This mobile-responsive site was built from scratch using <strong>React</strong> and <strong>custom vanilla CSS</strong>, with a little <strong>JavaScript</strong> for some extra fun. Be sure to check out my <a className="text-highlight" href="#projects">Projects</a>, and feel free to <a className="text-highlight" href="#contact">Contact Me</a> for more information!
        </p>
      </div>
      <div id="skills">
        <h2>Here are some of the technologies I've worked with:</h2>
        <div className="lists">
          <ul>
            <li>JavaScript (Node.js)</li>
            <li>C#</li>
            <li>Python</li>
            <li>CSS</li>
            <li>HTML5</li>
            <li>React</li>
            <li>Express</li>
            <li>ASP.NET Core</li>
            <li>Entity</li>
            <li>Flask</li>
            <li>Ubuntu</li>
          </ul>
          <ul>
            <li>Jinja2</li>
            <li>Bootstrap</li>
            <li>Mongoose</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostMan</li>
            <li>AWS(EC2)</li>
            <li>JSON</li>
            <li>AJAX</li>
            <li>Nginx</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;