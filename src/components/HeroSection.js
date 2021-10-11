import React from 'react';
import '../App.css';
import { Button } from './Button';
import './style/HeroSection.css';
import LargeImage from '../assets/images/large.png';
import SmallImage from '../assets/images/small.png';


function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='left-side'>
                <h1>Imagine your<br /> home smart enough <span className='btn-green'>to take care</span> of itself.</h1>
                <h4 className='hero-p'>Turn your home into a smarthome today with a simple & affordable upgrade. Discover the upgrade that automates home maintenance.</h4>
                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Learn More</Button>
                </div>
            </div>
            <div className='img-large'>
                <img src={LargeImage} alt='large' />
            </div>
            <div className='img-small'>
                <img src={SmallImage} alt='small' />
            </div>
        </div>
    )
}

export default HeroSection
