import React from 'react'
import './Projects.css'
import pr1 from '../../img/projects/is.png';
import pr2 from '../../img/projects/tw.png';
import pr3 from '../../img/projects/gw.png';

const Projects = () => {
  const getIt = (url) => {
    window.open(url);
  };
  
  return (
    <section id="projects">
      <h3 className="title">Browse My Recent<br/>🎈Projects🎈</h3>
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
            <h2 className="experience-sub-title project-title">IdeaSpotter</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://ideaspotter.netlify.app/')}
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
            <h2 className="experience-sub-title project-title">TextWiz</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://jalaj-textwiz.netlify.app/')}
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
            <h2 className="experience-sub-title project-title">Hulk Gym </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://github.com')}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => getIt('https://jalaj-textwiz.netlify.app/')}
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

export default Projects