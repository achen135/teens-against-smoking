import React from 'react';
import './Stats.css';
import person from './person.png';

const Stats = () => {
  return (
    <section className='stats-container' id='stats'>
      <h2 className='stats-title'>
        Tobacco's Life Toll
      </h2>
      <div className='stats-content'>
        <div className='image'>
          <img
            src={person}
            alt='person image'
          />
        </div>
        <div className='textbox'>
            <p><b>Reduced Life Expectancy:</b></p>
            <p>Heavy smokers 10 to 17.9 years less compared to nonsmokers</p>
            <br></br>

            <p><b>Increased Risk of Diseases:</b></p>
            <p>Heart attacks, COPD, emphysema, and various cancers</p>
            <br></br>

            <p><b>Smoking & Depression:</b></p>
            <p>Teen smokers are four times as likely to develop depressive symptoms</p>
        </div>
        
      </div>
    </section>
  );
}

export default Stats;
