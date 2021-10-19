import React, { useEffect, useContext } from 'react'
import "../App.css";
import ConnectUs from "./ConnectUs";
import Popularpost from "./Popularpost";
import contactContext from '../Context/Contact/contactContext';
function scard(val) {
  return <Popularpost image={val.image} head={val.title} date={val.date} />;
}

export default function SidbarBlog() {

  const context = useContext(contactContext);
  const {blogs,getBlog} = context;
  useEffect(()=>{
    getBlog()
  },[])

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
        <div className="popular-post">{blogs.map(scard)}</div>
      </div>
      <div className="popular-side">
        <div className="blog-side">Connect Us</div>
        <ConnectUs />
      </div>
    </aside>
  );
}
