import React from 'react'
import './Skills.css'
import c from "../../img/logos/c.png"
import css from "../../img/logos/css.png"
import java from "../../img/logos/java.png"
import js from "../../img/logos/javascript.png"
import html from "../../img/logos/html.png";
import bootstrap from "../../img/logos/bootstrap.png"
import python from "../../img/logos/python.png"
import react from "../../img/logos/react.png"
import node from "../../img/logos/nodejs.png"
import php from "../../img/logos/php.png"
import mongo from "../../img/logos/mongo.png"
import express from "../../img/logos/express.png"
import wp from "../../img/logos/wp.png"
import mysql from "../../img/logos/mysql.png"
import AI from "../../img/logos/AI.png"
import github from "../../img/logos/github.png"
import xampp from "../../img/logos/xampp.png"
import vscode from "../../img/logos/vscode.png"
import postman from "../../img/logos/postman.png"
import canva from "../../img/logos/canva.png"
import pma from "../../img/logos/phpmyadmin.png"
import { motion } from "framer-motion";

const Skills = () => {
    const handleDownload = () => {
        window.open('https://drive.google.com/u/0/uc?id=1AWtHPKnMcwcXuu2C2xkOmA6ZwGOhTZ05&export=download');
      };
  return (
    <div id='Skills' className="skills">
        <div className="awesome">
        <span >My Awesome</span>
        <span>Skills</span>
        <br />
        <span>
          <ul>
            <li>🐍 Programming Languages</li>
            <li>🎨 FrontEnd Development</li>
            <li>💻 BackEnd Development</li>
            <li>🔧Tools</li>
            <li>🗄️Database</li>
          </ul>
          <br />
        </span>
        <button style={{width:"10rem"}} onClick = {handleDownload} className="btn btn-color-2 project-btn">Download CV</button>
        </div>
        {/*Languages */}
        <div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, type: "spring" }}
          whileHover={{ scale: 0.8 }}
          className="sl-mainCircle">
        
            <div className="sl-secCircle">
                <img src={java} alt="" />
            </div>
            <div className="sl-secCircleCenter">
                <h2>Languages</h2>
            </div>
            <div className="sl-secCircle">
                <img src={js} alt="" />
            </div>
            <div className="sl-secCircle">
                <img src={c} alt="" />
            </div>
            <div className="sl-secCircle">
                <img src={python} alt="" />
            </div>
            </motion.div>
        {/*Background Circle */}
        <div className="sl-backCircle sblueCircle"></div>
        <div className="sl-backCircle syellowCircle"></div>
        </div>
        
        {/* Frontend*/}
        <div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, type: "spring" }}
          whileHover={{ scale: 0.8 }}
          className="sf-mainCircle">
            <div className="sf-secCircle">
                <img src={html} alt="" />
            </div>
            <div className="sf-secCircleCenter">
                <h2>FrontEnd</h2>
            </div>
            <div className="sf-secCircle">
                <img src={js} alt="" />
            </div>
            <div className="sf-secCircle">
                <img src={css} alt="" />
            </div>
            <div className="sf-secCircle">
                <img src={bootstrap} alt="" />
            </div>
            <div className="sf-secCircle">
                <img src={react} alt="" />
            </div>
        </motion.div>
        {/*Background Circle */}
        <div className="sf-backCircle fblueCircle"></div>
        <div className="sf-backCircle fyellowCircle"></div>
        </div>
        
        {/* Backend*/}
        <div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, type: "spring" }}
          whileHover={{ scale: 0.8 }}
          className="sb-mainCircle">
            <div className="sb-secCircle">
                <img src={php} alt="" />
            </div>
            <div className="sb-secCircleCenter">
                <h2>BackEnd</h2>
            </div>
            <div className="sb-secCircle">
                <img src={express} alt="" />
            </div>
            <div className="sb-secCircle">
                <img src={postman} alt="" />
            </div>
            <div className="sb-secCircle">
                <img src={node} alt="" />
            </div>
        </motion.div>
        {/*Background Circle */}
        <div className="sb-backCircle bblueCircle"></div>
        <div className="sb-backCircle byellowCircle"></div>
        </div>
        {/* TOOLS*/}

        <div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, type: "spring" }}
          whileHover={{ scale: 0.8 }}
          className="st-mainCircle">
            <div className="st-secCircle">
                <img src={wp} alt="" />
            </div>
            <div className="st-secCircleCenter">
                <h2>  Tools</h2>
            </div>
            <div className="st-secCircle">
                <img style={{transform:'scale(0.1)'}} src={xampp} alt="" />
            </div>
            <div className="st-secCircle">
                <img src={vscode} alt="" />
            </div>
            <div className="st-secCircle">
                <img src={github} alt="" />
            </div>
            <div className="st-secCircle">
                <img src={AI} alt="" />
            </div>
            <div className="st-secCircle">
                <img src={canva} alt="" />
            </div>
        </motion.div>
        {/*Background Circle */}
        <div className="st-backCircle tblueCircle"></div>
        <div className="st-backCircle tyellowCircle"></div>
        </div>

        {/* DATABASE*/}

        <div>
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3.5, type: "spring" }}
          whileHover={{ scale: 0.8 }}
          className="sd-mainCircle">
            <div className="sd-secCircle">
                <img src={mongo} alt="" />
            </div>
            <div className="sd-secCircleCenter">
                <h2>Database</h2>
            </div>
            <div className="sd-secCircle">
                <img src={mysql} alt="" />
            </div>
            <div className="sd-secCircle">
                <img src={vscode} alt="" />
            </div>
            <div className="sd-secCircle">
                <img src={pma} alt="" />
            </div>
        </motion.div>
        {/*Background Circle */}
        <div className="sd-backCircle dblueCircle"></div>
        <div className="sd-backCircle dyellowCircle"></div>
        </div>
    </div>
  )
}

export default Skills




