import React, { useContext } from "react";
import contactContext from "../../Context/Contact/contactContext";


export default function Blog(props) {
  const context = useContext(contactContext);
  const { deleteBlog } = context;

  return (
    <>
      <div className="row" >
        <img
          src={props.image}
          alt=""
          srcSet=""
        />

        <div className="content-blog">
          <div className="head-dash">
            {props.head}
          </div>
          <div className="published">Published : {props.date}</div>
        </div>
        <div className="btn-blog-dash">
          <button className="update center-dash">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className="delete center-dash" onClick={()=>{
                deleteBlog(props._id)
            }}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
