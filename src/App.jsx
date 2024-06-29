import React, { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Stories from './Stories/Stories'
import Stats from './Stats/Stats'
import Cta from './CTA/Cta'
import Footer from './Footer/Footer'

function App() {
  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenSections = document.querySelectorAll('section')
    hiddenSections.forEach((el) => observer.observe(el))

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/> 
         <Mission/>   
         <Stories/>
         <Stats/>
         <Cta/>
      <Footer/>
    </>
  )
}

export default App
