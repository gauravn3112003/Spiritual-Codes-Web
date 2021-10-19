import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function BlogCard(props) {
  return (
    <div className="content card-3" data-aos="fade-down">
      <img
        src=
        {props.image}
        width="30px"
        alt="project1"
      />
      <div className="tag">
        #{props.tag}
      </div>
      <div className="head" data-aos="fade-down">
        {props.head}
      </div>
      <div className="text" data-aos="fade-down">
        {props.descri}
      </div>
      <div className="btn" data-aos="fade-down">
        <div className="date">Date: {props.date}</div>
        <div className="btn-1">
          <Link to="/Blog/BlogOpen" > View</Link>
        </div>
      </div>
    </div>
  );
}
