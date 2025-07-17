import React from 'react'
import logo from '../../assets/logo.png';
import { FaChevronRight } from 'react-icons/fa';
import { GoChevronRight } from 'react-icons/go';
import { TiSocialDribbble, TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className='footer-content'>
                <div className="logo_content">
                    <figure>
                        <img src={logo} alt="logo" />
                    </figure>
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <div className="useful-links">
                    <h2>USEFUL LINKS</h2>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>ROOM</li>
                    </ul>
                </div>
                <div className="subscribe">
                    <h2>SUBSCRIBE</h2>
                    <p>Don’t miss to subscribe our news, kindly fill the form bellow</p>
                    <div className="input">
                        <input type="text" placeholder='Your Email Here' />
                        <GoChevronRight className='right-icon' />
                    </div>
                </div>
            </div>
            <div className='icons'>
                <div className='hr'>
                    <hr />
                </div>
                <div className="icon-container">
                    <TiSocialTwitter className='i' />
                    <TiSocialFacebook className='i' />
                    <TiSocialInstagram className='i' />
                    <TiSocialPinterest className='i' />
                    <TiSocialDribbble className='i' />
                </div>
                <div className='hr'>
                    <hr />
                </div>
            </div>
            <div className='privacy'>
                <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
                <p>Privacy Policy <span>Terms of Use</span></p>
            </div>
        </footer>
    )
}

export default Footer
