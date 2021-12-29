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
    <nav className="navbar ">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            Spiritual_ <span>Codes</span>
          </Link>
        </div>
        <ul className="menu ">
          <div className="overlay-nav"></div>
          <div className="navi">
            <li>
              <Link
                className={`click ${
                  location.pathname === "/" ? "clicked" : ""
                }`}
                to="/"
              >
                <i className="bi bi-house-door-fill"></i>
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
                <i className="bi bi-card-heading"></i>
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
                <i className="bi bi-handbag-fill"></i>
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
                <i className="bi bi-telephone-fill"></i>
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
                <i className="bi bi-person-fill"></i>
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={`click ${
                  location.pathname === "/LoginAdmin" ? "clicked" : ""
                }`}
                to="/LoginAdmin"
              >
                <i className="bi bi-person-fill"></i>
                Sign In
              </Link>
            </li>
            <li className="blog-search-li">
              <form action="GAyjgsh" className="left-search">
                <input
                  type="search"
                  className="blog-search"
                  placeholder="Search Blog..."
                  name=""
                  id=""
                />
                <button>
                  <i class="bi bi-search"></i>
                </button>
              </form>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </li>
          </div>
        </ul>
        <div className="burger">
          <i className="bi bi-list listli"></i>
        </div>
      </div>
    </nav>
  );
}
