import React, { useEffect, useContext } from 'react'
import contactContext from "../Context/Contact/contactContext";
import BlogCard from "./BlogCard";
import "../App.css";
// import Blogdetail from "../Blogdetail";



  
export default function BlogAllCardData() {
  function bcard(val) {
    return (
      <BlogCard
        image={val.image}
        tag={val.tag}
        head={val.title}
        descri={val.description}
        date={val.date}
        id={val._id}
        key={val._id}
      />
    );
  }

  const context = useContext(contactContext);
  const {blogs,getBlog} = context;
  useEffect(()=>{
    getBlog();
  },[])
 
    return (
        <>
        {blogs.map(bcard)}
        </>
    )
}
