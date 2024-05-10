"use client"
import "./Navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <nav>
       <ul className="no-bullets flex-container">
            <li><a>Home</a></li>
            <li><a>About Me</a></li>
            <li><a>Profesional Summary</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact Me</a></li>
            <li><a>Blog</a></li>
       </ul>
    </nav>
  )
}

export default Navbar