import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/mini-logo.svg';
import { Button } from './Button'
import './style/Footer.css';
import './style/Cards.css';
import Girl from '../assets/images/girl.png';
import Bg from '../assets/images/girl-bg.png';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <div>
                    <div className='img-areas'>
                    <img className='cards-girl' src={Girl} alt='People' />
                    <img className='cards-bg' src={Bg} alt='Background' />
                    </div>
                    <form className='input-areas'>
                        <input className='footer-input' name='name' type='text' placeholder='Enter name' />
                        <input className='footer-input' name='email' type='email' placeholder='Enter email' />
                        <input className='footer-input' name='subject' type='text' placeholder='Enter subject' />
                        <input className='footer-input' name='job' type='text' placeholder='Please Select' />
                        <input className='footer-input' name='companyname' type='text' placeholder='Enter company name' />
                        <input className='footer-input' name='msg' type='text' placeholder='Enter message' />
                        <Button buttonStyle='btn--primary' buttonSize='btn--large'>Send Now</Button>
                    </form>
                </div>
            </section>
            <section className='footer-navigation'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items footer-logo'>
                            <img className='logo-style' src={Logo} alt='Logo' width='200px' />
                            <div>
                                <div style={{fontWeight:'700'}}>Siphome, LLC</div>
                                The New Building 2320  Lang Avenue,
                                Park Valley, Utah,
                                United States.
                                84329
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                P: +1 176 909 2900
                            </div>
                            <div>
                                E: siphome@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                            <h2>Navigation</h2>
                            <Link to='/signin'>Home</Link>
                            <Link to='/'>Features</Link>
                            <Link to='/'>Services</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>We Care</Link>
                            <Link to='/'>Idea Exchange</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>About</h2>
                            <Link to='/'>Contatct Us</Link>
                            <Link to='/'>Privacy & Policy</Link>
                            <Link to='/'>Terms & Conditions</Link>
                            <Link to='/'>FAQ</Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Stay Connected</h2>
                            <Link className='social-icon-link facebook cards-flex' to='/' target='_blank' aria-label='Facebook'>
                                <i className='fab fa-facebook-f' />
                                <div style={{ marginLeft: '10px',fontSize:'18px' }}>Facebook</div>
                            </Link>
                            <Link className='social-icon-link twitter cards-flex' to='/' target='_blank' aria-label='Twitter'>
                                <i className='fab fa-twitter' />
                                <div style={{ marginLeft: '10px',fontSize:'18px' }}>Twitter</div>
                            </Link>
                            <Link className='social-icon-link instagram cards-flex' to='/' target='_blank' aria-label='Instagram'>
                                <i className='fab fa-instagram' />
                                <div style={{ marginLeft: '10px',fontSize:'18px' }}>Instagram</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <small className='website-rights'>Copyright© 2020. Siphome Smart home LLC. </small>
            </section>
        </div>
    )
}

export default Footer
