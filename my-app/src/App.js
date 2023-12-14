import {React} from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';
import './App.css';

const App = () => ( 
  <div className='outermostContainer'>
    <Header />
    <div id="home" className='HomeSection'>
        <Home />
    </div>
    <div id="skills" className='SkillsSetion'>
        <Skills />
    </div>
    <div id="projects" className='ProjectsSection'>
        <Projects />
    </div>
    <div id="contactme" className='contactmeSection'>
        <Contact />
    </div>
  </div>
)


export default App;
