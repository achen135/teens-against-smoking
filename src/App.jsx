import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero Component/Hero'
import Mission from './Mission/Mission'
import Stories from './Stories/Stories'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/> 
      <main>
         <Mission/>   
         <Stories/>
      </main>
    </>
  )
}

export default App
