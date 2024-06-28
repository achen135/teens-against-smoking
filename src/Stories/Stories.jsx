import React from 'react'
import { useState } from 'react'
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
          style={{ transform: `translate3d(${-index * 540}px, 0, 0)`}}
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
      <Slideshow/>
    </section>
  )
}

export default Stories