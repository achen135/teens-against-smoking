import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
      setSidebarOpen(!sidebarOpen);
    }

  return (
    <div className='navbar-container'>
       <a href="../"><img src="./icons/logo.webp" alt="logo" className='mavbar-logo' width='65' height='65'/></a>

        <ul className='navbar-sitemap'>
          <li><a href="#mission">Mission</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#stats">Stats</a></li>
            <li><a href="#cta">Resources/Contact</a></li>
        </ul>
        <button className='navbar-menu' onClick={toggleMenu}>
            <img src="./icons/hamburger menu.png" alt="menu"/>
        </button>


        <div className={`sidebar ${sidebarOpen ? 'Open' : ''}`}>
            <a href="#mission" onClick={toggleMenu}>MISSION</a>
            <a href="#story" onClick={toggleMenu}>STORY</a>
            <a href="#stats" onClick={toggleMenu}>STATS</a>
            <a href="#cta" onClick={toggleMenu}>RESOURCES/CONTACT</a>
            <button onClick={toggleMenu}>
              <img src="./icons/close.png" alt="close" />
            </button>
        </div>
    </div>
  )
}

export default Navbar