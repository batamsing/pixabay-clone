import React from 'react';
import instagram from '../assets/instagram.png';
import pinterest from '../assets/pinterest.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import logoblack from '../assets/logo-long-black.png';

function Footer() {
  return (
    <div className='footer-container display-f'>
        <div className='footer1'>
            <img src={logoblack} className='logo-black'/>
            <p>Over 4.5 million+ high quality stock images, videos and music shared by our talented community.</p>
            <div className='social-media-list display-f'>
                <a href='https://www.instagram.com/puyambatam/' className='social-media'><img src={instagram} className='social-media' /></a>
                <a href='https://in.pinterest.com/batampuyam/' className='social-media'><img src={pinterest} className='social-media' /></a>
                <a href='https://twitter.com/PuyamBatam' className='social-media'><img src={twitter} className='social-media' /></a>
                <a href='https://github.com/batamsing' className='social-media'><img src={github} className='social-media' /></a>
            </div>
        </div>
        <div className='footer2 display-f'>
            <div className='diaplsy-f flex-c section'>
                <h4>Discover</h4>
                <ul className='list-type-style-none'>
                    <li>Editors Choice</li>
                    <li>Curated Collections</li>
                    <li>Pixabay Radio</li>
                    <li>Popular Images</li>
                    <li>Popular Videos</li>
                    <li>Popular Music</li>
                    <li>Popular Search</li>
                </ul>
            </div>

            <div className='diaplsy-f flex-c section'>
                <h4>Community</h4>
                <ul className='list-type-style-none'>
                    <li>Blog</li>
                    <li>Forums</li>
                    <li>Creators</li>
                    <li>Cameras</li>
                </ul>
            </div>

            <div className='diaplsy-f flex-c section'>
                <h4>About</h4>
                <ul className='list-type-style-none'>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Liscense Summary</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookies Policy</li>
                    <li>API</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer