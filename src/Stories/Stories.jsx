import React from 'react'
import { useState, useEffect } from 'react'
import './Stories.css'

// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react (HUGE COPYING)

const storyData = [{
  name: "Ethan",
  storyText: "I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING I LOVE SMOKING ",
  picture: ">:)"
}, {
  name: "Alex",
  storyText: "YAH YAH YAH YAH",
  picture: ":O"
}, {
  name: "Awesome Man",
  storyText: "wonkers",
  picture: ">:DDD"
}, {
  name: "Alex",
  storyText: "YAH YAH YAH YAH",
  picture: ":O"
}, {
  name: "Alex",
  storyText: "YAH YAH YAH YAH",
  picture: ":O"
}

// Template!!
// , {
//   name: "",
//   storyText: "",
//   picture: ""
// }
]

function Slideshow() {
const [index, setIndex] = useState(0)

// Everything until the first return is the @media thing; https://stackoverflow.com/questions/54491645/media-query-syntax-for-reactjs; Marcos Guerrero is the goat
const [translateAmt, setTranslateAmt] = useState(51)

useEffect(() => {
  const handleResize = () => {
    window.innerWidth < 600 ? setTranslateAmt(100) : setTranslateAmt(51)
  }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
    {/* temp buttons? (replace with svg?) */}
    <div className="btn-container">
      <button className="btn" onClick={() => { index == 0 ?  setIndex(index => storyData.length - 1 ) : setIndex(index => index - 1 ) }}>Backward</button>
      <button className="btn" onClick={() => { index == storyData.length-1 ?  setIndex(index => 0) : setIndex(index => index + 1) }}>Forward</button>
    </div>
    <div className="slideshow">
      <div className="slideshow-slider"
      // template literal; the $ lets index be a variable?
          style={{ transform: `translate3d(${-index * translateAmt}%, 0, 0)`} }
          
          >
        {storyData.map((story, index) => (
          <div
            className="slide" 
            key={index}>
            <article>{story.name}</article>
            <p>{story.storyText}</p>
            {/* change to img later*/}
            <p>{story.picture}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

const Stories = () => {
  return (
    <section className='stories-background'>
      <h2>Stories</h2>
      <Slideshow/>
    </section>
  )
}

export default Stories