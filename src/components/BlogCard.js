import React, { useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function BlogCard(props) {
  return (
    <div className=" card-3">
      <img src={props.image} width="30px" alt="project1" />
      <div className="card-right">
        <div className="tag">#{props.tag}</div>
        <div className="head" data-aos="fade-down">
          {props.head}
        </div>
        <div className="text">{props.descri}</div>
        <div className="date-author">
          <div className="date">
            <i className="bi bi-calendar-event"></i>Date:03/11/03{" "}
          </div>
          <div className="author">
            <div className="icon-auth">
              <i className="bi bi-person"></i>
            </div>
            <div className="text-auth">Spirtual_codes</div>
          </div>
        </div>

        <Link to={`/Blog/${props.head}/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
}
