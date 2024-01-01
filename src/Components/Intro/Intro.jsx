import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/Jasp.png';
import thumbup from '../../img/thumbup.png';
import wave from '../../img/wave.png'
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";


const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div id="Intro" className="intro">
        <div className="i-left">
            <div className="i-name">
            <span>Hi! I Am </span>
            <span>Jalaj Pandey</span>
            <span>🙋‍♂️I'm Jalaj Pandey,and I specialize in creating captivating websites and applications using ReactJS, NodeJs, JavaScript, and Bootstrap.   My mission is to craft digital experiences that captivate and inspire users.🚀<br/><br/>

In the coding realm, I'm a versatile problem solver, fluent in Java and C, where I craft elegant solutions and conquer challenges🎯with finesse.<br/><br/>

Beyond the screen, I'm not just a tech enthusiast; I'm a guitarist who loves jamming to my favorite tunes when I'm not coding. Balancing work and play fuels my vibrant energy✨and creativity.<br/><br/>

Let's embark on an exciting journey together! If you're in search of a passionate web developer who thrives on collaboration and consistently delivers exceptional results, look no further. Connect with me, and let's create something extraordinary that lights up the digital landscape!🤩</span>
        </div>
        <button onClick={() => window.location.replace("/#contact")} className="introb btn btn-color-2 project-btn">Contact Me</button>
        <div className="i-icons">
            <a href="https://github.com/jalaj-pandey"><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/jalaj-pandey/"><img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com/thejalajpandey/"><img src={Instagram} alt="" /></a>
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji} alt="" />
            <img style={{scale:'9%',top:'-8.1%', left:'-125.1%',rotate:'-10deg'}} src={wave} alt="" />

            <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "55%" }}
          transition={transition}
          className="floating-div">
              <FloatingDiv image ={Crown} txt1="Web" txt2="Developer"/>
            </motion.div>
            <motion.div
          initial={{ left: "18rem", top: "18rem" }}
          whileInView={{ left: "2.5rem" }}
          transition={transition}
          className="floating-div"
        >
              <FloatingDiv image ={thumbup} txt1="Best" txt2="Design"/>
              </motion.div>

            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className='blur' 
            style={{
              background:'#C1F5FF',
              top: '17rem',
              width: '21rem',
              height: '11rem',
              left: '-6rem',
            }}
            ></div>
        </div>
    </div>
  )
}

export default Intro