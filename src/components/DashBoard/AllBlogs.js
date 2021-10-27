import React, { useState } from "react";
import Blogs from "./Blogs";
import "./Styling/ConnectUs.css";
export default function AllBlogs() {

  const [searchBlog, setSearchBlog] = useState("");

  return (
    <>
      <div className="dash-head">
        <div className="text">All Blogs</div>
        <div className="search">
          <input
            type="search"
            name="search"
            placeholder="Search By title"
            onChange={(e)=>{
              setSearchBlog(e.target.value);
            }}
          />
        </div>
      </div>
      <Blogs searchBlog={searchBlog} />
    </>
  );
}
