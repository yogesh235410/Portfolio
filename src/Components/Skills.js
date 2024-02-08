import './Skills.css';
import './Background.css';
import skills from '../Assets/skills3.png';
import science from '../Assets/science.png';
import git from '../Assets/git.png';
import github from '../Assets/github2.png';
import html from '../Assets/html.png';
import js from '../Assets/java-script.png';
import java from '../Assets/java.png';
import css from '../Assets/css-3.png';
import python from '../Assets/python.png';
import c from '../Assets/c-.png';
import React from 'react';
import sql from '../Assets/mysql.png'

const Skills = () => {
  return (
    <div className='mainskillsframe'>
            <img className = 'skillsimg' src={skills} alt ='skills' /> 
        <div className='main-skillsicon'>
            <h1>SKILLS</h1>
            <div className='upper'>
            <div className='react-container'>
                <img className = 'react' src={science} alt ='react'/>
                <div className='python-content'>
                    <h1>React</h1>
                </div>
            </div>
            <div className='python-container'>
                <img className = 'python' src={python} alt ='python'/>
                <div className='python-content'>
                    <h1>Python</h1>
                </div>
            </div>
            <div className='git-container'>
                <img className = 'git' src={git} alt ='git'/>
                <div className='python-content'>
                    <h1>Git</h1>
                </div>
            </div>
            <div className='github-container'>
                <img className = 'github' src={github} alt ='github'/>
                <div className='python-content'>
                    <h1>GitHub</h1>
                </div>
            </div>
        </div>
            <div className='lower'>
            <div className='html-container'>
                <img className = 'html' src={html} alt ='html'/>
                <div className='python-content'>
                    <h1>HTML</h1>
                </div>
            </div>

            <div className='css-container'>
                <img className = 'css' src={css} alt ='css'/>
                <div className='python-content'>
                    <h1>CSS</h1>
                </div>
            </div>

            <div className='java-container'>
                <img className = 'java' src={java} alt ='java'/>
                <div className='python-content'>
                    <h1>Java</h1>
                </div> 
            </div>
            <div className='js-container'>
                <img className = 'js' src={js} alt ='js'/>
                <div className='python-content'>
                    <h1>JavaScript</h1>
                </div>
            </div>
            <div className='c-container'>
                <img className = 'c' src={c} alt ='c++'/>
                <div className='python-content'>
                    <h1>C++</h1>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Skills


