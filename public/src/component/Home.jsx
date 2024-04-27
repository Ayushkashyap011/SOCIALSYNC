import React from 'react';
import './Home.css';
import homeBg from '../assets/homeBg.mp4';

function Home() {
    return (
        <div className="home-container">
            <div className="video-container">
                <video src={homeBg} className="slider" autoPlay loop muted ></video>
                <div className="detail-box">
                    <h1>SocialSync <br /><span></span></h1>
                    <span>Where connections spark success</span>
                </div>
            </div>
           <div className="choice">
            <button type="submit">Influencer</button>
            <button type="submit">Company</button>
            </div>
        </div>
    );
}

export default Home;