import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import Gallary from './Gallary';
import SkillsBar from './SkillsBar';
export default function Home() {
    return (
    <>
    <section className="home custom-shape-divider-bottom-1630397398" data-aos="fade-down">
                <div className="left">
                    <div className="container">
                        <div className="head">
                            Spiritual_<span>Codes</span>
                        </div>
                        <div className="title" data-aos="fade-down">
                            <p>I'm <span id="spin"></span>!</p>
                        </div>
                        <div className="btn" data-aos="fade-down">
                            <Link to="/joinUs">Join Us</Link>
                            <a href="/">Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="right" data-aos="fade-down">
                    <img src="https://www.apnikaksha.net/static/media/IntroSection.38293a49.svg" alt="vector" />
                </div>
                <div className="social">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-google"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-telegram"></i>
                </div>
    </section>
    
    <SkillsBar/>
    <Gallary/>
    
    </>
    )
}
