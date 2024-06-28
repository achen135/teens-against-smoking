import React from 'react'
import { useState, useEffect } from 'react'
import './Stories.css'

const storyData = [{
// Template!!
// , {
//   name: "",
//   storyText: "",
//   picture: ""
// }

  name: "Ethan",
  storyText: "I started vaping around when I was like 15. I didn't think much of it and thought I could stop whenever I wanted. I was crazily wrong, which is why I'm here now. It nearly ruined me, socially, academically, and athletically. It took over every part of my life. If I didn't finally sit down and decide that I needed help, I don't even know where I'd be right now. To anyone reading this, just know it's never worth it.",
  picture: "./images/ethan.webp"
}, {
  name: "Kai",
  storyText: "Yeah, quitting cigs was a journey, for sure. It all started as something I tried with friends, you know, just to fit in. But it got out of hand real quick. I started feeling crappy all the time—like, short of breath and just not myself. It took hitting rock bottom with my health to realize I needed to stop. With the support of my family, teachers, and some good friends, I managed to stop. It wasn't easy at first, man, those cravings were horrible. But now? I feel so much better. I can breathe easier, I've got more energy, and I'm back to enjoying life without relying on that stuff. If I can do it, anyone can, seriously.",
  picture: "./images/kai.webp"
}, {  
  name: "Anonymous",
  storyText: "I never really thought vaping would get as bad as it did for me. Not before long though, it started taking a toll—I couldn't concentrate in class, always felt tired, and my grades started slipping. I even skipped activities I used to love because I just didn't have the energy. It was like this cloud hanging over me all the time. Finally killing the addiction was tough, but it was the best thing I did for myself, my studies, and a lot more. Vaping might seem harmless, but trust me, it can really throw you off track.",
  picture: ""
}, {
  name: "Anna",
  storyText: "Vaping pretty much ruined my life. It started as something my friends and I did just to look cool, you know? But it quickly turned into a nightmare. I started feeling awful—like I couldn't catch my breath sometimes, and I was always tired. It got so bad that I was scared to admit how hooked I was. When I finally decided to quit, it was like a weight lifted off my shoulders. It took a lot of support from my family and friends to get through it. Now that I'm vape-free, I'm never going back. I can’t go through that again.",
  picture: "./images/Anna.webp"
},  {
  name: "Anonymous",
  storyText: "Tennis is perhaps my favorite sport ever, I play it all the time. But once I started vaping, my gameplay went downhill fast. I'd get winded after just a few rallies, couldn't keep up with my opponents, and my focus was all over the place. It was frustrating because tennis was my thing, you know? Quitting vaping wasn't easy, but it had to happen. Now that I'm off it, I'm starting to feel like my old self again, putting in the extra practice to get back on top.",
  picture: ""
}

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
    <div className="btn-container">
      <button className="btn" onClick={() => { index == 0 ?  setIndex(index => storyData.length - 1 ) : setIndex(index => index - 1 ) }}> <img src="./icons/back.webp" alt="<" /> </button>
      <button className="btn" onClick={() => { index == storyData.length-1 ?  setIndex(index => 0) : setIndex(index => index + 1) }}> <img src="./icons/forward.webp" alt=">" /> </button>
    </div>
    <div className="slideshow">
      <div className="slideshow-slider"
          style={{ transform: `translate3d(${-index * translateAmt}%, 0, 0)`} }
          >
        {storyData.map((story, index) => (
          <div
            className="slide" 
            key={index}>
            <div className='slide-content'>
                <p className='story-text'>{story.storyText}</p>
                <div className='wave'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>       
                <div className='slide-author-info'>  
                {story.picture !== "" ? (<img src={story.picture}/>) : (<img src="./images/defaultpfp.webp"/>)}                   
                  <h2>{story.name}</h2>
                </div>
            </div>
            <img className='quotes-img' src="./images/quotes.webp"/>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

const Stories = () => {
  return (
    <section className='stories-container' id='story'>
      <h1>Your Stories</h1>
    <div className='stories-background'>
    <Slideshow/>
    </div>
    </section>
  )
}

export default Stories