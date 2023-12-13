import React from 'react'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'

const Header = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Skills',
        link: '#skills'
      },
      {
        text: 'Projects',
        link: '#projects'
      },
      {
        text: 'Contact',
        link: '#contact'
      }
    ],
    logo: {
      text: 'Portfolio.'
    },
    style: {
      barStyles: {
        background: '#444'
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white'
      }
    }
  }
  return <Navbar {...props} />
}

export default Header