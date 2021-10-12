import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './style/Footer.css';
import './style/Cards.css';

// IMG & SVG
import Logo from '../assets/images/mini-logo.svg';
import Girl from '../assets/images/girl.png';
import Bg from '../assets/images/girl-bg.png';
import Ig from '../assets/images/ig.png';
import Fb from '../assets/images/fb.png';
import Tw from '../assets/images/tw.png';



function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <div className='footer-title'>
                    <h3>CONTACT</h3>
                    <h2>Skip logging in,
                        get what you need
                        with a few key details
                    </h2>
                    <div className='img-areas'>
                        <img className='cards-girl' src={Girl} alt='People' />
                        <img className='cards-girl-bg' src={Bg} alt='Background' />
                    </div>
                </div>
                <form className='input-areas'>
                    <div className='input-text'>Your Name (required)</div>
                    <input className='footer-input' name='name' type='text' placeholder='Enter name' />
                    <div className='input-text'>Email (required)</div>
                    <input className='footer-input' name='email' type='email' placeholder='Enter email' />
                    <div className='input-text'>Subject</div>
                    <input className='footer-input' name='subject' type='text' placeholder='Enter subject' />
                    <div className='input-text'>Select Job</div>
                    <select className='footer-input' placeholder='Please Select' name='job'>
                        <option value="pls">Please Select</option>
                        <option value="m">M</option>
                        <option value="d">D</option>
                        <option value="b">B</option>
                    </select>
                    <div className='input-text'>Company Name</div>
                    <input className='footer-input' name='companyname' type='text' placeholder='Enter company name' />
                    <div className='input-text'>Message</div>
                    <input className='footer-input' name='msg' type='text' placeholder='Enter message' />
                    <Button buttonStyle='btn--primary' buttonSize='btn--large'>Send Now</Button>
                </form>
            </section>
            <section className='footer-navigation'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items footer-logo'>
                            <img className='logo-style' src={Logo} alt='Logo' width='200px' />
                            <div>
                                <div style={{ fontWeight: '700' }}>Siphome, LLC</div>
                                The New Building 2320  Lang Avenue,
                                Park Valley, Utah,
                                United States.
                                84329
                            </div>
                            <div style={{ paddingTop: '15px' }}>
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
                            <h2 style={{ fontSize: '23px' }}>Stay Connected</h2>
                            <Link className='social-icon-link facebook cards-flex' to='/' target='_blank' aria-label='Facebook'>
                                <img src={Fb} className='fab fa-facebook-f' />
                                <div style={{ marginLeft: '13px', fontSize: '18px' }}>Facebook</div>
                            </Link>
                            <Link className='social-icon-link twitter cards-flex' to='/' target='_blank' aria-label='Twitter'>
                                <img src={Tw} className='fab fa-twitter' />
                                <div style={{ marginLeft: '13px', fontSize: '18px' }}>Twitter</div>
                            </Link>
                            <Link className='social-icon-link instagram cards-flex' to='/' target='_blank' aria-label='Instagram'>
                                <img src={Ig} className='fab fa-instagram' />
                                <div style={{ marginLeft: '13px', fontSize: '18px' }}>Instagram</div>
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
