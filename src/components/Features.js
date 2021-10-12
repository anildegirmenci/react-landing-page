import React from 'react';
import Guy from '../assets/images/people.png';
import Bg from '../assets/images/guy-bg.png';
import './style/Cards.css';
// Assets
import Msg from '../assets/images/1.svg';
import Msg2 from '../assets/images/2.svg';
import Msg3 from '../assets/images/3.svg';
import Msg4 from '../assets/images/4.svg';
import FeatureIcons from '../assets/images/features.png';


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
            <div className='features-title'>
                    <h3>FEATURES</h3>
                    <h2>Meet Siphome</h2>
                    <h4>The most comprehensive smart solution to home maintenance. 
                        All it takes is a simple and affordable sensor installation 
                        by one of our Siphome certified technicians.
                    </h4>
                    <img className='features-icon' src={FeatureIcons} alt='features' />
                    <div className='img-areas'>
                        <div className='vectors'>
                            <img className='messages msg1' src={Msg} alt='v1' />
                            <img className='messages msg2' src={Msg2} alt='v1' />
                            <img className='messages msg3' src={Msg3} alt='v1' />
                            <img className='messages msg4' src={Msg4} alt='v1' />
                        </div>
                        <div className='cards-item-wrap'>
                            <img className='cards-guy' src={Guy} alt='People' />
                            <img className='cards-bg' src={Bg} alt='Background' />
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Features
