import React,{useContext} from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function BlogCard(props) {


  return (
    <div className="content card-3" data-aos="fade-down">
      <img src={props.image} width="30px" alt="project1" />
      <div className="tag">#{props.tag}</div>
      <div className="head" data-aos="fade-down">
        {props.head}
      </div>
      <div className="text" data-aos="fade-down">
        {props.descri}
      </div>
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
      <div className="btn" data-aos="fade-down">
        <div className="btn-1">
          <Link to={`/Blog/${props.head}/${props.id}`} > Read More</Link>
        </div>
        
      </div>
    </div>
  );
}
