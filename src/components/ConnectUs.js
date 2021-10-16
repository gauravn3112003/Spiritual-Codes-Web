import React from "react";
import "../App.css";
export default function ConnectUs() {
  return (
    <div className="blog-connect">
      <form action="">
        <div className="input">
          <input
            type="email" 
            className="inpult-field email"
            placeholder="Enter the e-mail"
          />
          <input
            type="submit"
            className="inpult-field subscribe"
            value="SUBSCRIBE"
          />
        </div>
      </form>
    </div>
  );
}
