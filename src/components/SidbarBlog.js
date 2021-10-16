import React from "react";
import "../App.css";
import Blogdetail from "../Blogdetail";
import ConnectUs from "./ConnectUs";
import Popularpost from "./Popularpost";
function scard(val) {
  return <Popularpost image={val.image} head={val.head} date={val.date} />;
}

export default function SidbarBlog() {
  return (
    <aside>
      <div className="popular-side">
        <div className="blog-side">Search Blog</div>
        <div className="search">
          <form action="">
            <input type="text" placeholder="Search Blogs..." className="serach-area" />
            <i class="bi bi-search"></i>
          </form>
        </div>
      </div>
      <div className="popular-side">
        <div className="blog-side">Popoular Post</div>
        <div className="popular-post">{Blogdetail.map(scard)}</div>
      </div>
      <div className="popular-side">
        <div className="blog-side">Connect Us</div>
        <ConnectUs />
      </div>
    </aside>
  );
}
