import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className='stats-container' id='stats'>
      <h1 className='stats-title'>
        Tobacco's Life Toll
      </h1>

      <div className='stats-canva'>
        <iframe
          src='https://www.canva.com/design/DAGJWSFg8YU/-W8Cu92iNvUZclovxZaPOg/view'
          title='Smoking Life Effects'
          width='100%'
          height='600px'
          frameborder='0'
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Stats;
