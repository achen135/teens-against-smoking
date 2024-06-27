import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero Component/Hero'
import Mission from './Mission/Mission'
import Stories from './Stories/Stories'
import Stats from './Stats/Stats'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/> 
         <Mission/>   
         <Stories/>
         <Stats/>
    </>
  )
}

export default App
