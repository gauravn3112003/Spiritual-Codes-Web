import React from "react";
import "./Styling/Dashboard.css";
import { Link } from "react-router-dom";

export default function DashBox(props) {
  return (
    <>
      
        <div className="dash-box">
          <div className="number">{props.count}</div>
          <div className="right-dash">
            <div className="name">{props.title}</div>
            <div className="button">
              <Link to={props.location}>{props.btn}</Link>
            </div>
          </div>
        </div>
   
    </>
  );
}
