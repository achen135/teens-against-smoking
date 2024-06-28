import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Mission from './Mission/Mission'
import Stories from './Stories/Stories'
import Stats from './Stats/Stats'
import Cta from './CTA/Cta'
import Footer from './Footer/Footer'

function App() {
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
