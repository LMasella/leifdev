import React from 'react';
import './projects.css';
import Project from './Project';
import tigertask from '../../img/TigerTask.png';
import jaca from '../../img/jaca.png';
import asciibutton from '../../img/asciibutton.png';

const Projects = () => {
  return (
    <div className="projects-container section">
      <div className="projects" id="projects">
          <Project image={jaca} title="Just A Click Away" description="This is a static website I built for a friend who was working on a start-up company. It was built with React and Bootstrap with some custom CSS and a carousel feature. The site is mobile responsive with a good layout for every screen type. He was very pleased with the result." url="https://jacainc.com/" gitUrl="https://github.com/LMasella/jaca" />
          <Project image={tigertask} title="TigerTask" description="TigerTask is a task organizing app built with small teams in mind. Users can create tasks with due dates and assign them to other users within the organization. It was built with React and completely custom CSS for the front-end and Express and MongoDB for the back-end." url="https://tigertask.net/" gitUrl="https://github.com/LMasella/TigerTask" />
          <Project image={asciibutton} title="The ASCII Button" description="The ASCII Button is a single page app with Bootstrap styling that utilizes HTML Canvas/JavaScript to manipulate pixel data from an image URL, turning it into text." url="https://asciibutton.com/" gitUrl="https://github.com/LMasella/asciibutton" />
      </div>
    </div>
  )
}

export default Projects;