import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import HomeSercices from "../components/HomeSercices";
export default function Home() {
  return (
    <>
      <section className="home">
        <div className="shape"></div>
        <div className=" shape2"></div>
        <div className=" shape3"></div>
        <div className="overlay">
          <div className="head-home">
            Hi, <br /> I'm <span>Gaurav</span>
          </div>
          <div className="img-shape">
            <div className="square">
              <img
                src="https://o.remove.bg/downloads/9d82919e-979a-429f-8fb8-6162bc6fa7a5/IMG_4799-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="cr-1 card-img">Front-end Developer</div>
            <div className="cr-2 card-img">Full Stack sDeveloper</div>
            <div className="cr-3 card-img">Digital Marketer</div>
          </div>
          {/* <div className="home-text">
            Founder of <span>Spiritual Codes</span>
          </div> */}
          <div className="home-icons">
            <div className="home-icon">
              <i class="bi bi-facebook"></i>
            </div>
            <div className="home-icon">
              <i class="bi bi-whatsapp"></i>
            </div>
            <div className="home-icon">
              <i class="bi bi-instagram"></i>
            </div>
            <div className="home-icon">
              <i class="bi bi-github"></i>
            </div>
          </div>
          <div className="scroll-home">
            <div className="scroll-flex">
              <div className="circle"></div>
              <div className="swipe-text">Swipe Down</div>
            </div>
          </div>
        </div>
        <div className="components">
          <HomeSercices/>
        </div>
      </section>
    </>
  );
}
