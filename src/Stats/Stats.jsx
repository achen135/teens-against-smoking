import React, { useState } from 'react';
import './Stats.css';
import person from './person.webp';
import flag from './pin.webp'

const Stats = () => {
  const [hoveredFlag, setHoveredFlag] = useState(null)
  const [textDisplayed, setTextDisplayed] = useState({
    head: false,
    body: false,
    heart: false
  })

  const displayText = (part) => {
    setHoveredFlag(part)
    setTextDisplayed({[part]: true})
  }

  const hideText = () => {
    setTextDisplayed({
      head: false,
      body: false,
      heart: false,
    });
    setHoveredFlag(null)
  }

  return (
    <div className='stats-background'>
    <section className='stats-container' id='stats'>
      <h1>Tobacco's Life Toll</h1>
      <h2>Hover over a <b>flag</b> for information</h2>
      <div className='stats-content'>
          <div className='person-container'>
              <img src={person}/>
              <img className='flag' id='head' src={flag} alt="*" onMouseEnter={() => displayText('head')} onMouseLeave={() => setHoveredFlag(hideText)} onTouchStart={(e) => {e.preventDefault; displayText('head')}} onTouchEnd={(e) => setHoveredFlag(hideText)}/>
              <img className='flag' id='heart' src={flag} alt="*" onMouseEnter={() => displayText('heart')} onMouseLeave={() => setHoveredFlag(hideText)} onTouchStart={(e) => {e.preventDefault; displayText('heart')}} onTouchEnd={(e) => setHoveredFlag(hideText)}/>
              <img className='flag' id='body' src={flag} alt="*" onMouseEnter={() => displayText('body')} onMouseLeave={() => setHoveredFlag(hideText)} onTouchStart={(e) => {e.preventDefault; displayText('body')}} onTouchEnd={(e) => setHoveredFlag(hideText)}/>
          </div>
          <div className='textboxes'>
          <div className={`textbox ${textDisplayed && hoveredFlag === 'head' ? 'Displayed' : ''}`}>
            <p><b>Smoking & Depression:</b></p>
            <p>Teen smokers are four times as likely to develop depressive symptoms</p>
          </div>
          <div className={`textbox ${textDisplayed && hoveredFlag === 'heart' ? 'Displayed' : ''}`}>
            <p><b>Increased Risk of Diseases:</b></p>
            <p>Heart attacks, COPD, emphysema, and various cancers</p>
          </div>
          <div className={`textbox ${textDisplayed && hoveredFlag === 'body' ? 'Displayed' : ''}`}>
            <p><b>Reduced Life Expectancy:</b></p>
            <p>Heavy smokers 10 to 17.9 years less compared to nonsmokers</p>
          </div>
          </div>
      </div>
    </section>
    <div class="custom-shape-divider-top-1719618702">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}

export default Stats;
