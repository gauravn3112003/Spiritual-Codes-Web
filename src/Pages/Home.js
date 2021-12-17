import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
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
                src="https://images.pexels.com/photos/5372800/pexels-photo-5372800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="home-text">
            Founder of <span>Spiritual Codes</span>
          </div>
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
      </section>
    </>
  );
}
