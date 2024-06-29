import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    // Introduction
<div className='hero-container'>
    <div className='hero-bg'>
        <div className='hero-title'>
        Teens Against Smoking
        </div>
        <div className='hero-slogan'>
        Join the movement, help teens quit smoking
        </div>
        <div className='hero-desc'>
        Teens Against Smoking is a community of teens supporting each other to quit smoking and live healthier lives. Together, we can make a difference
        </div>
    </div>

{/* Implements the wavy design beneath the first image */}
    <div class="custom-shape-divider-bottom-1719549009">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>

</div> 
  )
}

export default Hero