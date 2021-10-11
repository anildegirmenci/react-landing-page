import React from 'react';
import '../App.css';
import Features from './Features';
import Footer from './Footer';
import HeroSection from './HeroSection';


function Home() {
    return (
        <div style={{backgroundColor:'#fff'}}>
            <HeroSection />
            <Features />
            <Footer />
        </div>
    )
}

export default Home
