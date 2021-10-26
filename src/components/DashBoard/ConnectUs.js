import React, { useContext } from "react";

import contactContext from "../../Context/Contact/contactContext";
import "./Styling/ConnectUs.css";
export default function ConnectUs(props) {
  const context = useContext(contactContext);
  const { deleteConnect } = context;

  return (
    <>
      <div className="row row-connet">
        <div className="box-connects">
          <div className="emails">{props.email}</div>
          <div className="date-connects">Date: {props.date}</div>
        </div>
        <div className="btn-blog-dash">
          <button className="update center-dash">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            className="delete center-dash"
            onClick={() => {
              deleteConnect(props._id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}
