import React from 'react'
import './Cta.css'

const Cta = () => {
  return (
    <>
        <div className='cta-banner'>
            What can I do?
        </div>

        <section className='cta-container' id='cta'>
            <div className='resources-container'>
                 <h2>Find Resources and Support:</h2>

                 <ul className='resources-content'>
                    <li>
                        <p>Getting help: If you or someone you know are affected by an underage smoking issue, please consider calling and receiving direct and professional support below.</p>
                        <a href="https://www.samhsa.gov/find-help/national-helpline" target='_blank'>SAMHSA National helpline</a>
                    </li>
                    <li>
                        <p>Becoming informed: Want to become more acquainted with information regarding teenage smoking? Check out this brief fact sheet from the American Lung Association below.</p>
                        <a href="https://www.lung.org/quit-smoking/smoking-facts/tobacco-use-among-children#:~:text=People%20who%20start%20smoking%20at,not%20able%20to%20do%20so." target='_blank'>American Lung Association</a>
                    </li>
                    <li>
                        <p>Bringing Awareness/Helping others: Want to help bring awareness to or provide assistance to others affected by underage smoking but don’t know where to start? Don’t worry and check out these articles to help you get started!</p>
                        <a href="https://wristbandcreation.com/10-things-can-raise-awareness-cause/" target='_blank'>Wrist band creation </a>
                        <a href="https://www.lung.org/quit-smoking/helping-teens-quit" target='_blank'>American Lung Association</a>
                    </li>
                 </ul>

            </div>
            <div className='contact-container'>
                <h2>Contact us. Share your story: </h2>
                <ul className='contact-content'>
                    <li>
                        <img src="./icons/email.png" alt="" />
                        teensagainstsmoke@gmail.com
                    </li>
                    <li>
                        <img src="./icons/instagram.png" alt="" />
                        @teensagainstsmoking
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Cta