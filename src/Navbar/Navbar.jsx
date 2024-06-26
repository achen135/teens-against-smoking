import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleMenu = () => {
      setSidebarOpen(!sidebarOpen);
    }

//   const toggleMenuOn = () => {
//       document.querySelector('.sidebar').style.display = 'flex'
//   }

//   const toggleMenuOff = () => {
//     document.querySelector('.sidebar').style.display = 'none'
//  }

  return (
    <div className='navbar-container'>
        <div className='navbar-logo'>
            Logo
        </div>

        <div className='navbar-sitemap'>
            <a href="">Mission</a>
            <a href="">Story</a>
            <a href="">Stats</a>
            <a href="">Resources/Contact</a>
        </div>

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
    </div>
  )
}

export default Navbar