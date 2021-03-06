import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Styling/Dashboard.css";
export default function SideNav() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <div className="nav-dash">
        <div className="create-btn">
          <Link 
          className="create-blog-btn" to="/Dashboard/CreatePost">
            <i className="bi  bi-pencil-square"></i> Create Post
          </Link>

          <div className="btns-dash">
            <Link
              className={`click ${
                location.pathname === "/Dashboard/ContactUsData"
                  ? "click-nav"
                  : ""
              }`}
              to="/Dashboard/ContactUsData"
            >
              <i className="bi bi-telephone-fill"></i> Contact Us
            </Link>
            <Link
              className={`click ${
                location.pathname === "/Dashboard/ConnectUsData"
                  ? "click-nav"
                  : ""
              }`}
              to="/Dashboard/ConnectUsData"
            >
              <i className="bi bi-broadcast-pin"></i> Connect Us
            </Link>
            <Link to="/">
              <i className="bi bi-globe2"></i> Join Us
            </Link>
            <Link className={`click ${
                location.pathname === "/Dashboard/AllBlogs"
                  ? "click-nav"
                  : ""
              }`} to="/Dashboard/AllBlogs">
              <i className="bi bi-calendar3-fill"></i> All Blogs
            </Link>
            <Link to="/">
              <i className="bi bi-bag-check-fill"></i> Services
            </Link>
            <Link to="/">
              <i className="bi bi-question-circle-fill"></i> Quizes
            </Link>
            <Link to="/">
            <i className="bi bi-gear-fill"></i> Setting
            </Link>
          </div>
          
        </div>
        <button className="logout-btn">
            <i className="bi bi-box-arrow-left"></i> Log Out
          </button>
      </div>
    </>
  );
}
