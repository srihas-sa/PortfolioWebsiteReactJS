import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import './index.css'

const Header = () => ( 
  <div className='header'>
      <a href="#home" class="site-logo" aria-label="homepage">Portfolio<span className='spans'>.</span></a>
      <nav class="main-nav">
        <ul class="nav__list">
          <li class="nav__list-item"><a href="#home" class="nav__link">Home</a></li>
          <li class="nav__list-item">
            <a href="#skills" class="nav__link">Skills</a>
          </li>
          <li class="nav__list-item">
            <a href="#projects" class="nav__link">Projects</a>
          </li>
          <li class="nav__list-item">
            <a href="#contactme" class="nav__link">Contact Me</a>
          </li>
          <li class="nav__list-item"><a href="#" class="nav__link">Blog</a></li>
        </ul>
      </nav>
      

      </div>
)

export default Header