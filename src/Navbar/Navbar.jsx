import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
      setSidebarOpen(!sidebarOpen);
    }

  return (
    <section className='navbar-container'>
       <a href="../"><img src="" alt="logo" className='mavbar-logo'/></a>

        <ul className='navbar-sitemap'>
          <li><a href="#">Mission</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Stats</a></li>
            <li><a href="#">Resources/Contact</a></li>
        </ul>

        <button className='navbar-menu' onClick={toggleMenu}>
            <img src="./icons/hamburger menu.png" alt="menu"/>
        </button>

        <div className={`sidebar ${sidebarOpen ? 'Open' : ''}`}>
            <a href="">MISSION</a>
            <a href="">STORY</a>
            <a href="">STATS</a>
            <a href="">RESOURCES/CONTACT</a>
            <button onClick={toggleMenu}>
              <img src="./icons/close.png" alt="close" />
            </button>
        </div>
    </section>
  )
}

export default Navbar