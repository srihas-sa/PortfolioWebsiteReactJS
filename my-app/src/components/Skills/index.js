import React from 'react'
import { FaReact, FaNodeJs , FaHtml5 , FaCss3Alt , FaPython , FaGit } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import './index.css'

const Skills = () => (
    <div class = "skills container">
    <div class = "title">
      
        <h2>My Skills</h2>
      
    </div>

    <p class = "text">Versatile web developer proficient in frontend technologies like HTML, CSS, and JavaScript, with expertise in building dynamic user interfaces using React. Experienced in backend development with Node.js and Express, utilizing MongoDB for efficient data management. Skilled in version control with Git, and committed to delivering responsive, user-centric designs.</p>

    <div class = "row">
      <div class = "item">
        <div class = "item-text">
          <span>ReactJS <FaReact /> </span>
          <span class = "w-90">90%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-90"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>NodeJs <FaNodeJs /></span>
          <span class = "w-75">75%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-75"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>HTML5 <FaHtml5 /> </span>
          <span class = "w-85">85%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-85"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>CSS3 <FaCss3Alt /> </span>
          <span class = "w-80">80%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-80"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>Python <FaPython  /> </span>
          <span class = "w-90">90%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-90"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>JavaScript <TbBrandJavascript /></span>
          <span class = "w-80">80%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-80"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>SQL <SiMysql size="30"/></span>
          <span class = "w-68">70%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-68"></div>
        </div>
      </div>

      <div class = "item">
        <div class = "item-text">
          <span>Github <FaGit /></span>
          <span class = "w-68">70%</span>
        </div>
        <div class = "progress">
          <div class = "progress-bar w-68"></div>
        </div>
      </div>
    </div>
  </div>
  

)

export default Skills