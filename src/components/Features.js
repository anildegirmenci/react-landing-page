import React from 'react';
import Guy from '../assets/images/people.png';
import Bg from '../assets/images/guy-bg.png';
import './style/Cards.css';


function Features() {
    return (
        <div className='features-item-container'>
            <div className='text-wrapper'>
                <h3>Every day your home faces countless potential threats.
                    Every day you face countless potential headaches.
                    A small problem can become a major disaster.
                    Early warning signs exist but often you can't hear or see them.
                </h3>
            </div>
            <div className='cards-item-wrap'>
                <img className='cards-guy' src={Guy} alt='People' />
                <img className='cards-bg' src={Bg} alt='Background' />
            </div>

        </div>
    )
}

export default Features
