import React from 'react';
import './projects.css';

const Project = ({ image, title, description, url, gitUrl, comingSoon }) => {
  return (
      <div className="project">
        { comingSoon &&
        <div className="coming-soon">
            <div className="coming-soon-content">
                <p>COMING SOON</p>
            </div>
        </div>
        }
        <h2>{title}</h2>
        <div className="project-image-container">
            <a href={url} target="_blank" rel="noreferrer"><img className="project-image" src={image} alt={title} /></a>
        </div>
        <div className="project-content">
            <p>{description}</p>
        </div>
        <div className="buttons-container">
            <div className="button-container">
                <a href={url} target="_blank" rel="noreferrer"><button>View Site</button></a>
            </div>
            <div className="button-container">
                <a href={gitUrl} target="_blank" rel="noreferrer"><button>View on GitHub</button></a>
            </div>
        </div>
    </div>
  )
}

export default Project;