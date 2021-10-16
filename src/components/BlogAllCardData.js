import React from 'react'
import BlogCard from "./BlogCard";
import "../App.css";
import Blogdetail from "../Blogdetail";


function bcard(val) {
    return (
      <BlogCard
        image={val.image}
        tag={val.tag}
        head={val.head}
        descri={val.descri}
        date={val.date}
      />
    );
  }
export default function BlogAllCardData() {
    return (
        <>
        {Blogdetail.map(bcard)}
        </>
    )
}
