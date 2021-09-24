import React from "react";
import "../App.css";
export default function popularpost(props) {
  return (
    <>
      <div className="popular">
        <div className="left-blog">
          <img
            src={props.image}
            width="30px"
            alt="project1"
          />
        </div>
        <div className="right-blog">
          <div className="head">{props.head}</div>
          <div className="date">{props.date}</div>
          {/* <div className="author">{props.head}</div> */}
        </div>
      </div>
    </>
  );
}
