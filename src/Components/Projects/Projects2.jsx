import React from 'react'
import './Projects.css'
import pr1 from '../../img/projects/dk.png';
import pr2 from '../../img/projects/qr.png';
import pr3 from '../../img/projects/nd.png';

const Projects2 = () => {
  const getIt = (url) => {
    window.open(url);
  };
  return (
    <section id="projects">
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={pr1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">DRUM Kit & Dice game</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://jalaj-pandey.github.io/DrumKit/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={pr2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">QR Code Generator</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://jalaj-pandey.github.io/QRgenerator/')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={pr3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">NewsDoze</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://jalajpandey.netlify.app/')}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  )
}

export default Projects2