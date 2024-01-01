import React from 'react'
import './Others.css'
import seo from '../../img/seo.png';
import phto from '../../img/phto.png';
import me from '../../img/me.png';

const Others = () => {
  return (
    <section id="Others">
      <h3 className="title">More About Me ❤️</h3>
      <div className="experience-details-containerr">
        <div className="about-containers">
          <div className="details-containerr color-container">
          <h2 className="experience-sub-title project-title">SEO Expert🚀</h2>
            <div className="article-container">
              <img
                src={seo}
                alt="Project 1"
                className="project-img"
              />
            </div>
          </div>
          <div className="details-containerr color-container">
            <h2 className="experience-sub-title project-title">Photographer📸</h2>
            <div className="article-container">
              <img
                src={phto}
                alt="Project 2"
                className="project-img"
              />
            </div>
          </div>
          <div className="details-containerr color-container">
            <h2 className="experience-sub-title project-title">Guitarist🎸</h2>
            <div className="article-container">
              <img
                src={me}
                alt="Project 3"
                className="project-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Others