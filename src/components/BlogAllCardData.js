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
      />
    );
  }

  const context = useContext(contactContext);
  const {blogs,getBlog} = context;
  useEffect(()=>{
    getBlog();
  },[])


  // const blogsInitial =[];
  // const [blogs, setBlogs] = useState(blogsInitial);
  
  // const host = "http://localhost:5000";
  // const getBlog = async () => {
  //   const res = await fetch(`${host}/api/createPost/fetchAllBlog`,{
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //   })
  //   const json = await res.json();
  //   console.log(json);
  //   setBlogs(json)
  // };
 
    return (
        <>
        {blogs.map(bcard)}
        </>
    )
}
