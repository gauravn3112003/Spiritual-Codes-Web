import React, { useEffect } from "react";
import "../App.css";
import nav from "./Javascript/nav";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <nav class="navbar ">
      <div class="max-width">
        <div class="logo">
          <Link to="/">
            Spiritual_ <span>Codes</span>
          </Link>
        </div>
        <ul class="menu ">
          <div class="navi">
            <li>
              <Link
                className={`click ${
                  location.pathname === "/" ? "clicked" : ""
                }`}
                to="/"
              >
                <i class="bi bi-house-door-fill"></i>
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/Blog" ? "clicked" : ""
                }`}
                to="/Blog"
              >
                <i class="bi bi-card-heading"></i>
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/Services" ? "clicked" : ""
                }`}
                to="/Services"
              >
                <i class="bi bi-question-square-fill"></i>
                Programming Quiz
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/Services" ? "clicked" : ""
                }`}
                to="/Services"
              >
                <i class="bi bi-file-earmark-spreadsheet-fill"></i>
                Cheetsheet
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/Services" ? "clicked" : ""
                }`}
                to="/Services"
              >
                <i class="bi bi-handbag-fill"></i>
                Service
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/ContactUs" ? "clicked" : ""
                }`}
                to="/ContactUs"
              >
                <i class="bi bi-telephone-fill"></i>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/About" ? "clicked" : ""
                }`}
                to="/About"
              >
                <i class="bi bi-person-fill"></i>
                About Us
              </Link>
            </li>
            
          </div>
          <div class="close">
            <i class="fas fa-times-circle"></i>
          </div>
        </ul>
        <div class="burger">
          <i class="bi bi-list listli"></i>
        </div>
      </div>
    </nav>
  );
}
