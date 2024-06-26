import React from 'react'
import './Navbar.css'

const Navbar = () => {

  const toggleMenuOn = () => {
      document.querySelector('.sidebar').style.display = 'flex'
  }

  const toggleMenuOff = () => {
    document.querySelector('.sidebar').style.display = 'none'
}

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

        <button className='navbar-menu' onClick={toggleMenuOn}>
            <img src="./icons/hamburger menu.png" alt="menu"/>
        </button>

        <div className='sidebar'>
            <a href="">MISSION</a>
            <a href="">STORY</a>
            <a href="">STATS</a>
            <a href="">RESOURCES/CONTACT</a>
            <button onClick={toggleMenuOff}>
              <img src="./icons/close.png" alt="close" />
            </button>
        </div>
    </div>
  )
}

export default Navbar