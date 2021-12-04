import React from "react";
import "../App.css";
import "react-quill/dist/quill.snow.css";
import { useContext, useEffect } from "react";
import contactContext from "../Context/Contact/contactContext";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";

export default function BlogScreen(props) {
  // console.log(props.match.params.id);
  const getId = props.match.params.id;
  const context = useContext(contactContext);
  const { getBlogData, BlogData } = context;
  useEffect(() => {
    getBlogData();
    getBlogData(getId);
    console.log(BlogData.title);
  }, []);

  return (
    <>
      <div className="red">
        <Helmet>
          <title>{BlogData.title}</title>
        </Helmet>
        <header>
          <a href="/Blog">
            <i className="bi bi-arrow-left"></i>Home<span>/</span><span>{BlogData.tag} </span>
          </a>
          <h1>{BlogData.title} </h1>
          <div className="intro">
            <div className="blogLeftScreen">
              <img
                src="https://1.bp.blogspot.com/-ge9IX3fp-b4/YQvuR6Y3YdI/AAAAAAAAAMQ/dRYGG_wMaysZQjSMKPllqlobFzT5ek4QwCLcBGAsYHQ/s150/Blue%2BSimple%2BGeometric%2BDesign%2BBrand%2BLogo.png"
                alt=""
              />
              <span>By- {BlogData.author}</span>
            </div>
            <div className="blogRightScreen">
              <i className="bi bi-calendar-event" />
              <span>Date : {BlogData.datee}</span>
            </div>
          </div>
        </header>
        <hr />
        <br />
        <div className="blogdata">
          <h4>#{BlogData.tag}</h4>
          <img src={BlogData.image} />
          {/* <p>{ReactHtmlParser(BlogData.mainData)}</p> */}
          <div className="render">
            <div dangerouslySetInnerHTML={{ __html: BlogData.mainData }} />
          </div>
        </div>
      </div>
    </>
  );
}
