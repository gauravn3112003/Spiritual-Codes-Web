import React from "react";
import "../App.css";
import { useContext,useEffect } from "react";
import contactContext from "../Context/Contact/contactContext";

export default function BlogScreen(props) {

  const getId = props.match.params.id;
  const context = useContext(contactContext);
  const { getBlogData, BlogData,  } = context;
  useEffect(()=>{
    getBlogData();
  },[])
  getBlogData(getId);
    
    // console.log(BlogData.tag);
  return (
    <div className="red">
      <header>
        <a href="/Blog">
          <i className="bi bi-arrow-left"></i>Home
          
        <span>&gt; {BlogData.tag} </span>
        </a>
        <h1>{BlogData.title} </h1>
        <div className="intro">
          <div className="blogLeftScreen">
            <img
              src="https://1.bp.blogspot.com/-ge9IX3fp-b4/YQvuR6Y3YdI/AAAAAAAAAMQ/dRYGG_wMaysZQjSMKPllqlobFzT5ek4QwCLcBGAsYHQ/s150/Blue%2BSimple%2BGeometric%2BDesign%2BBrand%2BLogo.png"
              alt=""
            />
            <span>By- Gaurav Narnaware</span>
          </div>
          <div className="blogRightScreen">
          <i className="bi bi-calendar-event"/><span>Date : 03/11/03</span></div>
        </div>
      </header>
      <hr />
      <br />
      <img src={BlogData.image} />
      <h4>{BlogData.tag}</h4>
      <p>{BlogData.mainData}</p>
    </div>
  );
}
